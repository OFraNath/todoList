import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";
import { UpdateTodoDto } from "../dto/update-todo.dto";
@Injectable()
export class FindAllTodosRepository {
    constructor(private readonly prisma: PrismaService) {}

    async execute() {
        return await this.prisma.todo.findMany();
    }
}
