import 'reflect-metadata'; // Deve ser o primeiro import deste arquivo
import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errors } from 'celebrate';
import { pagination } from 'typeorm-pagination';
import routes from './routes';
import AppError from '@shared/errors/AppError';
import '@shared/typeorm'; // Efetua a conexão com o bd conforme arquivo index.ts do diretório typeorm
import uploadConfig from '@config/upload';
import rateLimiter from '@shared/http/middlewares/rateLimiter';

const app = express();

app.use(cors());
app.use(express.json());
app.use(rateLimiter); // Esse middleware deve estar posicionado antes de qualquer rota ou requisição.
app.use(pagination);
app.use('/files', express.static(uploadConfig.directory)); // rota estática para acesso aos arquivos de upload (https://www.udemy.com/course/api-restful-de-vendas/learn/lecture/23872440#questions/13740580)
app.use(routes);

app.use(errors());

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    console.log(error);

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});
