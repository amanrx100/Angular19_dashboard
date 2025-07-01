import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    })
  }
   onSubmit(){
      const formData = this.loginForm.value;
      this.http.post('https://dummyjson.com/auth/login', formData).subscribe({
        next: (res) => {
          this.router.navigate(['/dashboard']);
        }, error: (err) => {
          console.log(err);
          
        }
      })
   }
}
