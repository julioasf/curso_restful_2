import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('products')
class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string; // string porque id foi definido como tipo uuid

  @Column()
  name: string;

  @Column('decimal')
  price: number;

  @Column('int')
  quantity: number;

  @CreateDateColumn()
  created_at: Date; // aqui é considerado o tipo Javascript

  @UpdateDateColumn()
  updated_at: Date; // aqui é considerado o tipo Javascript
}

export default Product;
