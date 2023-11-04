import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private isAuthenticated = new BehaviorSubject<boolean>(false);

  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  register(user: any) {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  getAuthToken(): string | null {
    return localStorage.getItem('token');
  }

  login(credentials: any) {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      map((response: any) => {
        if (response && response.token) {
          this.setToken(response.token); // Set the token on successful login
          return response;
        }
        return response;
      })
    );
  }

  logout() {
    // Clear the token and set isAuthenticated to false on logout
    this.clearToken();
    this.isAuthenticated.next(false);
    return this.http.post(`${this.apiUrl}/logout`, {});
  }

  setToken(token: string) {
    // Store the token in local storage
    localStorage.setItem('token', token);
    this.isAuthenticated.next(true);
  }

  clearToken() {
    // Remove the token from local storage
    localStorage.removeItem('token');
  }

  getUserInfo() {
    return this.http.get(`${this.apiUrl}/user`);
  }
  isAuthenticatedUser() {
    return this.isAuthenticated.asObservable();
  }
}
