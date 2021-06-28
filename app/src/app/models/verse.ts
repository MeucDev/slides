import { VerseType } from './verse-type.enum';

export class Verse {
  id?: number;
  songId?: number;
  text?: string;
  chords?: string;
  verseType!: VerseType;
  order?: number;
}
