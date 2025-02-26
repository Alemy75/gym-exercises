import { MigrationInterface, QueryRunner } from "typeorm";

export class Auto1740572034610 implements MigrationInterface {
    name = 'Auto1740572034610'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`muscle_group\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`exercise\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`exercise_muscle_group_muscle_group\` (\`exerciseId\` int NOT NULL, \`muscleGroupId\` int NOT NULL, INDEX \`IDX_bcd8b4eddaa4fe0b5f5aa56fc9\` (\`exerciseId\`), INDEX \`IDX_62114a40f073b4414204950edc\` (\`muscleGroupId\`), PRIMARY KEY (\`exerciseId\`, \`muscleGroupId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`exercise_muscle_group_muscle_group\` ADD CONSTRAINT \`FK_bcd8b4eddaa4fe0b5f5aa56fc98\` FOREIGN KEY (\`exerciseId\`) REFERENCES \`exercise\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`exercise_muscle_group_muscle_group\` ADD CONSTRAINT \`FK_62114a40f073b4414204950edc1\` FOREIGN KEY (\`muscleGroupId\`) REFERENCES \`muscle_group\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`exercise_muscle_group_muscle_group\` DROP FOREIGN KEY \`FK_62114a40f073b4414204950edc1\``);
        await queryRunner.query(`ALTER TABLE \`exercise_muscle_group_muscle_group\` DROP FOREIGN KEY \`FK_bcd8b4eddaa4fe0b5f5aa56fc98\``);
        await queryRunner.query(`DROP INDEX \`IDX_62114a40f073b4414204950edc\` ON \`exercise_muscle_group_muscle_group\``);
        await queryRunner.query(`DROP INDEX \`IDX_bcd8b4eddaa4fe0b5f5aa56fc9\` ON \`exercise_muscle_group_muscle_group\``);
        await queryRunner.query(`DROP TABLE \`exercise_muscle_group_muscle_group\``);
        await queryRunner.query(`DROP TABLE \`exercise\``);
        await queryRunner.query(`DROP TABLE \`muscle_group\``);
    }

}
