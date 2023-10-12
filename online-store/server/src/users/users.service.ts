import { Injectable } from '@nestjs/common';
import { User } from 'src/models/user.model';

@Injectable()
export class UsersService {
    getUser(id: string) {
        return new User();
    }

    getAllUsers() {
        return [];
    }
}