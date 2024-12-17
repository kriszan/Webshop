import { Injectable } from '@nestjs/common';
import { User } from './user.schema';

@Injectable()
export class UserService {
  // Assuming you're using some ORM like TypeORM or Mongoose
  async findOne(id: string) {
    return User.findById(id);
  }

  async updateName(id: string, name: string) {
    return User.findByIdAndUpdate(id, { name });
  }

  async updatePassword(id: string, password: string) {
    return User.findByIdAndUpdate(id, { password });
  }
}
