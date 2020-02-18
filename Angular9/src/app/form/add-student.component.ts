import {Component} from '@angular/core';
import {StudentService} from '../services/student.service';
import {Student} from '../models/student.model';
@Component({
    selector: 'add-student',
    templateUrl: './add-student.component.html',
    styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent{
  student={};
  constructor(private  studentService: StudentService){}
  addStudent=()=>{
    console.log('addStudent is method');
   // console.log(this.student);
    this.studentService.postAddStudent(this.student).subscribe(item=>{
      console.log(item)
    });
  }
}
