import { Component ,OnInit } from '@angular/core';
import { AuthServiceService } from './services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthServiceService, private router: Router) {}

  ngOnInit() {
  this.authService.isAuthenticatedUser().subscribe((isAuthenticated) => {
    if (isAuthenticated) {
      this.router.navigate(['/produit/list']);
    } else {
      this.router.navigate(['/auth/login']);
    }
  });}

}
