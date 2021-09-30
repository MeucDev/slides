import { Component, Input } from '@angular/core';
import { Slide } from 'src/app/models';

@Component({
  selector: 'slide-item',
  templateUrl: './slide-item.component.html',
  styleUrls: ['./slide-item.component.scss']
})
export class SlideItemComponent {
  @Input() slide?: Slide;

  get slideLines(): string[] {
    return this.slide?.text?.split('\n') ?? [];
  }
}
