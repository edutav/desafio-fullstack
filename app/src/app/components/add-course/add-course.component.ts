import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  course = {
    nome: '',
    professor: '',
    sala: '',
    horaInicio: '',
    horaFim: '',
  };
  submitted = false;

  constructor(private service: CoursesService) {}

  ngOnInit(): void {}

  saveCourse(): void {
    const data = {
      nome: this.course.nome,
      professor: this.course.professor,
      sala: this.course.sala,
      horaInicio: this.course.horaInicio,
      horaFim: this.course.horaFim,
    };

    this.service.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  newCourse(): void {
    this.submitted = false;
    this.course = {
      nome: '',
      professor: '',
      sala: '',
      horaInicio: '',
      horaFim: '',
    };
  }
}
