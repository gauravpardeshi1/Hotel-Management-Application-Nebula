// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Your authentication or authorization logic here
    // For example, you might check if the user is logged in
    const isLoggedIn = false; // Replace this with your actual logic
    const user = localStorage.getItem('user');
  
    if (user=='true') {
      return true; // Allow access to the route
    } else {
      // If the user is not authenticated, navigate to the login page
      alert('Please Login First')
      this.router.navigate(['/signin']);
      return false; // Deny access to the route
    }
  }
}
