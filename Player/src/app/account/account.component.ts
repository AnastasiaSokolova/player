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
  buttonName = 'Save';

  constructor(private service: FieldsService, private authService: AuthService) {
    this.authService.getUser(localStorage.getItem('username')).subscribe((res)=> {  
       this.fields = this.service.getFieldsForEdit(res);
       this.user = res;//think about it
     })
   }
  
  ngOnInit() {}

  edit(): any {
  	this.bool = !this.bool;
  }

  onSubmit(value) {
    this.authService.updateUser(value).subscribe(()=> console.log('OK!'));
    
  }

}
