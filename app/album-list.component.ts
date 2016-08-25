import { Component, EventEmitter } from 'angular2/core';
import { Album } from './album.model';
import { AlbumComponent } from './album.component';
import { AlbumEditDetailsComponent} from './album-edit-details.component';
import { AlbumAddComponent } from './album-add.component';

@Component({
  selector: 'album-list',
  inputs: ['albumList'],
  outputs: ['onAlbumSelect'],
  directives: [AlbumComponent, AlbumEditDetailsComponent, AlbumAddComponent],
  template: `
  <h3>Click a title below to display/edit its details:</h3>
  <h4>Filter on:</h4>
  <album-display *ngFor="#currentAlbum of albumList"
    (click)="albumClicked(currentAlbum)"
    [class.selected]="currentAlbum === selectedAlbum"
    [album]="currentAlbum">
  </album-display>
  <hr />
  <album-edit-details *ngIf="selectedAlbum" [album]="selectedAlbum">
  </album-edit-details>
  <album-add (onSubmitNewStrings)="createAlbum($event)"></album-add>
  <hr />
  `
})
export class AlbumListComponent{
  public albumList: Album[];
  public onAlbumSelect: EventEmitter<Album>;
  public selectedAlbum: Album;
  constructor() {
    this.onAlbumSelect = new EventEmitter();
  }
  albumClicked(clickedAlbum: Album): void {
    this.selectedAlbum =clickedAlbum;
    this.onAlbumSelect.emit(clickedAlbum);
  }
  createAlbum(newObject: [string]): void {
    this.albumList.push(
      new Album(newObject[0], newObject[1], newObject[2], newObject[3], this.albumList.length)
    );
  }
}
