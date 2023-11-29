import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1701221457482 implements MigrationInterface {
    name = 'InitialMigration1701221457482'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "deleteAt" TO "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "UQ_eff09bb429f175523787f46003b"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "UQ_eff09bb429f175523787f46003b" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "deletedAt" TO "deleteAt"`);
    }

}
