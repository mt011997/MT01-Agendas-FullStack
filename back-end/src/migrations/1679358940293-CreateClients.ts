import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateClients1679358940293 implements MigrationInterface {
    name = 'CreateClients1679358940293'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ALTER COLUMN "isAdm" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ALTER COLUMN "isAdm" DROP DEFAULT`);
    }

}
