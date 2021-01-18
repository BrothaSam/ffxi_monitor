import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class MemoryUsage {
  @PrimaryKey()
  id?: number;

  @Property({ type: "double", nullable: true })
  totalMemMb?: number;

  @Property({ type: "double", nullable: true })
  usedMemMb?: number;

  @Property({ type: "double", nullable: true })
  freeMemMb?: number;

  @Property({ type: "double", nullable: true })
  freeMemPercentage?: number;

  @Property({ type: "date" })
  createdAt? = new Date();
}
