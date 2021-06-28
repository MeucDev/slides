import { toPairs } from "lodash";
import { SelectItem } from "primeng/api/selectitem";

export enum VerseType {
  Intro = 'Intro',
  Verse = 'Verse',
  Chorus = 'Chorus',
  Interlude = 'Interlude',
  Solo = 'Solo',
  Bridge = 'Bridge',
  Outro = 'Outro',
  Unknown = ''
}

export class VerseTypeUtils {
  public static toSelectItemArray(): SelectItem[] {
    const enumme = toPairs(VerseType);
    return enumme.map(this.itemPairToSelectItem);
  }

  private static itemPairToSelectItem(item: string[]): SelectItem {
    return {
      label: item[0],
      value: item[1]
    }
  }
}
