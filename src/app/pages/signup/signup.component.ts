import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators , FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule, FormsModule]
})
export class SignupComponent {
  registrationForm: FormGroup;

  activeTab = 1;
  isStep1Complete = false;
  step2Data: any = {};

  // Switch between tabs
  switchTab(tab: number): void {
    this.activeTab = tab;
  }

  completeStep1(): void {
    // Mark all controls as touched to trigger validation error messages
    this.registrationForm.markAllAsTouched();
  
    // Check if the form is valid
    if (this.registrationForm.valid) {
      // If valid, proceed to Step 2
      this.isStep1Complete = true;
      this.switchTab(2); // Move to Step 2
    } else {
      alert('Please fill out all fields correctly.');
    }
  }
  

  submitForm(): void {
    if (this.registrationForm.valid) {
      this.http.post('http://localhost:3000/users/profile', this.registrationForm.value).subscribe({
        next: () => {
          alert('Registration successful!');
          this.router.navigate(['/login']);
        },
        error: () => alert('Registration failed!')
      });
    }
  }

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.registrationForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.minLength(3)]],
      last_name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required]
    });
  }

  signUpWithLinkedin() {
    window.location.href = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=true&client_id=86k8sk0qrag4a6&redirect_uri=http://localhost:4200/about&scope=r_liteprofile%20r_emailaddress`;
  }
}
