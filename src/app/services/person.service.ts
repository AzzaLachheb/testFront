
import { Person } from '../model/person';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { InMemoryDataService } from 'src/app/in-memory-data.service';

//const baseUrl = 'http://localhost:8080/api/persons';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private baseUrl = 'app/personsList';
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http
    .get<Person[]>(this.baseUrl)
    .pipe(map(data => data), catchError(this.handleError));
  }

  get(id) {
        return this.getAll().pipe(
      map(persons => {
        persons.filter(person => person.id === id)
      }
      ));
  }


  create(data): Observable<any> {
    //return this.http.post(baseUrl, data);
    if (data.id) {
      return this.put(data);
    }
    return this.post(data);
  }

    // Add new Person
    private post(hero: Person) {
      const headers = new Headers({
        'Content-Type': 'application/json'
      });
  
      return this.http
        .post<Person>(this.baseUrl, hero)
        .pipe(catchError(this.handleError));
    }
  
    // Update existing Hero
    private put(person: Person) {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
  
      const url = `${this.baseUrl}/${person.id}`;
  
      return this.http.put<Person>(url, person).pipe(catchError(this.handleError));
    }

  update(id, data): Observable<any> {
    return this.put(data);
  }

  delete(id): Observable<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.baseUrl}/${id}`;

    return this.http.delete<Person>(url).pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}