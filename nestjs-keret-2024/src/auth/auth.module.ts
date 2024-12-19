import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PrismaModule } from '../../prisma/prisma.module'; // Import PrismaModule
import { JwtModule } from '@nestjs/jwt'; // If you're using JWT
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [PrismaModule, JwtModule], // Import PrismaModule and JwtModule
  providers: [AuthService, PrismaService],
})
export class AuthModule {}
