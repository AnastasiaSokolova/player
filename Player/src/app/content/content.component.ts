import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { UserService } from '../share/user.service';

import 'rxjs/Rx';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  providers:  [UserService]
})
export class ContentComponent implements OnInit {
  

  public tracks: Array<String> =  [];
  
  constructor( private userService: UserService) { }


  ngOnInit() {
    this.userService.mix().subscribe((res)=> { console.log(res); this.tracks = res /*.aTracks; this.tracks.length = 50;*/})
  }

  pasteImage(image: string): string {
  	let results = 'http://media.tumblr.com/tumblr_mf3r1eERKE1qgcb9y.jpg';
  	if(image) {
  		results = image;
  	} 
  	return results;
  }

  saveToPlaylist(src1,src2) {
  	this.userService.saveTracks(src1, src2).subscribe(()=> console.log('Everything good'));
  }

  setSound(sound) {
    return sound + '?client_id=rOq2IJF84CUOeFmbtBU4yjH506GnKxpJ'
  }

}
