import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  title = 'Angular Core Deep Dive'

  constructor() { }

  ngOnInit(): void {
  }

}
