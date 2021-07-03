import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
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

  @Column({
    type: 'int',
    nullable: false,
    default: 0
  })
  order: number;

  @ManyToOne(() => Song, song => song.verses, { orphanedRowAction: 'delete' })
  @JoinColumn({ name: 'songId', referencedColumnName: 'id' })
  song: Song;

  @Column({ type: 'int' })
  songId: number;
}
