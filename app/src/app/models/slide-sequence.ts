import { Slide } from './slide';

export class SlideSequence {
  id?: number;
  title?: string;
  subtitle?: string;
  comment?: string;
  slides?: Slide[] = [];

  public init(init?: Partial<SlideSequence>): SlideSequence {
    Object.assign(this, init);
    return this;
  }

  public slidePreview(): string {
    if (this.slides !== undefined &&
        this.slides !== null &&
        this.slides.length > 0) {
      return this.slides[0].text ?? '';
    }

    return '';
  }
}
