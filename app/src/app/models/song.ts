import { Verse } from "./verse";

export class Song {
  id?: number;
  title!: string;
  songwriter?: string;

  verses!: Verse[];
}
