import { Slide, SlideSequence, SlideType, Song } from '../models';

export class SlideSequenceUtils {
  static convertFromSong(song: Song): SlideSequence {
    return new SlideSequence().init({
      id: song.id,
      title: song.title,
      subtitle: song.songwriter,
      slides: SlideSequenceUtils.convertFromVerses(song)
    });
  }

  static convertFromVerses(song: Song): Slide[] {
    const slides : Slide[] = [{
      type: SlideType.Title,
      text: song.title,
      subtitle: song.songwriter
    }];

    slides.push(...song.verses.map(v => {
      return {
        type: v.text ? SlideType.Lyrics : SlideType.Blank,
        text: v.text
      };
    }));

    return slides;
  }
}

