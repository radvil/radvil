import { isNotEmptyArray } from '../../utils/array';
import { isNotEmptyString, splitStringToArray } from '../../utils/string';

export enum RadDirection {
  ALL = 'all',
  NORTH = 'n',
  SOUTH = 's',
  WEST = 'w',
  EAST = 'e',
  NORTH_WEST = 'nw',
  NORTH_EAST = 'ne',
  SOUTH_WEST = 'sw',
  SOUTH_EAST = 'se',
}

export type RadDirectionsType = RadDirection | RadDirection[] | string[];

export interface RadHandler {
  [key: string]: HTMLElement,
}

export class Directions {
  constructor(directions: RadDirectionsType) {
    this.setValue(directions);
  }

  private _directions!: RadDirectionsType;
  private _activatedDirection!: RadDirectionsType;

  get value() {
    return this._directions;
  }

  get activatedDirection() {
    return this._activatedDirection;
  }

  activate(direction: RadDirectionsType) {
    this._activatedDirection = direction;
    console.log(this._activatedDirection);
  }

  setValue(values: RadDirectionsType): void {
    if (isNotEmptyString(values)) {
      if (values === RadDirection.ALL)
        this._directions = this.getAvailableOptions();
      else this._directions = splitStringToArray(values, ', ') as RadDirectionsType;
    } else {
      if (isNotEmptyArray(values)) this._directions = values;
      else this._directions = [RadDirection.SOUTH_EAST];
    }
  }

  getAvailableOptions(): RadDirectionsType {
    return [
      RadDirection.NORTH,
      RadDirection.SOUTH,
      RadDirection.WEST,
      RadDirection.EAST,
      RadDirection.NORTH_WEST,
      RadDirection.NORTH_EAST,
      RadDirection.SOUTH_WEST,
      RadDirection.SOUTH_EAST,
    ];
  }
}
