import { FieldsBase } from './fields-base';

export class SelectFields extends FieldsBase<string> {

  controlType = 'dropdown';
  options: {key: string, value: string}[] = [];


  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}

