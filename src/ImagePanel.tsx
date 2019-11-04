import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/ui';
import { SimpleOptions } from 'types';
import './css/image-display.css';
import $ from 'jquery';

interface Props extends PanelProps<SimpleOptions> {}

export class ImagePanel extends PureComponent<Props> {
  render() {
    const { options } = this.props;
    const data = { animal1: 'poodle', animal2: 'alagator', thing: 'rectangle' };
    console.log('this.props', this.props);
    // const { data } = this.data;
    const panelStyle = {
      height: this.props.height,
    };
    const imageAreaStyle = {
      height: this.props.height * 0.9,
    };
    console.log('test111 change');

    // console.log(this.backendSrv.datasourceRequest);

    return (
      <div className="image-panel" style={panelStyle}>
        <div className="image-area" style={imageAreaStyle}>
          <img src={options.url}></img>
        </div>
        <select id="tif" name="tif" className="input-small gf-form-input">
          {Object.entries(data).map((t, k) => (
            <option key={k} value={t[0]}>
              {t[1]}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
