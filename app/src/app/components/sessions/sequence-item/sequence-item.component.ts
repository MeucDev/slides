import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  @Output() load = new EventEmitter<void>();

  public loadSong(): void {
    this.load.emit();
  }
}
