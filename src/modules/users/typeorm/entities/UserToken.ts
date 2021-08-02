import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user_tokens')
class UserToken {
  @PrimaryGeneratedColumn('uuid')
  id: string; // string porque id foi definido como tipo uuid

  @Column()
  @Generated('uuid')
  token: string;

  @Column()
  user_id: string;

  @CreateDateColumn()
  created_at: Date; // aqui é considerado o tipo Javascript

  @UpdateDateColumn()
  updated_at: Date; // aqui é considerado o tipo Javascript
}

export default UserToken;
