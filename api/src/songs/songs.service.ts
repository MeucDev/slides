import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Song } from './song.entity';

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Song)
    private songsRepository: Repository<Song>,
  ) { }

  async find(): Promise<Song[]> {
    return this.songsRepository.find();
  }

  async findOne(id: number): Promise<Song> {
    return this.songsRepository.findOne(id, { relations: [ "verses" ] });
  }

  async save(song: Song): Promise<Song> {
    let newSong = this.songsRepository.create(song);
    return this.songsRepository.save(newSong);
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.songsRepository.delete(id);
  }
}
