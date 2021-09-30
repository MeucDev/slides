import { SlideType } from './slide-type.enum';

export class Slide {
  id?: number;
  sequenceItem?: number;
  text?: string;
  subtitle?: string;
  comment?: string;
  type!: SlideType;

  selected?: number = undefined;
}
