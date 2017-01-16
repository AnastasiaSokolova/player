import { Component, Input, OnInit, Output, EventEmitter }  from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldsBase } from '../forms/fields-base';
import { FieldsControlService }from '../forms/fields-control.service';

import { UserService } from '../share/user.service';
import { AuthService } from '../share/auth.service';

import { User } from '../share/user';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Component({
    selector: 'dynamic-form',
    templateUrl: 'dynamic-form.component.html',
    styleUrls: ['dynamic-form.component.scss'],
    providers: [ FieldsControlService ]
})

export class DynamicFormComponent implements OnInit {
    @Input() fields: FieldsBase<any>[] = [];
    @Input() buttonName: String;
    form: FormGroup;
    public users: User[];
    public clicked: boolean = false;

    constructor(private fcs: FieldsControlService) {}
    ngOnInit() {
        this.form = this.fcs.toFormGroup(this.fields);
    }

    @Output() onSubmit = new EventEmitter();


    onSub(): void {
      this.clicked = true;
      this.onSubmit.emit(this.form.value);
    }


}

