import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigrate1679776848159 implements MigrationInterface {
    name = 'InitialMigrate1679776848159'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contacts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "full_name" character varying(130) NOT NULL, "email" character varying(50) NOT NULL, "phone" character varying(15) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "clientId" uuid, CONSTRAINT "UQ_752866c5247ddd34fd05559537d" UNIQUE ("email"), CONSTRAINT "UQ_84cae51c485079bdd8cdf1d828f" UNIQUE ("phone"), CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "clients" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "full_name" character varying(130) NOT NULL, "email" character varying(50) NOT NULL, "password" character varying(100) NOT NULL, "isAdm" boolean NOT NULL DEFAULT false, "isActive" boolean NOT NULL DEFAULT true, "phone" character varying(15) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_b48860677afe62cd96e12659482" UNIQUE ("email"), CONSTRAINT "UQ_aa22377d7d3e794ae4cd39cd9e5" UNIQUE ("phone"), CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_8039454fab552403d5579cf7423" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_8039454fab552403d5579cf7423"`);
        await queryRunner.query(`DROP TABLE "clients"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
    }

}
