import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = "http://localhost:3000/housing";

  constructor() { }

  async getAllHousingLocations() : Promise<HousingLocation[]>{
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: Number) : Promise<HousingLocation | undefined>{
    const data = await fetch(`${this.url}/${id}`); //http://localhost:3000/housing/1
    return await data.json() ?? {};
  }

  async submitApplication(firstName: string, lastName: string, email: string): Promise<void> {
    const response = await fetch(`${this.url}/apply`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, lastName, email }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit application');
    }
    console.log('Application submitted:', await response.json());
  }
}
