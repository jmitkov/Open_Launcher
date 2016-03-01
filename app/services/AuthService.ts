import {Injectable, provide} from 'angular2/core';

@Injectable()
export class AuthService {
  login(user: string): boolean {
      localStorage.setItem('username', user);
      return true;
  }

  logout(): any {
    localStorage.removeItem('username');
  }

  getUser(): any {
    return localStorage.getItem('username');
  }

  isLogged(): boolean {
    return this.getUser() !== null;
  }
}

export var AUTH_PROVIDERS: Array<any> = [
  provide(AuthService, {useClass: AuthService})
];
