import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { Song } from './song.entity';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private service: SongsService) { }

  @Get()
  async find(): Promise<Song[]> {
    return this.service.find();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Song> {
    return this.service.findOne(id);
  }

  @Post()
  async save(@Body() song: Song): Promise<Song> {
    return this.service.save(song);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<DeleteResult> {
    return this.service.delete(id);
  }
}
