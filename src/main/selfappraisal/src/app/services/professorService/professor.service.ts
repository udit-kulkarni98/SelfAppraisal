import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Professor } from 'src/app/model/professor/professor';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  public getDataById(id:number):Observable<Professor[]>{
    return this.http.get<Professor[]>(`${this.baseUrl}`+'getbyid/'+id);
  }

  public getData():Observable<Professor[]>{
    return this.http.get<Professor[]>(`${this.baseUrl}`+'get');
  }
  
  public addData(jsonData: object): Observable<object> {  
    return this.http.post<Professor>(`${this.baseUrl}`+'insert', jsonData);  
  }  
}
