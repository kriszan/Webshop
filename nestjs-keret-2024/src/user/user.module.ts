import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaModule } from '../../prisma/prisma.module'; // Import PrismaModule

@Module({
  imports: [PrismaModule], // Import PrismaModule
  providers: [UserService],
})
export class UserModule {}
