interface MarkConfig {
  name: string;
  position: number[];
  rotation: number[];
  targetAttr?: string;
}

export interface ScenConfig {
  index: number;
  markList: MarkConfig[];
  imageUrlList: string[];
}

export const SCENE_CONFIG = new Map<string, ScenConfig>([
  [
    'one',
    {
      index: 1,
      markList: [
        {
          name: 'landMark',
          position: [-0.46, -0.11, -0.11],
          rotation: [1.42, 0.68, 1.63],
          targetAttr: 'two',
        },
      ],
      imageUrlList: ['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg'],
    },
  ],
  [
    'two',
    {
      index: 2,
      markList: [
        {
          name: 'landMark',
          position: [0.47, -0.2, 0],
          rotation: [1.48, 0.26, -1.78],
          targetAttr: 'one',
        },
        {
          name: 'landMark',
          position: [-0.46, -0.16, -0.3],
          rotation: [1.21, 0.78, 0],
          targetAttr: 'three',
        },
      ],
      imageUrlList: ['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg'],
    },
  ],
  [
    'three',
    {
      index: 3,
      markList: [
        {
          name: 'landMark',
          position: [0.4, -0.18, 0.32],
          rotation: [-1.53, -0.04, -1.26],
          targetAttr: 'two',
        },
        {
          name: 'landMark',
          position: [0.32, -0.16, -0.33],
          rotation: [1.46, 0.1, -0.17],
          targetAttr: 'four',
        },
      ],
      imageUrlList: ['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg'],
    },
  ],
  [
    'four',
    {
      index: 4,
      markList: [
        {
          name: 'landMark',
          position: [-0.35, -0.22, 0.4],
          rotation: [-0.85, -0.45, -1.8],
          targetAttr: 'three',
        },
        {
          name: 'dom',
          position: [0.49, 0, 0],
          rotation: [0, -0.5 * Math.PI, 0],
          targetAttr: 'five',
        },
      ],
      imageUrlList: ['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg'],
    },
  ],
  [
    'five',
    {
      index: 5,
      markList: [
        {
          name: 'landMark',
          position: [-0.05, -0.05, 0.4],
          rotation: [1.21, -0.15, -0.69],
          targetAttr: 'four',
        },
        {
          name: 'video',
          position: [0.49, 0.04, 0.045],
          rotation: [0, -0.5 * Math.PI, 0],
        },
      ],
      imageUrlList: ['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg'],
    },
  ],
]);
