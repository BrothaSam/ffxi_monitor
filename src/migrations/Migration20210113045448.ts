import { Migration } from '@mikro-orm/migrations';

export class Migration20210113045448 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `memory_usage` (`id` int unsigned not null auto_increment primary key, `total_mem_mb` double null, `used_mem_mb` double null, `free_mem_mb` double null, `free_mem_percentage` double null, `created_at` datetime not null) default character set utf8mb4 engine = InnoDB;');
  }

}
