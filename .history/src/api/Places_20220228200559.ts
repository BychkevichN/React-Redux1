import { random } from 'lodash';


export enum PlaceType {
  Basement = 'Basement',
  Metro = 'Metro',
  Bunker = 'Bunker',

}

export interface IPlace {
  id: string;
  address: string;
  description: string;
  capacity: number;
  imageSrc: string;
  createAt: number;
  type: PlaceType;

}

const generateFakeDataItem = (index: number) => {
  return {
    id: `id-${index}`,
    address: `Ukraine, Kiev, Victory Street ${index + 1}`,
    description: '',
    capacity: random(0, 10, false),
    imageSrc: '',
    createAt: Date.now(),
    type: PlaceType.Basement,
  };
};

const FAKE_DATA: IPlace[] = [
  {
    id: 'id1',
    address: 'Street1',
    description: '',
    capacity: 123,
    imageSrc: '',
    createAt: Date.now(),
    type: PlaceType.Basement,
  },
  {
    id: 'id2',
    address: 'Street2',
    description: '',
    capacity: 456,
    imageSrc: '',
    createAt: Date.now(),
    type: PlaceType.Bunker,
  },
  {
    id: 'id3',
    address: 'Street3',
    description: '',
    capacity: 789,
    imageSrc: '',
    createAt: Date.now(),
    type: PlaceType.Metro,
  },
];

export default class PlacesApi {
  public getAll(): Promise<IPlace[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(FAKE_DATA), 1000);
    })

  }
}