import Mirador from 'mirador/dist/es/src/index';
import { miradorImageToolsPlugin } from 'mirador-image-tools';
// import {
//   miradorAnnotationPlugin,
//   externalStorageAnnotationPlugin,
//   canvasAnnotationsPlugin,
//   annotationCreationCompanionWindow,
//   windowSideBarButtonsPlugin,
// }
// from 'mirador-annotations';
// import LocalStorageAdapter from 'mirador-annotations/lib/LocalStorageAdapter';


const config = {
  id: 'viewer',
  // annotation: {
  //   adapter: (canvasId) => new LocalStorageAdapter(`localStorage://?canvasId=${canvasId}`),
  //   // adapter: (canvasId) => new AnnototAdapter(canvasId, endpointUrl),
  //   exportLocalStorageAnnotations: true, // display annotation JSON export button
  // },
  window: {
    // defaultSideBarPanel: 'annotations',
    sideBarOpenByDefault: true,
  },
  catalog: [
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1804_RC-106-001.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1805_RC-106-002.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1806_RC-106-003.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1807_RC-106-004.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1808_RC-106-005.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1809_RC-106-006.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1810_RC-106-007.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1812_RC-106-008.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1813_RC-106-009.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1832_RC-106-010.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1835_RC-106-011.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1836_RC-106-012.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1837_RC-106-013.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1838_RC-106-014.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1839_RC-106-015.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1840_RC-106-016.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1841_RC-106-017.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1842_RC-106-018.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1843_RC-106-019.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1844_RC-106-020.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1845_RC-106-021.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1846_RC-106-022.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1847_RC-106-024.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1848_RC-106-025.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1849_RC-106-026.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1852_RC-106-029.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1853_RC-106-030.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1854_RC-106-031.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1855_RC-106-032.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1856_RC-106-033.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1857_RC-106-034.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1858_RC-106-036.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1859_RC-106-039.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1860_RC-106-040.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1861-RC-106-043.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1862_RC-106-044.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1863_RC-106-047.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1864_RC-106-049.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1865_RC-106-051.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1866_RC-106-053.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1867_RC-106-055.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1868_RC-106-057.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1869_RC-106-059.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1870_RC-106-061.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1871_RC-106-063.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1872_RC-106-065.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1873_RC-106-067.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1874_RC-106-069.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1875_RC-106-071.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1876_RC-106-073.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1877_RC-106-075.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1878_RC-106-077.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1879_RC-106-079.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1880_RC-106-081.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1881_RC-106-083.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1882_RC-106-085.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1883_RC-106-087.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1884_RC-106-089.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1885_RC-106-091.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1886_RC-106-093.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1887_RC-106-095.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1888_RC-106-097.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1889_RC-106-099.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1890_RC-106-101.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1891_RC-106-103.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1892_RC-106-105.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1893_RC-106-107.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1894_RC-106-109.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1895_RC-106-111.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1896_RC-106-113.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1897_RC-106-115.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' },
    { manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1898_RC-106-117.json', provider: 'EPFL Lausanne Time Machine / Archives de la Ville de Lausanne' }
  ],
  windows: [
  {
    imageToolsEnabled: true,
    imageToolsOpen: false,
    manifestId: 'https://cdhvm0003.xaas.epfl.ch/web/manifests/1832_RC-106-010.json'
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
  // windowSideBarButtonsPlugin
]);
