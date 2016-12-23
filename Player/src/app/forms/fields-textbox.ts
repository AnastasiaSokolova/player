import { FieldsBase } from './fields-base';

export class TextboxFields extends FieldsBase<string> {

    controlType = 'textbox';
    type: string;

    constructor(options: {} = {}) {
      super(options);
      this.type = options['type'] || '';
    }
}
