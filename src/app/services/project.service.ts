import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  API_URL: string = 'http://localhost:4201/projects';

  constructor(private http: HttpClient) { }

  getProject(id: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/${id}`);
  }

  getProjects(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL)
  }

  removeProject(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/${id}`)
  }

  addProject(project: any) {
    return this.http.post(this.API_URL, project)
  }

  updateProject(project : any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/${project.id}`, project)
  }
}