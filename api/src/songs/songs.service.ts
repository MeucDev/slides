import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Song } from './song.entity';

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Song)
    private songsRepository: Repository<Song>,
  ) { }

  async findAll(): Promise<Song[]> {
    return this.songsRepository.find();
  }

  async findSingle(id: string): Promise<Song> {
    return this.songsRepository.findOne(id);
  }
}
