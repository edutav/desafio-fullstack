import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css'],
})
export class ListCoursesComponent implements OnInit {
  courses: any;
  currentCourse = null;
  currentIndex = -1;
  nome = '';

  constructor(private service: CoursesService) {}

  ngOnInit(): void {
    this.retrieveTutorCourses();
  }

  retrieveTutorCourses(): void {
    this.service.getAll().subscribe(
      (data) => {
        this.courses = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
