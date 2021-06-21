import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Song } from './song.entity';
import { Verse } from './verse.entity';

@Entity('songVerse')
export class SongVerse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'int',
    nullable: false,
    default: 0
  })
  order: number;

  @ManyToOne(() => Song, song => song.songVerses, { nullable: false })
  @JoinColumn({ name: 'songId' })
  song: Song;

  @ManyToOne(() => Verse, verse => verse.songVerses, { nullable: false })
  @JoinColumn({ name: 'verseId' })
  verse: Verse;
}
