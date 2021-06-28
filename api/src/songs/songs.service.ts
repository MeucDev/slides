import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
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
    const record = this.songsRepository.create(song);
    return this.songsRepository.save(record);
  }

  async update(id: number, song: Song): Promise<Song> {
    const record = await this.songsRepository.findOne(id);
    this.songsRepository.merge(record, song);
    return this.songsRepository.save(record);
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.songsRepository.delete(id);
  }
}
