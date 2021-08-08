import { isNotEmptyArray, isNotEmptyString, splitStringToArray } from '../utils';

export enum RaxDirection {
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

export type RaxDirectionsType = RaxDirection | RaxDirection[] | string[];

export interface RaxResizeHandler {
  [key: string]: HTMLElement,
}

export class Directions {
  constructor(directions: RaxDirectionsType) {
    this.setValue(directions);
  }

  private _directions!: RaxDirectionsType;
  private _activatedDirection!: RaxDirectionsType;

  get value() {
    return this._directions;
  }

  get activatedDirection() {
    return this._activatedDirection;
  }

  activate(direction: RaxDirectionsType) {
    this._activatedDirection = direction;
    // console.log(this._activatedDirection);
  }

  setValue(values: RaxDirectionsType): void {
    if (isNotEmptyString(values)) {
      if (values === RaxDirection.ALL)
        this._directions = this.getAvailableOptions();
      else this._directions = splitStringToArray(values, ', ') as RaxDirectionsType;
    } else {
      if (isNotEmptyArray(values)) this._directions = values;
      else this._directions = [RaxDirection.SOUTH_EAST];
    }
  }

  getAvailableOptions(): RaxDirectionsType {
    return [
      RaxDirection.NORTH,
      RaxDirection.SOUTH,
      RaxDirection.WEST,
      RaxDirection.EAST,
      RaxDirection.NORTH_WEST,
      RaxDirection.NORTH_EAST,
      RaxDirection.SOUTH_WEST,
      RaxDirection.SOUTH_EAST,
    ];
  }
}
