// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service'; // Import PrismaService
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,  // Inject PrismaService
    private jwtService: JwtService,
  ) {}

  async register(email: string, password: string, name: string) {
    const hashedPassword = await bcrypt.hash(password, 10);

    // Use Prisma to create a user in the database
    const user = await this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    return user;
  }

  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) throw new Error('Invalid credentials');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid credentials');

    const payload = { email: user.email, id: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
