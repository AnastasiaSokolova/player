import { Injectable } from '@angular/core';
import { FieldsBase } from './fields-base';
import { TextboxFields } from './fields-textbox';
import { SelectFields } from './fields-select';

@Injectable()
export class FieldsService {

  getFieldsForRegistration() {
    let fields: FieldsBase<any>[] = [
      new TextboxFields({
        key: 'firstname',
        label: 'First name',
        value: '',
        type: 'text',
        required: true,
        order: 1
      }),
      new TextboxFields({
        key: 'lastname',
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
      new SelectFields({
        key: 'gender',
        label: 'Gender',
        options: [
          {key: 'male',  value: 'Male'},
          {key: 'female',  value: 'Female'},
        ],
        order: 5
      }),
      new TextboxFields({
        key: 'email',
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

  getFieldsForEdit(user) {
     let fields: FieldsBase<any>[] = [
      new TextboxFields({
        key: 'firstname',
        label: 'First name',
        value: user.firstname,
        type: 'text',
        required: true,
        order: 1
      }),
      new TextboxFields({
        key: 'lastname',
        label: 'Last name',
        value: user.lastname,
        type: 'text',
        required: true,
        order: 2
      }),
      new TextboxFields({
        key: 'username',
        label: 'Username',
        value: user.username,
        type: "text",
        required: true,
        order: 3
      }),
      new TextboxFields({
        key: 'password',
        label: 'Password',
        type: 'password',
        value: user.password,
        required: true,
        order: 4
      }),
      new SelectFields({
        key: 'gender',
        label: 'Gender',
        options: [
          {key: 'male',  value: 'Male'},
          {key: 'female',  value: 'Female'},
        ],
        order: 5
      }),
      new TextboxFields({
        key: 'email',
        label: 'Email',
        type: 'email',
        value: user.email,
        order: 6
      })

    ];
    return fields.sort((a, b) => a.order - b.order);
  }

}
