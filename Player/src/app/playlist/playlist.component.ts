import { Component, OnInit } from '@angular/core';
import { UserService } from '../share/user.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  public tracks: Array<String> =  [];

  constructor(private userService: UserService) { }

  ngOnInit() {
  	this.userService.loadTracks().subscribe((res)=> { this.tracks = res});
  }

}
