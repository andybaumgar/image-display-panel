import React, { PureComponent } from 'react';
import { PanelEditorProps, FormField } from '@grafana/ui';

import { SimpleOptions } from './types';

export class SimpleEditor extends PureComponent<PanelEditorProps<SimpleOptions>> {
  onTextChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, url: target.value });
  };

  render() {
    const { options } = this.props;

    return (
      <div className="section gf-form-group">
        <h5 className="section-heading">Display</h5>
        <FormField label="Url" labelWidth={5} inputWidth={20} type="text" onChange={this.onTextChanged} value={options.url || ''} />
      </div>
    );
  }
}
