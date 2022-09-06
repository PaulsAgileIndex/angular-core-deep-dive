import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  courses = COURSES;

  @ViewChild('cardRef1', {read: ElementRef})
  card1: CourseCardComponent

  @ViewChild('myContainer')
  containerDiv: ElementRef;

  @ViewChild('courseImage')
  courseImage: ElementRef

  constructor() {
    // Not available at construction time
    console.log("card1: ",  this.card1);
  }

  ngAfterViewInit(): void {
    // Earliest moment when view child is available
    console.log("card1: ",  this.card1);
  }

  onCourseSelected(course: Course) {
    // console.log("card1: ",  this.card1);
    // console.log("containerDiv: ", this.containerDiv)
    console.log("courseImage: ",  this.courseImage);
  }
}
