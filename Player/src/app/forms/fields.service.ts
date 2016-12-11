import { Injectable } from '@angular/core';
import { FieldsBase } from './fields-base';
import { TextboxFields } from './fields-textbox';
import { RadiobtnFields } from './fields-radiobtn';

@Injectable()
export class FieldsService {

  getFieldsForRegistration() {
    let fields: FieldsBase<any>[] = [
      new TextboxFields({
        key: 'firstName',
        label: 'First name',
        value: '',
        type: 'text',
        required: true,
        order: 1
      }),
      new TextboxFields({
        key: 'lastName',
        label: 'Last name',
        value: '',
        type: 'text',
        required: true,
        order: 2
      }),
      new TextboxFields({
        key: 'username',
        label: 'Username',
        value: '',
        type: "text",
        required: true,
        order: 3
      }),
      new TextboxFields({
        key: 'password',
        label: 'Password',
        type: 'password',
        value: '',
        required: true,
        order: 4
      }),
      new RadiobtnFields({
        options: [
          {key: 'gender',  value: 'male'},
          {key: 'gender',  value: 'female'},
        ],
        order: 5
      }),
      new TextboxFields({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 6
      })

    ];
    return fields.sort((a, b) => a.order - b.order);
  };

  getFieldsForLogin() {
    let fields: FieldsBase<any>[] = [
      new TextboxFields({
        key: 'username',
        label: 'Username',
        value: '',
        type: 'password',
        required: true,
        order: 1
      }),
      new TextboxFields({
        key: 'password',
        label: 'Password',
        type: 'password',
        value: '',
        required: true,
        order: 2
      })
    ];
    return fields.sort((a, b) => a.order - b.order);
  }

}
