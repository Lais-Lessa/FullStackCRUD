import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1701026865917 implements MigrationInterface {
    name = 'InitialMigration1701026865917'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "details"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" ADD "details" text NOT NULL`);
    }

}
