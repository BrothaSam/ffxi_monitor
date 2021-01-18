import { Ctx, Query, Resolver } from "type-graphql";
import { CpuUsage } from "../entities/CpuUsage";
import { MyContext } from "../types";
//import { CpuUsage } from "../entities/CpuUsage";

@Resolver((of) => CpuUsage)
export class CpuUsageResolver {
  @Query(() => [CpuUsage])
  CpuUsage(@Ctx() { em }: MyContext): Promise<CpuUsage[]> {
    return em.find(CpuUsage, {});
  }
}
