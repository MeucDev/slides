import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';
import { Song } from './song.entity';
import { SongsService } from './songs.service';

interface SongSearchPayload {
  query: string;
}

@ApiTags('songs')
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

  @Post('search')
  async search(@Body() queryPayload: SongSearchPayload): Promise<Song[]> {
    return this.service.search(queryPayload.query);
  }

  @Post()
  async save(@Body() song: Song): Promise<Song> {
    return this.service.save(song);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() song: Song): Promise<Song> {
    return this.service.update(id, song);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<DeleteResult> {
    return this.service.delete(id);
  }
}
