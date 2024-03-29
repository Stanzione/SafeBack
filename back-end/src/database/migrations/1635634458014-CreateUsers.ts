import {MigrationInterface, QueryRunner, Table, Timestamp} from "typeorm";

export class CreateUsers1635634458014 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                  {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                  },
                  {
                    name: "name",
                    type: "varchar",
                  },

                  {
                    name: "email",
                    type: "varchar",
                  },

                  {
                    name: "cpf",
                    type: "varchar",
                  },

                  {
                    name: "rg",
                    type: "varchar",
                  },

                  {
                    name: "pj",
                    type: "boolean",
                    default: false,
                  },

 
                  {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                  },

                  {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()",
                  },
                ],
              })
            );
          }
        
          public async down(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.dropTable("users");
          }
        }
