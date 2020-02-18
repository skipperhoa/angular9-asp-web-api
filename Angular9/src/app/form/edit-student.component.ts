import {Component} from '@angular/core';
import {Student} from '../models/student.model';
import {formatDate} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {StudentService} from '../services/student.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
@Component({
  selector: 'edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})

export class EditStudentComponent {
   student: Student = {};
   id: number;
  BirthDate: Date;
   constructor(private studentService: StudentService, private route: ActivatedRoute) {
     const id: Observable<string> = route.params.pipe(map(p => p.id));
     const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));
     // route.data includes both `data` and `resolve`
     const user = route.data.pipe(map(d => d.user));
     id.subscribe(item => {
       this.id = parseInt(item);
       console.log(this.id); // idStudent
       this.studentService.getStudent(this.id).subscribe(std => {
         console.log(std);
         const format = 'yyyy-MM-dd';
         const myDate = std.BirthDay;
         const locale = 'en-US';
         this.BirthDate = formatDate(myDate, format, locale);
         this.student = {
           idStudent: std.idStudent,
           Name: std.Name,
           Age: std.Age,
           BirthDay: this.BirthDate,
           address: std.address,
           idRoom: std.idRoom
         };
       });
     });
   }

   /**
    * EDIT STUDENT
    * */
   EditStudent = ()=>{
     this.studentService.putStudent(this.id,this.student).subscribe(item=>{
       console.log(item);
     })
   }
}
