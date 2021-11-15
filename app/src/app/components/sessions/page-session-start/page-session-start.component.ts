import { Component } from '@angular/core';
import { SlideSequence, SlideType } from 'src/app/models';

@Component({
  templateUrl: './page-session-start.component.html',
  styleUrls: ['./page-session-start.component.scss']
})
export class PageSessionStartComponent {

  loadedSession?: SlideSequence[];
  loadedSequence?: SlideSequence;

  constructor(){
    this.loadedSession = [
      new SlideSequence().init({
        id: 162,
        title: 'Cantarei Teu amor',
        subtitle: 'Vineyard'
      }),
      new SlideSequence().init({
        comment: 'Introdução'
      }),
      new SlideSequence().init({
        comment: 'Avisos'
      }),
      new SlideSequence().init({
        id: 2,
        title: 'Teu amor é incrível',
        subtitle: 'Vineyard'
      }),
      new SlideSequence().init({
        subtitle: 'Dionei de Liz',
        comment: 'Palestra'
      }),
      new SlideSequence().init({
        id: 75,
        title: 'Castelo Forte',
        subtitle: 'Martinho Lutero'
      })
    ];

    this.loadedSequence = {
      id: 162,
      title: 'Cantarei Teu amor',
      subtitle: 'Vineyard',
      slides: [
        {
          type: SlideType.Title,
          text: 'Cantarei Teu amor',
          subtitle: 'Vineyard'
        },
        {
          type: SlideType.Lyrics,
          text: 'Dos montes correm para o mar\nTeus rios de amor por mim\nEu abrirei meu coração\nDeixando a Tua cura entrar'
        },
        {
          type: SlideType.Lyrics,
          text: 'Me alegro por Te pertencer\nLevantarei as minhas mãos\nO Teu amor me alcança\nE me faz louvar-Te'
        },
        {
          comment: 'Esperar virada',
          type: SlideType.Lyrics,
          text: 'Cantarei Teu amor pra sempre\nCantarei Teu amor pra sempre\nCantarei Teu amor pra sempre\nCantarei Teu amor pra sempre'
        },
        {
          type: SlideType.Blank
        },
        {
          type: SlideType.Lyrics,
          text: 'Dos montes correm para o mar\nTeus rios de amor por mim\nEu abrirei meu coração\nDeixando a Tua cura entrar'
        },
        {
          type: SlideType.Lyrics,
          text: 'Me alegro por Te pertencer\nLevantarei as minhas mãos\nO Teu amor me alcança\nE me faz louvar-Te'
        },
        {
          comment: 'Rápido',
          type: SlideType.Lyrics,
          text: 'Cantarei Teu amor pra sempre\nCantarei Teu amor pra sempre\nCantarei Teu amor pra sempre\nCantarei Teu amor pra sempre'
        }
      ]
    } as SlideSequence;
  }

  public addSequenceItem(item: SlideSequence): void {
    this.loadedSession?.push(item);
  }
}
