import {inject, Injectable} from '@angular/core';
import { UserInterface } from '../types/user.interface';
import {BehaviorSubject} from "rxjs";
// import {UtilsService} from "./utils.service";

@Injectable()
export class UsersService {
  // utilsService = inject(UtilsService)
  // users: UserInterface[] = [];
  users$ = new BehaviorSubject<UserInterface[]>([]);

  addUser(user: UserInterface): void {
    // this.users = [...this.users, user];
    this.users$.next([...this.users$.getValue(), user]);
  }

  removeUser(userId: string): void {
    // const updatedUsers = this.users.filter((user) => userId !== user.id);
    // this.users = updatedUsers;
    const updateUsers = this.users$
      .getValue()
      .filter((user) => userId !== user.id);
    this.users$.next(updateUsers);
  }

  // getUsernames(): string[] {
  //   return this.utilsService.pluck(this.users, 'name');
  // }
}
