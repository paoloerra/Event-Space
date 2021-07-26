import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { User } from 'src/app/model/user';
import { Md5 } from 'ts-md5';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user!: User;
  userForm!: FormGroup;
  router: Router;
  successMessage!: string;


  constructor(private signUp:SignupService, router: Router,private formBuilder: FormBuilder, private toastr: ToastrService) { 
    this.router = router;
  }
 ngOnInit(){
  this.userForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    email: ['', [Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]]
  });
 }

  onSubmit() {
    console.log(Md5.hashStr(this.userForm.value.password));
    const password = Md5.hashStr(this.userForm.value.password);
    this.userForm.value.password = password;

      const onSuccess = (response: User) => {
        console.log("Registrazione andata a buon fine", response);
        this.successMessage = "Benvenuto " + this.userForm.value.username +"! 😸"  
        this.toastr.success("Registrazione completata", this.successMessage);
        this.signUp.registerSuccessfulSignUp(this.userForm.value.username, response.id);
        this.router.navigate(['./homepage']);
      }
      const onError = (response: any) => {
        console.log("Errore", response);
        this.toastr.error("Errore registrazione 😡");  

      }
      this.signUp.addUser(this.userForm.value).subscribe(onSuccess, onError);
  
  
  }
  




}
