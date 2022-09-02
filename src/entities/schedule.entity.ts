import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Property } from "./property.entity";
import { User } from "./user.entity";

@Entity("schedules_users_properties")
class Schedule {
  @PrimaryColumn("uuid")
  id: string;

  @Column({ type: "date" })
  date: Date;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => Property, { nullable: false })
  property: Property;

  @ManyToOne(() => User, { nullable: false })
  user: User;
}

export { Schedule };
