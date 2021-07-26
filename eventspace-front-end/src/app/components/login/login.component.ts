import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService } from './login-service.service';
import { first } from 'rxjs/operators';
import { User } from 'src/app/model/user';
import { Md5 } from 'ts-md5';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username!: string;
  password !: string;
  errorMessage = 'Credenziali non valide';
  successMessage!: string;

  user!: User; 

  invalidLogin = false;
  loginSuccess = false;

  isLoggedIn!: boolean;

  constructor(private router: Router, private loginService: LoginServiceService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login(this.username, Md5.hashStr(this.password)).subscribe((result)=>{
      //console.log(result.type);
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Bentornato ' + this.username + '! 😸'  ;
      this.router.navigate(['/homepage']);
      this.isLoggedIn = true;
      this.loginService.registerSuccessfulLogin(this.username, this.password, result.type.toString(), result.id.toString());
      this.toastr.success(this.successMessage);
    },
    () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });
  }


}
