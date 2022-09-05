import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("addresses")
class Address {
  @PrimaryColumn("uuid")
  id: string;

  @Column()
  district: string;

  @Column({ length: 8 })
  zipCode: string;

  @Column({ nullable: true, length: 10 })
  number: string;

  @Column()
  city: string;

  @Column()
  state: string;
}

export { Address };
