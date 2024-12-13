import { Component, inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { User } from './user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'belajar-Angular';

  router: Router = inject(Router)
  authenticationService: AuthenticationService = inject(AuthenticationService)

  public isLoggedIn() : boolean {
    return this.authenticationService.isLoggedIn();
  }

  public doLogout(): void {
    this.authenticationService.logout();
    this.router.navigateByUrl('/login');
  }

  public getUsername(): string {
    const user : User | null = this.authenticationService.getCurrentUser();
    return user ? user.name : 'Guest';
  }
}
