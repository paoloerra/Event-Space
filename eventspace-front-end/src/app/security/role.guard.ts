import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  USER_NAME_TYPE_ATTRIBUTE_NAME = 'typeuser';

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(sessionStorage.getItem(this.USER_NAME_TYPE_ATTRIBUTE_NAME));
      if(sessionStorage.getItem(this.USER_NAME_TYPE_ATTRIBUTE_NAME) != "0") {
        return true;
      }
    return false;
  }
  
}
