// import Component code from angulary library
import { Component, EventEmitter } from 'angular2/core';
import { Album } from './album.model';
import { AlbumListComponent } from './album-list.component';

// annotation
@Component({
  selector: 'my-app',
  directives: [AlbumListComponent],
  template: `
    <div class = "container">
      <h1>Pike Market Music Shop</h1>
      <album-list
        [albumList] = "albums"
        (onAlbumSelect)="albumWasSelected($event)">
      </album-list>
    </div>
  `
})
// class declaration
export class AppComponent {
  public albums: Album[];
  constructor() {
    this.albums = [
      new Album("Equinoxe", "Jean Michel Jarre", "1985", "Electronic",  0),
      new Album("Songs of Love and Hate", "Leonard Cohen", "1988", "Poetry", 1),
      new Album("Tubular Bells", "Mike Oldfield", "1980", "Electronic",  2),
      new Album("Let's Go Out Tonight", "Curtis Stigers", "2010", "Blues",  3),
      new Album("Autobahn", "Kraftwerk",  "1975", "Electronic", 4),
      new Album("Spiral", "Vangelis", "1979", "Electronic", 5),
      new Album("Vivaldi's Four Seasons", "Joshua Bell", "2012", "Classical", 6),
    ];
  }
  albumWasSelected(selectedAlbum){

  }
}
