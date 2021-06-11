import { Controller, Get, Param } from '@nestjs/common';
import { Song } from './song.entity';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private service: SongsService) { }

  @Get()
  async findAll(): Promise<Song[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async find(@Param() params): Promise<Song> {
    return this.service.findSingle(params.id);
  }
}
