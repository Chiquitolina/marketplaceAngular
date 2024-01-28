import { Component } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { AuthserviceService } from 'src/app/services/auth/authservice.service';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authSer: AuthserviceService,
              private router: Router) {}

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  
  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);

  loginForm = new FormGroup({
    emailFormControl: this.emailFormControl,
    passwordFormControl: this.passwordFormControl
  });

  public onSubmit() {
    if (this.loginForm.valid) {
      const credentials = {
        adminUser: this.loginForm.value.emailFormControl || '',
        adminPassword: this.loginForm.value.passwordFormControl || ''
      }
      this.authSer.authenticate(credentials)
      .subscribe(
        (response: any) => {
          console.log('Login exitoso!', response)
          localStorage.setItem('token', response.token);
          this.router.navigate(['/admin']);
        },
        (error: any) => {
          console.log(error)
        }
      )
    }
  }

  matcher = new MyErrorStateMatcher();

}
