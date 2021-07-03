import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, OneToMany, AfterLoad } from 'typeorm';
import { Verse } from './verse.entity';

@Entity('songs')
export class Song {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 120 })
  title: string;

  @Column({ type: 'varchar', length: 240, nullable: true })
  songwriter: string;

  @CreateDateColumn()
  dateCreated: Date;

  @UpdateDateColumn()
  dateUpdated: Date;

  @OneToMany(() => Verse, verse => verse.song, { cascade: true })
  verses: Verse[];

  @AfterLoad()
  public orderVerses() {
    if (this.verses) {
      this.verses = this.verses.sort((v1: Verse, v2: Verse) => v1.order - v2.order);
    }
  }
}
