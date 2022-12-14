import { UserService } from './../components/user/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    public afAuth: AngularFireAuth,
    public userService: UserService,
    private router: Router
  ) {}

  canActivate(): Promise<boolean>{
    return new Promise((resolve, reject) => {
      this.userService.getCurrentUser()
      .then(user => {
        this.router.navigate(['/user']);
        return resolve(false);
      }, err => {
        return resolve(true);
      })
    })
  }
}
