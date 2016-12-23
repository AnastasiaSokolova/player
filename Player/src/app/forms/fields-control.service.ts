import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FieldsBase } from './fields-base';

@Injectable()
export class FieldsControlService {
    constructor() { }

    toFormGroup(fields: FieldsBase<any>[] ) {
        let group: any = {};

        fields.forEach(field => {
            group[field.key] = field.required ? new FormControl(field.value || '', Validators.required)
                : new FormControl(field.value || '');
        });
        return new FormGroup(group);
    }
}
