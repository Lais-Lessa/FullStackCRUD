import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1700184855227 implements MigrationInterface {
    name = 'InitialMigration1700184855227'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "phoneNumber"`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "phoneNumber" character varying(150) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "phoneNumber"`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "phoneNumber" integer NOT NULL`);
    }

}
