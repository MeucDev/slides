import { Slide } from './slide';

export class SlideSequence {
  id?: number;
  title?: string;
  subtitle?: string;
  slides: Slide[] = [];
}
