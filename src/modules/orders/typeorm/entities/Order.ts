import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import Customer from '@modules/customers/typeorm/entities/Customer';
import OrdersProducts from './OrdersProducts';

@Entity('orders')
class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string; // string porque id foi definido como tipo uuid

  @ManyToOne(() => Customer)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @OneToMany(() => OrdersProducts, order_products => order_products.order, {
    cascade: true,
  })
  order_products: OrdersProducts[];

  @CreateDateColumn()
  created_at: Date; // aqui é considerado o tipo Javascript

  @UpdateDateColumn()
  updated_at: Date; // aqui é considerado o tipo Javascript
}

export default Order;
