import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { SongVerse } from './song-verse.entity';

@Entity('songs')
export class Song {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 120 })
  title: string;

  @Column({ type: 'varchar', length: 240, nullable: true })
  songWriter: string;

  @CreateDateColumn()
  dateCreated: Date;

  @UpdateDateColumn()
  dateUpdated: Date;

  @OneToMany(() => SongVerse, songVerse => songVerse.song, { cascade: [ 'insert', 'update', 'remove' ] })
  songVerses: SongVerse[];
}
