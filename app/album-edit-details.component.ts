import { Component } from 'angular2/core';
import { Album } from './album.model';

@Component({
  selector: 'album-edit-details',
  inputs: ['album'],
  template: `
    <div class="album-edit-form">
      <h3>Album Title: <input [(ngModel)]="album.name" class="input-lg album-edit-form"/></h3>
      <hr />
      <p>Artist:</p>
      <input [(ngModel)]="album.artist" class="col-sm-8 input-lg album-edit-form"/>
      <p>Release Date:</p>
      <input [(ngModel)]="album.release" class="col-sm-8 input-lg album-edit-form"/>
      <p>Genre:</p>
      <input [(ngModel)]="album.genre" class="col-sm-8 input-lg album-edit-form"/>
    </div>
  `
})
export class AlbumEditDetailsComponent {
  public album: Album;
}
