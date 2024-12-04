import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  formError: String ="";
// 
  router: Router = inject(Router);
  authService: AuthenticationService = inject (AuthenticationService);

  //Inject class Router dan service authentication  
  constructor(private fb: FormBuilder){
     this.registerForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }
  get name() {
    return this.registerForm.get('name');
  }
  
  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  submitRegister(): void {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;

      console.log('Form submitted', formData);
    this.authService.submitRegister(this.registerForm)
    .then((res)=>{
      if(res.message != null){
        this.formError = res.message;
      }else if(res.token !=null){
        this.authService.saveToken(res.token);
        this.router.navigateByUrl('/');
      }else{
        this.formError = 'Register failed please try again';
      }
    });
      //Panggil method submitRegister()
    } else {
      this.formError = 'All fields are required, please try again';
      //console.log('Form is not valid');
    }
  }
}
