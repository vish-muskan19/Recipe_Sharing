import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

private baseUrl = 'http://localhost:8091'

  constructor(private http:HttpClient) { }

authSubject = new BehaviorSubject<any>({ //save any values
  user:null
})

  login(userData:any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/auth/signin`, userData);
  }


  register(userData:any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/auth/signup`, userData);
  }


  // getUserProfile():Observable<any>{
  //   const headers = new HttpHeaders
  //   ({
  //       Authorization:'Bearer ${localStorage.getItem("jwt")}'
  //   })
  //   return this.http.get<any>(`${this.baseUrl}/api/users/profile`,{headers})
  //   .pipe(
  //     tap((user) => {
  //       console.log("get user profile ",user)
  //       const currentState =this.authSubject.value;
  //       this.authSubject.next({...currentState,user})
  //     })
  //   )
  // }

  getUserProfile(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem("jwt")}`
    });
  
    return this.http.get<any>(`${this.baseUrl}/api/users/profile`, { headers }).pipe(
      tap((user) => {
        console.log("get user profile ", user)
        const currentState = this.authSubject.value;
        this.authSubject.next({ ...currentState, user });
      })
    );
  }
  

  logout(){
    localStorage.clear()
    this.authSubject.next({})
  }
}
