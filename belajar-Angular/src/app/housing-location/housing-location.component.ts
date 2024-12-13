import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="baseUrl + housingLocation.photo" alt="Foto Eksterior {{ housingLocation.name }}">
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
      <a [routerLink]="['details', housingLocation.id]" *ngif="isLoggedIn()">show</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa/'; // Pastikan ada '/' di akhir
  authService : AuthenticationService = inject(AuthenticationService);

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}
