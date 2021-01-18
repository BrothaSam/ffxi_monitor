import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class CpuUsage {
  @Field(() => Int)
  @PrimaryKey()
  id?: number;

  @Field({ nullable: true })
  @Property({ type: "double", nullable: true })
  usage?: number;

  @Field(() => String)
  @Property({ type: "date" })
  createdAt? = new Date();
}
