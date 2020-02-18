import {Component, OnInit} from '@angular/core';
import { of } from 'rxjs';
import {StudentService} from '../services/student.service';
import { Student } from '../models/student.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  title = "Demo Angular 9";
  students:any;
  constructor(private studentService:StudentService){

  }
  ngOnInit() {
    this.getAllStudent();
  }
  /*
  * GET ALL STUDENT
  * */
  getAllStudent(){
    this.studentService.getAllStudent().subscribe(item=>{
      this.students = item;
      console.log(item[0]);
      //console.log(item[0].StudentExercises[0].Exercise.Name)
    });
  }


  /*
  * DELETE STUDENT
  * */
  DeleteStudent = (id,index)=>{
    this.studentService.deleteStudent(id).subscribe(item=>{
      console.log(item);
      if(item=='Ok'){
        console.log("xóa thành công")!
        var data = this.students;
        this.students = data.filter(check => check.idStudent !== id);

      }


    });
  }
}
