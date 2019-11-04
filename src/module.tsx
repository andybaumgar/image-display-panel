import { PanelPlugin } from '@grafana/ui';
import { SimpleOptions, defaults } from './types';
import { ImagePanel } from './ImagePanel';
import { SimpleEditor } from './SimpleEditor';

export const plugin = new PanelPlugin<SimpleOptions>(ImagePanel).setDefaults(defaults).setEditor(SimpleEditor);
