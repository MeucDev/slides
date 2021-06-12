import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Song } from './song.entity';
import { VerseType } from './verse-type.enum';

@Entity('verses')
export class Verse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 480, nullable: true })
  text: string;

  @Column({
    type: 'enum',
    enum: VerseType,
    default: VerseType.Verse
  })
  verseType: VerseType;

  @ManyToOne(() => Song, song => song.verses, { nullable: false })
  @JoinColumn({ name: 'songId' })
  song: Song;
}
