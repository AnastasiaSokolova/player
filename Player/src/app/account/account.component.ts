import { Component, OnInit } from '@angular/core';
import { AuthService } from '../share/auth.service';
import { User } from '../share/User';
import { FieldsService } from '../forms/fields.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  providers:  [FieldsService]
})
export class AccountComponent implements OnInit {

  public user: User;
  public bool: boolean = false;
  fields: any[];

  constructor(private service: FieldsService, private authService: AuthService) {
    this.authService.getUser(localStorage.getItem('username')).subscribe((res)=> {  
       this.fields = this.service.getFieldsForEdit(res);
       this.user = res;
     })
   }
  


  ngOnInit() {
  	
  	
    //this.fields = this.service.getFieldsForEdit(this.user);
    //console.log(this.fields);

  }

  edit(): any {
  	this.bool = !this.bool;
  }


}


/*
<ul [hidden]="bool">
  <li>First name: {{user.firstname}}</li>
  <li>Last name: {{user.lastname}}</li>
  <li>Username: {{user.username}}</li>
  <li>Password: {{user.password}}</li>
  <li>Gender: {{user.gender}}</li>
  <li>Email: {{user.email}}</li>
 </ul>

  <ul [hidden]='!bool'>
  <li>First name: <input value={{user.firstname}}></li>
  <li>Last name: <input value={{user.lastname}}></li>
  <li>Username: <input value={{user.username}}></li>
  <li>Password: <input value={{user.password}}></li>
  <li>Gender:
   <select>
    <option value="male">Male</option>
    <option value="female">Female</option>
   </select>
  </li>
  <li>Email: <input value={{user.email}}></li>
  </ul>
*/