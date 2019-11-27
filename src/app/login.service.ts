import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class User {
  id: number;
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string;  
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  

  public login(value){
    return this.http.post('http://localhost:3200/signup/login_user',value).pipe(map(res => {
        if(res['message']=='ok'){
          let user=res['result'][0];
          //localStorage.setItem('role',res['result'][0]['role'])
          return res;
        }
      }))
  }
}
