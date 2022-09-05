import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { Exclude } from "class-transformer";

@Entity("users")
class User {
  @PrimaryColumn("uuid")
  id: string;

  @Column({ length: 60 })
  name: string;

  @Column({ unique: true, length: 60 })
  email: string;

  @Column()
  isAdm: boolean;

  @Column()
  isActive: boolean;

  @Column({ length: 80 })
  @Exclude()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export { User };
