import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { SongVerse } from './song-verse.entity';
import { Song } from './song.entity';
import { VerseType } from './verse-type.enum';

@Entity('verses')
export class Verse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 480,
    nullable: true,
    default: null
  })
  text: string;

  @Column({
    type: 'varchar',
    length: 480,
    nullable: true,
    default: null
  })
  chords: string;

  @Column({
    type: 'enum',
    enum: VerseType,
    default: VerseType.Unknown
  })
  verseType: VerseType;

  @ManyToOne(() => Song, song => song.verses, { nullable: false })
  @JoinColumn({ name: 'songId' })
  song: Song;

  @OneToMany(() => SongVerse, songVerse => songVerse.verse, { nullable: false })
  songVerses: SongVerse[];
}
