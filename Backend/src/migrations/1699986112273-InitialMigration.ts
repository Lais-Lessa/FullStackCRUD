import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1699986112273 implements MigrationInterface {
    name = 'InitialMigration1699986112273'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(150) NOT NULL, "email" character varying(100) NOT NULL, "password" character varying(150) NOT NULL, "phoneNumber" integer NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "updateAt" date NOT NULL DEFAULT now(), "deleteAt" date, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contact" ("id" SERIAL NOT NULL, "name" character varying(150) NOT NULL, "email" character varying(100) NOT NULL, "phoneNumber" integer NOT NULL, "details" text NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "updateAt" date NOT NULL DEFAULT now(), "deleteAt" date, "userId" integer, CONSTRAINT "UQ_eff09bb429f175523787f46003b" UNIQUE ("email"), CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "FK_e7e34fa8e409e9146f4729fd0cb" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "FK_e7e34fa8e409e9146f4729fd0cb"`);
        await queryRunner.query(`DROP TABLE "contact"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
