
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
  createAt: Date;
  type: PlaceType;

}


const FAKE_DATA: IPlace[] = [
  {
    id: 'id1',
    address: 'Street1',
    capacity: 123,
    imageSrc: '',
    createAt: new Date(),
    type: PlaceType.Basement,
  },
  {
    id: 'id2',
    address: 'Street2',
    capacity: 456,
    imageSrc: '',
    createAt: new Date(),
    type: PlaceType.Bunker,
  },
  {
    id: 'id3',
    address: 'Street3',
    capacity: 789,
    imageSrc: '',
    createAt: new Date(),
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