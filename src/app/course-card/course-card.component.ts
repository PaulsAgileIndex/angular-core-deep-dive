import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../model/course';


@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  @Input()
  cardIndex: number

  constructor() { }

  ngOnInit(): void {
  }

  onCourseViewed() {
    console.log("card component - button clicked...")
    this.courseEmitter.emit(this.course);
  }

  isImageVisible() {
    return this.course && this.course.iconUrl
  }

  /**
   * Returns a configuration object which is conditional true or false
   */
  cardClasses() {
    // // This is a conditional configuration object: {'beginner': true}
    //   return {'beginner': this.course.category == 'BEGINNER'};

    // Better approach:
    if (this.course.category == 'BEGINNER') {
      return ['beginner']
     } else if (this.course.category == 'ADVANCED') {
      return ['advanced']
    }
  }

  cardStyle() {
    return {
      // 'text-decoration': 'underline'
      'background-image': 'url(' + this.course.iconUrl + ')'
    };
  }
}
