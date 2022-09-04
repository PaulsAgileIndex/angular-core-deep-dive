import {Component, Input, OnInit} from '@angular/core';
import {COURSES} from '../../db-data';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  title;

  constructor() { }

  ngOnInit(): void {
  }

}
