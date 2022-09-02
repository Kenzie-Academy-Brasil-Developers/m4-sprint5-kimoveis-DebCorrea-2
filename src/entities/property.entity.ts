import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { Address } from "./address.entity";
import { Category } from "./category.entity";

@Entity("properties")
class Property {
  @PrimaryColumn("uuid")
  id: string;

  @Column({ default: false, nullable: true })
  sold: boolean;

  @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
  value: number;

  @Column({ type: "integer" })
  size: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Address, { nullable: false })
  @JoinColumn()
  address: Address;

  @ManyToOne(() => Category)
  category: Category;
}

export { Property };
