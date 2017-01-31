import { Component, OnInit,  trigger, state, style, transition, animate } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { UserService } from '../share/user.service';

import 'rxjs/Rx';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  providers:  [UserService],
  animations: [
    trigger('trackState', [
      state('inactive', style({
        boxShadow: 'none',
        transform: 'scale(1)'
      })),
      state('active',   style({
        boxShadow: '0 8px 14px -6px black',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class ContentComponent implements OnInit {


  public tracks: Array<String> =  [];



  constructor( private userService: UserService) { }


  ngOnInit() {
    this.userService.mix().subscribe((res)=> { console.log(res); this.tracks = res })

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
