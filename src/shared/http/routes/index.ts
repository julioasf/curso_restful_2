import { Router } from 'express';
import productsRouter from '@modules/products/routes/products.routes';
import passwordRouter from '@modules/users/routes/password.routes';
import sessionsRouter from '@modules/users/routes/sessions.routes';
import usersRouter from '@modules/users/routes/users.routes';

const routes = Router();

routes.use('/password', passwordRouter);
routes.use('/products', productsRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/users', usersRouter);

export default routes;
