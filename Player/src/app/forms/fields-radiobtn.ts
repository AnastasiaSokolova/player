import { FieldsBase } from './fields-base';

export class RadiobtnFields extends FieldsBase<string> {

  controlType = 'radiobtn';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}

