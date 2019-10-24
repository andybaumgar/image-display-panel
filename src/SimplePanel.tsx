import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/ui';
import { SimpleOptions } from 'types';
import './css/image-display.css';

interface Props extends PanelProps<SimpleOptions> {}

export class SimplePanel extends PureComponent<Props> {
  render() {
    const { options } = this.props;
    const panelStyle = {
      height: this.props.height,
    };

    return (
      <div className="image-panel" style={panelStyle}>
        <img src={options.url}></img>
      </div>
    );
  }
}
