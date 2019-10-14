import React, { PureComponent } from 'react';
import { PanelProps, PanelPlugin } from '@grafana/ui';

export class MyPanel extends PureComponent<PanelProps> {
  render() {
    return <div>Hello from my panel</div><div>This is a test</div>;
  }
}

export const plugin = new PanelPlugin(MyPanel);
