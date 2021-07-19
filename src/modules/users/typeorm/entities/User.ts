import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string; // string porque id foi definido como tipo uuid

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  avatar: string;

  @CreateDateColumn()
  created_at: Date; // aqui é considerado o tipo Javascript

  @UpdateDateColumn()
  updated_at: Date; // aqui é considerado o tipo Javascript
}

export default User;
