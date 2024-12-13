import { Inject, Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Auth } from './auth';
import { BROWSER_STORAGE } from './storage';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(@Inject(BROWSER_STORAGE) private storage: Storage) { }

  url = "http://localhost:3000";

  async submitRegister(registerdata : FormGroup) : Promise<Auth>{
  const data = await fetch(`${this.url}/users/register`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({... registerdata.value})
  });
  return await data.json() ?? {};
  }

  //untuk kebnutuhan l;ogin
  async loginAuth(user : User) : Promise<Auth>{
    const data = await fetch('$ {this.Url}/user/login',{
      method: 'post',
      headers : {'Content-Type' : 'application/json'},
      body: JSON.stringify(user)
    });
    return await data.json() ?? {};
  }

  //untuk menga,bil token
  public gettoken(): any{
    return this.storage.getItem('app-tokenm')
  }
  // untuk menyimpan token
  public saveToken(token: string): void{
    this.storage.setItem('app-token', token);
  }


  public isLoggedIn(): boolean {
    const token: string = this.gettoken();
    if(token){
      const payload =JSON.parse(atob(token.split('.')[1]));
      return payload.exp >(Date.now()/1000);
    }else{
      return false;
    }
  }
  //untuk kebutuhan logout
  public logout(): void{
    this.storage.removeItem("app-token");
  }
  //untuk mengabli info user
  public getCurrentUser(): User | null {
    if(this.isLoggedIn()){
      const token = this.getToken();
      const { email, name } = JSON.parse(atob(token.split('.')[1]));
      return { email, name } as User;
    }else{
      return null;
    }
  }

}
