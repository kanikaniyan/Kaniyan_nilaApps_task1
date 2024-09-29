import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) {}

  // Method to get course data from the JSON file
  getCourseData(): Observable<any> {
    return this.http.get('/assets/db.json');
  }
}
