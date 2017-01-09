import { Component, OnInit } from '@angular/core';
import { AuthService } from '../share/auth.service';
import { User } from '../share/User';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  public user: User;
  public bool: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  	
  	this.authService.getUser(localStorage.getItem('username')).subscribe((res)=> { this.user = res;})

  }

  edit(): any {
  	this.bool = !this.bool;
  }


}
