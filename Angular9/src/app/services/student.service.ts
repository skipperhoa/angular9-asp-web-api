import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {Student} from '../models/student.model';
const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'X-CSRF-TOKEN': 'QYnhwj1SNxOSgd6wMJi5pxyQJXMgUALjc2Ihv9Si'})
};
@Injectable({
    providedIn: 'root',
})

export class StudentService {
    private REST_API_SERVER = 'https://localhost:44355/api';
    constructor(private http: HttpClient) {}
    // getUsers(): Observable<User[]>{
    //     return of(USERS);
    // }
    getAllStudent() {
        return this.http.get(this.REST_API_SERVER + '/student').pipe(catchError(this.handleError));
    }

    /*
    * ADD STUDENT
    * */
    postAddStudent(student: Student): Observable<Student> {
      return this.http.post(this.REST_API_SERVER + '/student', student, httpOptions).pipe(catchError(this.handleError));
    }

      /**
       * EDIT STUDENT
       * */
      getStudent(id: number) {
        return this.http.get(this.REST_API_SERVER + '/student/' + id).pipe(catchError(this.handleError));
      }

      /**
       * PUT STUDENT (UPDATE STUDENT)
       * */
      putStudent(id: number, student: Student): Observable<Student> {
        return this.http.put(this.REST_API_SERVER + '/student/' + id, student, httpOptions).pipe(catchError(this.handleError));
      }

  /**
   * DELELE STUDENT
   */
   deleteStudent(id: number) {
     return this.http.delete(this.REST_API_SERVER + '/student/' + id).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
        let errorMessage = 'Unknown error!';
        if (error.error instanceof ErrorEvent) {
          // Client-side errors
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // Server-side errors
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
      }

}
