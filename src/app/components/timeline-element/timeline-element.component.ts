import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-element',
  templateUrl: './timeline-element.component.html',
  styleUrls: ['./timeline-element.component.scss']
})
export class TimelineElementComponent {
  @Input() timelineElement: any;
  @Input() i: any;
  constructor() {}
}
