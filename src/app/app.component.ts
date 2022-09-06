import {AfterViewInit, Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
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

  // 1
  @ViewChildren(CourseCardComponent)
  cards: QueryList<CourseCardComponent>;

  // 2
  // @ViewChildren(CourseCardComponent, {read: ElementRef})
  // cards: QueryList<ElementRef>;

  constructor() {

  }

  ngAfterViewInit(): void {
    // 1
    // console.log('first card: ', this.cards.first);
    // console.log('last card: ', this.cards.last);
    // console.log(this.cards)
    this.cards.changes.subscribe(
      cards => console.log(cards)
    );

    // 2
    // console.log(this.cards)
  }

  onCourseSelected(course: Course) {

  }

  onCoursesEdited() {
    this.courses.push(
      {
        id: this.cards.length,
        description: 'Angular Core Deep Dive',
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
        longDescription: 'A detailed walk-through of the most important part of Angular - the Core and Common modules',
        category: 'INTERMEDIATE',
        lessonsCount: 10
      }
    );
  }

}
