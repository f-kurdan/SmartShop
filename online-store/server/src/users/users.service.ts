import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getUser(id: string) {
        return " this method returns User";
    }

    getAllUsers() {
        return [];
    }
}