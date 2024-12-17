import { Controller, Get, Patch, Body, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard'; // Custom AuthGuard

@Controller('profile')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard)
  @Get()
  getProfile(@Request() req) {
    return this.userService.findOne(req.user.id);
  }

  @UseGuards(AuthGuard)
  @Patch('name')
  updateName(@Request() req, @Body() { name }: { name: string }) {
    return this.userService.updateName(req.user.id, name);
  }

  @UseGuards(AuthGuard)
  @Patch('password')
  updatePassword(@Request() req, @Body() { password }: { password: string }) {
    return this.userService.updatePassword(req.user.id, password);
  }
}
