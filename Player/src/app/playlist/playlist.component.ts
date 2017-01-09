import { Component, OnInit } from '@angular/core';
import { UserService } from '../share/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  public tracks: Array<String> =  [];

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  	this.loadPlaylist();
  }

  deleteFromPlaylist(track: String): any {
  	this.userService.deleteTrack(track).subscribe(this.loadPlaylist());
  }

  loadPlaylist(): any {
    this.userService.loadTracks().subscribe((res)=> { this.tracks = res; this.router.navigateByUrl('/playlist')});
  }
}
