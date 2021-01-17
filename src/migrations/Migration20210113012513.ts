import { Migration } from '@mikro-orm/migrations';

export class Migration20210113012513 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `cpu_usage` (`id` int unsigned not null auto_increment primary key, `usage` double not null, `created_at` datetime not null) default character set utf8mb4 engine = InnoDB;');
  }

}
