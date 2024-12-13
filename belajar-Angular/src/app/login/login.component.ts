import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formError: string = '';
  loginForm: FormGroup;

  // Inject Router and AuthenticationService
  router = inject(Router);
  authService = inject(AuthenticationService);

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  public onLoginSubmit(): void {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      console.log('from subbited', formData);
      //panggil metod login auth
      const user = { ...this.loginForm.value } as User;
      this.authService.loginAuth(user).then((res) => {
        if (res.message !=null) {
          this.formError = res.message;
        } else if (res.token !=null) {
          this.authService.saveToken(res.token);
          this.router.navigateByUrl('/');
        } else {
          this.formError = 'Login failed. Please try again.';
        }
      }).catch((error) => {
        this.formError = 'An error occurred during login. Please try again.';
        console.error(error);
      });
    } else {
      this.formError = 'All fields are required. Please try again.';
    }
  }
}
