import { Migration } from '@mikro-orm/migrations';

export class Migration20210113021512 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `cpu_usage` modify `usage` double null;');
  }

}
