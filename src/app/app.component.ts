import {Component, ElementRef, ViewChild} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;

  // @ViewChild('cardRef1')
  // card1: CourseCardComponent

  @ViewChild('cardRef1', {read: ElementRef})
  card1: CourseCardComponent

  // @ViewChild('cardRef2')
  // card2: CourseCardComponent

  @ViewChild('myContainer')
  containerDiv: ElementRef;

  onCourseSelected(course: Course) {
    console.log("card1: ",  this.card1);
    // console.log("card2: ",  this.card2);
    // console.log("containerDiv: ", this.containerDiv)
  }
}
