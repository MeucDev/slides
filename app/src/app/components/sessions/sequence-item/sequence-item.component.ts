import { Component, Input } from '@angular/core';

@Component({
  selector: 'sequence-item',
  templateUrl: './sequence-item.component.html',
  styleUrls: ['./sequence-item.component.scss']
})
export class SequenceItemComponent {
  @Input() id?: number;
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() comment?: string;
}
