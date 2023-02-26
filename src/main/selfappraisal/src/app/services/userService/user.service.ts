import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/model/userModel/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }  

  public addUser(jsonData: object): Observable<object> {  
    return this.http.post<UserModel>(`${this.baseUrl}`+'/createUser', jsonData);  
  }  
  
  public addPrincipal(jsonData: object): Observable<object> {  
    return this.http.post<UserModel>(`${this.baseUrl}`+'/createPrincipal', jsonData);  
  } 

  public createHodExtc(jsonData: object): Observable<object> {  
    return this.http.post<UserModel>(`${this.baseUrl}`+'/createHodExtc', jsonData);  
  } 

  public createHodCe(jsonData: object): Observable<object> {  
    return this.http.post<UserModel>(`${this.baseUrl}`+'/createHodCe', jsonData);  
  } 

  public createHodCse(jsonData: object): Observable<object> {  
    return this.http.post<UserModel>(`${this.baseUrl}`+'/createHodCse', jsonData);  
  } 

  public createHodAsh(jsonData: object): Observable<object> {  
    return this.http.post<UserModel>(`${this.baseUrl}`+'/createHodAsh', jsonData);  
  } 

  public createHodEe(jsonData: object): Observable<object> {  
    return this.http.post<UserModel>(`${this.baseUrl}`+'/createHodEe', jsonData);  
  } 

  public createHodIt(jsonData: object): Observable<object> {  
    return this.http.post<UserModel>(`${this.baseUrl}`+'/createHodIt', jsonData);  
  } 

  // public login(username: String,passsword: String){
  //   return this.http.get<HttpResponse<boolean>>(`${this.baseUrl}`+'login/'+username+'/'+passsword);
  // }

  // public login(username: String,passsword: String){
  //   return this.http.get<HttpResponse<boolean>>(`${this.baseUrl}`+'login/'+username+'/'+passsword);
  // }
}
