import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  addStudent:any;
  constructor(private fb:FormBuilder,
    private routes:Router,
    private studentservice:StudentsService
    ){
      this.addStudent = fb.group(
        {
          Id:['',Validators.required],
          Name:['',Validators.required],
          Role:['',Validators.required],
          email:['',Validators.required],
          Contact:['',Validators.required],
          password:['',Validators.required],
        }
      )
    }

  ngOnInit(): void {
  }
 onSubmit(){
   console.log(this.addStudent.value);
   this.studentservice.addStudent(this.addStudent.value).subscribe((data:any)=>{
    console.log(data);
   this.routes.navigate(['/list-student']);
   })
 }
}


