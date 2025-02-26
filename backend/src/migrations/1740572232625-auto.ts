import { MigrationInterface, QueryRunner } from "typeorm";

export class Auto1740572232625 implements MigrationInterface {
    name = 'Auto1740572232625'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`exercise_muscle_groups_muscle_group\` (\`exerciseId\` int NOT NULL, \`muscleGroupId\` int NOT NULL, INDEX \`IDX_4113f3d737c4990a04c585f755\` (\`exerciseId\`), INDEX \`IDX_8ca9efa5b98ada9b5843b757b1\` (\`muscleGroupId\`), PRIMARY KEY (\`exerciseId\`, \`muscleGroupId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`exercise_muscle_groups_muscle_group\` ADD CONSTRAINT \`FK_4113f3d737c4990a04c585f755a\` FOREIGN KEY (\`exerciseId\`) REFERENCES \`exercise\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`exercise_muscle_groups_muscle_group\` ADD CONSTRAINT \`FK_8ca9efa5b98ada9b5843b757b1c\` FOREIGN KEY (\`muscleGroupId\`) REFERENCES \`muscle_group\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`exercise_muscle_groups_muscle_group\` DROP FOREIGN KEY \`FK_8ca9efa5b98ada9b5843b757b1c\``);
        await queryRunner.query(`ALTER TABLE \`exercise_muscle_groups_muscle_group\` DROP FOREIGN KEY \`FK_4113f3d737c4990a04c585f755a\``);
        await queryRunner.query(`DROP INDEX \`IDX_8ca9efa5b98ada9b5843b757b1\` ON \`exercise_muscle_groups_muscle_group\``);
        await queryRunner.query(`DROP INDEX \`IDX_4113f3d737c4990a04c585f755\` ON \`exercise_muscle_groups_muscle_group\``);
        await queryRunner.query(`DROP TABLE \`exercise_muscle_groups_muscle_group\``);
    }

}
