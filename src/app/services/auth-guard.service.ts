import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate} from '@angular/router';
import { AuthService} from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private _authService: AuthService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (this._authService.isAuthenticated()) {
          console.log(`Pasó el GUARD [next: ${next} - state: ${state}]`);
          return true;
      }else {
          console.log(`NO Pasó el GUARD [next: ${next} - state: ${state}]`);
          return false;
      }
  }

}
