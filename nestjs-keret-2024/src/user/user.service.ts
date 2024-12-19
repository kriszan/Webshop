import { Injectable } from '@nestjs/common';
import { User } from './user.schema';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
@Injectable()
export class UserService {
  async findOne(id: string) {
    return prisma.user.findUnique({ where: { id: parseInt(id) } });
  }

  async updateName(id: string, name: string) {
    return prisma.user.update({ where: { id: parseInt(id) }, data: { name } });
  }

  async updatePassword(id: string, password: string) {
    return prisma.user.update({
      where: { id: parseInt(id) },
      data: { password },
    });
  }
}
