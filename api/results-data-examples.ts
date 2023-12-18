import { EndpointResultsData } from './types'

export const INITIAL__resultData: EndpointResultsData = {
  meta: {
    project: null,
    site: null,
    freeText: null,
  },
  results: {
    ZG: {
      selection: {
        size: 'ZG7',
        altChoiceSize: null,
        maxSpeed: {
          speed: [487, 487],
          powerVolume: [0.63, 2.387],
          tipSpeed: [4.51, 893],
          blendingTime: [1.5, 1.5],
          data: {
            turnovers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            time: [
              0.0, 0.4, 0.79, 1.19, 1.58, 1.98, 2.38, 2.77, 3.17, 3.57, 3.96, 4.36, 4.75,
            ],
          },
        },
        minimumVolume: null,
        lastDropVolume: null
      },
      sizes: [
        {
          label: 'ZG1',
          volumes: [
            10, 9, 8, 8, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 3, 3,
            3, 2, 2, 2, 2, 2, 1, 1, 1,
          ],
        },
        {
          label: 'ZG2',
          volumes: [
            50, 46, 42, 39, 36, 34, 33, 32, 31, 30, 29, 29, 28, 28, 27, 27, 26, 26, 25,
            25, 24, 22, 20, 18, 16, 15, 13, 12, 11, 10, 9, 8, 7, 6, 5,
          ],
        },
        {
          label: 'ZG3',
          volumes: [
            250, 228, 208, 193, 180, 170, 164, 158, 154, 150, 147, 143, 140, 138, 135,
            133, 130, 128, 125, 123, 121, 108, 98, 89, 80, 73, 65, 59, 53, 48, 43, 38, 33,
            29, 25,
          ],
        },
        {
          label: 'ZG5',
          volumes: [
            850, 774, 706, 655, 612, 578, 557, 536, 523, 510, 498, 485, 476, 468, 459,
            451, 442, 434, 425, 417, 412, 366, 332, 302, 272, 247, 221, 200, 179, 162,
            145, 128, 112, 98, 85,
          ],
        },
        {
          label: 'ZG6',
          volumes: [
            1200, 1092, 996, 924, 864, 816, 786, 756, 738, 720, 703, 684, 672, 660, 648,
            636, 624, 612, 600, 588, 582, 516, 468, 426, 384, 348, 312, 282, 252, 228,
            204, 180, 158, 138, 120,
          ],
        },
        {
          label: 'ZG7',
          volumes: [
            2000, 1820, 1660, 1540, 1440, 1360, 1310, 1260, 1230, 1200, 1172, 1140, 1120,
            1100, 1080, 1060, 1040, 1020, 1000, 980, 970, 860, 780, 710, 640, 580, 520,
            470, 420, 380, 340, 300, 264, 230, 200,
          ],
        },
        {
          label: 'ZG8',
          volumes: [
            5000, 4550, 4150, 3850, 3600, 3400, 3275, 3150, 3075, 3000, 2930, 2850, 2800,
            2750, 2700, 2650, 2600, 2550, 2500, 2450, 2425, 2150, 1950, 1775, 1600, 1450,
            1300, 1175, 1050, 950, 850, 750, 660, 575, 500,
          ],
        },
        {
          label: 'ZG9',
          volumes: [
            10000, 9100, 8300, 7700, 7200, 6800, 6550, 6300, 6150, 6000, 5860, 5700, 5600,
            5500, 5400, 5300, 5200, 5100, 5000, 4900, 4850, 4300, 3900, 3550, 3200, 2900,
            2600, 2350, 2100, 1900, 1700, 1500, 1320, 1150, 1000,
          ],
        },
        {
          label: 'ZG10',
          volumes: [
            20000, 18200, 16600, 15400, 14400, 13600, 13100, 12600, 12300, 12000, 11720,
            11400, 11200, 11000, 10800, 10600, 10400, 10200, 10000, 9800, 9700, 8600,
            7800, 7100, 6400, 5800, 5200, 4700, 4200, 3800, 3400, 3000, 2640, 2300, 2000,
          ],
        },
      ],
      viscosities: [
        1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100,
        150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800,
      ],
      specifications: [
        {
          label: 'Vessel',
          value: null,
        },
        {
          label: 'Vessel jacket',
          value: ['Yes'],
        },
        {
          label: 'Mobile vessel',
          value: ['No'],
        },
        {
          label: 'Inner diameter',
          value: ['1003 mm'],
        },
        {
          label: 'Position of Mixer',
          value: ['134mm - 223mm'],
        },
        {
          label: 'Mixing and Media',
          value: null,
        },
        {
          label: 'Selected Mixer',
          value: ['ZG7'],
          boldLabel: true,
        },
        {
          label: 'Recommended Speed',
          value: ['487 (max speed)', '243 (50% max speed)'],
        },
        {
          label: 'Power/volumne',
          value: ['0,619 W/L', '0,0066 WL'],
        },
        {
          label: 'Tip Speed',
          value: ['4,511 m/s', '2,256 m/s'],
        },
      ],
    },
    ZGP: {
      selection: {
        size: 'ZGP5',
        altChoiceSize: null,
        maxSpeed: {
          speed: [487, 487],
          powerVolume: [0.543, 2.057],
          tipSpeed: [3.82, 753],
          blendingTime: [0.3, 0.3],
        },
        minimumVolume: null,
        lastDropVolume: null
      },
      viscosities: [],
      sizes: [],
      specifications: [],
    },
    HP: {
      selection: {
        size: 'HP5',
        altChoiceSize: null,
        maxSpeed: {
          speed: [1700, 1700],
          powerVolume: [0.435, 1.647],
          tipSpeed: [9.16, 1804],
          blendingTime: null,
        },
        minimumVolume: null,
        lastDropVolume: null
      },
      sizes: [
        {
          label: 'HP2',
          volumes: [
            300, 273, 249, 231, 216, 204, 197, 189, 185, 180, 176, 171, 168, 165, 162,
            159, 156, 153, 150, 147, 146, 129, 117, 107, 96, 87, 78, 71, 63, 57, 51, 45,
            40, 35, 30,
          ],
        },
        {
          label: 'HP5',
          volumes: [
            3000, 2730, 2490, 2310, 2160, 2040, 1965, 1890, 1845, 1800, 1758, 1710, 1680,
            1650, 1620, 1590, 1560, 1530, 1500, 1470, 1455, 1290, 1170, 1065, 960, 870,
            780, 705, 630, 570, 510, 450, 396, 345, 300,
          ],
        },
        {
          label: 'HP8',
          volumes: [
            10000, 9100, 8300, 7700, 7200, 6800, 6550, 6300, 6150, 6000, 5860, 5700, 5600,
            5500, 5400, 5300, 5200, 5100, 5000, 4900, 4850, 4300, 3900, 3550, 3200, 2900,
            2600, 2350, 2100, 1900, 1700, 1500, 1320, 1150, 1000,
          ],
        },
      ],
      viscosities: [
        1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100,
        150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800,
      ],
      specifications: [],
    },
    HS: {
      selection: null,
      sizes: [],
      viscosities: [],
      specifications: [],
    },
    ZF: {
      selection: null,
      sizes: [],
      viscosities: [],
      specifications: [],
    },
  },
}
