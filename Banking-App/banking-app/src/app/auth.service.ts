import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  constructor(private router: Router) {}

  login(username: string, password: string) {
    // Simplified authentication logic for demonstration
    if (username === 'user' && password === 'password') {
      this.loggedIn = true;
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  logout() {
    this.loggedIn = false;
    this.router.navigate(['/login']);
  }
}
