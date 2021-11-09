import { Slide } from './slide';

export class SlideSequence {
  id?: number;
  title?: string;
  subtitle?: string;
  comment?: string;
  slides?: Slide[] = [];
}
