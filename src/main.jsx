import Mirador from 'mirador/dist/es/src/index';
import { miradorImageToolsPlugin } from 'mirador-image-tools';
import {
  miradorAnnotationPlugin,
  externalStorageAnnotationPlugin,
  canvasAnnotationsPlugin,
  annotationCreationCompanionWindow,
  windowSideBarButtonsPlugin,
}
from 'mirador-annotations';
import LocalStorageAdapter from 'mirador-annotations/lib/LocalStorageAdapter';


const config = {
  id: 'viewer',
  // annotation: {
  //   adapter: (canvasId) => new LocalStorageAdapter(`localStorage://?canvasId=${canvasId}`),
  //   // adapter: (canvasId) => new AnnototAdapter(canvasId, endpointUrl),
  //   exportLocalStorageAnnotations: false, // display annotation JSON export button
  // },
  window: {
    // defaultSideBarPanel: 'annotations',
    sideBarOpenByDefault: true,
  },
  windows: [
  {
    imageToolsEnabled: true,
    imageToolsOpen: true,
    manifestId: 'http://cdhvm0003.xaas.epfl.ch/web/manifests/1832_RC-106-010.json'
  }],
  theme: {
    palette: {
      primary: {
        main: '#1967d2',
      },
    },
  }
};

Mirador.viewer(config, [
  ...miradorImageToolsPlugin,
  // miradorAnnotationPlugin,
  // externalStorageAnnotationPlugin,
  // canvasAnnotationsPlugin,
  // annotationCreationCompanionWindow,
  windowSideBarButtonsPlugin
]);
