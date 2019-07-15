import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
// import { Observable } from 'rxjs';
 import { IUser } from './user';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
users_url: string ="/assets/data/users.json";

  constructor(private http:HttpClient) { }

  login(username: string, password: string) {

   // let usrname: string;
    // this.users_url += "?userName=" + username + "&password=" + password;

     return this.http.get(this.users_url).pipe(
      map((response: IUser[]) => { 
        
/* console.log(username); console.log(response); */
      
 let FoundUser :IUser[];
 
 FoundUser =  response.filter((u) => ((u['userName'] === username)  && (u['password'] === password)));
//  FoundUser =  response.filter((u) => ((u.userName === username)  && (u.password === password)));

if (FoundUser.length === 0) {throw new Error("Auth error");}

        return FoundUser;
    }));
  }

}
