import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1700933489699 implements MigrationInterface {
    name = 'InitialMigration1700933489699'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "updateAt" TO "updatedAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "updatedAt" TO "updateAt"`);
    }

}
