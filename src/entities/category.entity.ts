import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("categories")
class Category {
  @PrimaryColumn("uuid")
  id: string;

  @Column({ unique: true })
  name: string;
}

export { Category };
