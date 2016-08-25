import { Component, EventEmitter } from 'angular2/core';
import { Album } from './album.model';

@Component({
  selector: 'album-add',
  outputs: ['onSubmitNewStrings'],
  template: `
    <h3>Add a New Album</h3>
    <div class="album-add-form">
      <input placeholder="Title" class="input-lg album-add-form" #newTitle>
      <input placeholder="Artist" class="col-sm-8 input-lg" #newArtist>
      <input placeholder="Release Year" class="col-sm-8 input-lg" #newRelease>
      <input placeholder="Genre" class="col-sm-8 input-lg" #newGenre>
      <button (click)="addAlbum(newTitle, newArtist, newRelease, newGenre)">Add new Title</button>
    </div>
  `
})
export class AlbumAddComponent {
  public onSubmitNewStrings: EventEmitter<[string]>;
  constructor() {
    this.onSubmitNewStrings = new EventEmitter();
  }
  addAlbum(newTitle: HTMLInputElement, newArtist: HTMLInputElement, newRelease: HTMLInputElement, newGenre: HTMLInputElement) {
    console.log(newArtist.value);
    this.onSubmitNewStrings.emit([newTitle.value, newArtist.value, newRelease.value, newGenre.value]);
    newTitle.value="";
    newArtist.value="";
    newRelease.value="";
    newGenre.value="";
    }
  }
