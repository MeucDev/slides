import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { SongVerse } from './song-verse.entity';
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

  @OneToMany(() => SongVerse, songVerse => songVerse.verse, { nullable: false })
  songVerses: SongVerse[];
}
