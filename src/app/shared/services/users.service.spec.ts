import {UsersService} from "./users.service";
import {TestBed} from "@angular/core/testing";
import {UserInteface} from "../types/user.interface";

describe('UsersService', () => {
  let usersService: UsersService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService],
    })

    usersService = TestBed.inject(UsersService)
  });

  it('creates a service', () => {
    expect(usersService).toBeTruthy();
  });

  describe('addUser', () => {
    it('should add a user', () => {
      const user: UserInteface = {
        id: '3',
        name: 'foo'
      }
      usersService.addUser(user);
      expect(usersService.users).toEqual([{id: '3', name: 'foo'}]);
    });
  });

  describe('removeUser', () => {
    it('should remove a user', () => {
      usersService.users = [{id: '3', name: 'foo'}];
      usersService.removeUser('3');
      expect(usersService.users).toEqual([]);
    });
  });
});
