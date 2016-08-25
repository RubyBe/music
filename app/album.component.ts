// a component which will display details of a single album
import { Component } from 'angular2/core';
import { Album } from './album.model.ts';

@Component({
  selector: 'album-display',
  inputs: ['album'],
  template: `
    <h4>{{ album.name }}</h4>
  `
})
export class AlbumComponent{
  public album: Album;
}


// {{ currentAlbum.name + ", " + currentAlbum.artist + ": " + currentAlbum.genre }}
