import { Router } from 'express';
import customersRouter from '@modules/customers/routes/customers.routes';
import ordersRouter from '@modules/orders/routes/orders.routes';
import passwordRouter from '@modules/users/routes/password.routes';
import productsRouter from '@modules/products/routes/products.routes';
import profileRouter from '@modules/users/routes/profile.routes';
import sessionsRouter from '@modules/users/routes/sessions.routes';
import usersRouter from '@modules/users/routes/users.routes';

const routes = Router();

routes.use('/customers', customersRouter);
routes.use('/orders', ordersRouter);
routes.use('/password', passwordRouter);
routes.use('/products', productsRouter);
routes.use('/profile', profileRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/users', usersRouter);

export default routes;
