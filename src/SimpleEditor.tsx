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
      <div className="editor-row">
        <div className="section gf-form-group">
          <h5 className="section-heading">Display</h5>
          <FormField label="Text" labelWidth={5} inputWidth={20} type="text" onChange={this.onTextChanged} value={options.url || ''} />
        </div>
        <div className="section gf-form-group">
          <h5 className="section-heading">Clock options</h5>
          <div className="gf-form">
            <label className="gf-form-label width-9">Clock Mode</label>
            <div className="gf-form-select-wrapper max-width-10">
              <select className="input-medium gf-form-input"></select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
