
export class Album {
  public price: number;
  public selected: boolean = false;
  constructor(public name: string, public artist: string, public release: string, public genre: string, public id: number) {

  }
}
