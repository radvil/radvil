import { isNotEmptyArray } from "../../utils/array";
import { isNotEmptyString, splitStringToArray } from "../../utils/string";

export enum DirOption {
  ALL = 'all',
  NORTH = 'n',
  SOUTH = 's',
  WEST = 'w',
  EAST = 'e',
  NORTH_WEST = 'nw',
  NORTH_EAST = 'ne',
  SOUTH_WEST = 'sw',
  SOUTH_EAST = 'se'
}

export type RadDirectionsType = string | (DirOption[] | string[]);
// export interface ResizeHandler {
//   [key in RadDirection]: HTMLElement,
// }

export class Directions {
  constructor(directions: RadDirectionsType) {
    this.setValue(directions);
  }

  private _directions!: string[];
  private _activatedDirection!: string;

  get value(): string[] {
    return this._directions;
  }

  get activatedDirection() {
    return this._activatedDirection;
  }

  activate(direction: string) {
    this._activatedDirection = direction;
    console.log(this._activatedDirection);
  }

  setValue(values: string | string[]): void {
    if (isNotEmptyString(values)) {
      if (values === DirOption.ALL) this._directions = this.getAvailableOptions();
      else this._directions = splitStringToArray(values, ', ');
    } else {
      if (isNotEmptyArray(values)) this._directions = values;
      else this._directions = [DirOption.SOUTH_EAST];
    }
  }

  getAvailableOptions(): DirOption[] {
    // return ['n', 's', 'w', 'e', 'ne', 'nw', 'se', 'sw'];
    // const [ALL, ...OPTIONS] = DirOption;
    return [
      DirOption.NORTH,
      DirOption.SOUTH,
      DirOption.WEST,
      DirOption.EAST,
      DirOption.NORTH_WEST,
      DirOption.NORTH_EAST,
      DirOption.SOUTH_WEST,
      DirOption.SOUTH_EAST
    ]
  }
}
