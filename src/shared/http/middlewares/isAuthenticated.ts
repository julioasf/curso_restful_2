import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import AppError from '@shared/errors/AppError';
import authConfig from '@config/auth';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT Token is missing.');
  }

  // A string que contém o tokem tem o seguinte formato: Bearer sdfjlfsdflsdfkljflsfdj
  // A linha abaixo gera um array de uma posição, pois divide a strind que contém o toquem pelo espaço em branco (split(' '))
  // https://www.udemy.com/course/api-restful-de-vendas/learn/lecture/23816254#questions/13740580 (10:05)
  const [, token] = authHeader.split(' ');

  try {
    const decodedToken = verify(token, authConfig.jwt.secret);

    const { sub } = decodedToken as ITokenPayload;

    request.user = {
      id: sub,
    };

    return next();
  } catch {
    throw new AppError('Invalid JWT Token.');
  }
}
