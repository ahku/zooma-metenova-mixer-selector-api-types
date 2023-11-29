import { EndpointResultsData } from './types'

/**
 * MIXING PURPOSE NOT SET YET
 * -- Only pure data and initial specifications returned
 */
export const INITIAL__resultData: EndpointResultsData = {
  meta: {
    project: null,
    site: null,
    freeText: null,
  },
  results: {
    ZG: {
      selection: null,
      data: [
        {
          label: 'ZG1',
          volumes: [8, 7, 7, 7, 6, 6, 5, 5, 5, 5],
          viscosity: [1, 5, 10, 15, 20, 25, 30, 35, 40, 45],
        },
        {
          label: 'ZG2',
          volumes: [40, 36, 33, 31, 29, 26, 26, 25, 25, 24],
          viscosity: [1, 5, 10, 15, 20, 25, 30, 35, 40, 45],
        },
        {
          label: 'ZG7',
          volumes: [1600, 1456, 1327, 1232, 1152, 1088, 1048, 1008, 984, 960],
          viscosity: [1, 5, 10, 15, 20, 25, 30, 35, 40, 45],
        },
      ],
      specifications: [
        {
          label: 'Vessel',
        },
        {
          label: 'Vessel jacket',
          value: 'Yes',
        },
        {
          label: 'Mobile vessel',
          value: 'No',
        },
        {
          label: 'Inner diameter',
          value: '1003 mm',
        },
        {
          label: 'Position of Mixer',
          value: '134mm - 223mm',
        },
        {
          label: 'Mixing and Media',
        },
        {
          label: 'Selected Mixer',
          value: 'ZG7',
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
      selection: null,
      data: [],
      specifications: [],
    },
    HP: {
      selection: null,
      data: [],
      specifications: [],
    },
    HS: {
      selection: null,
      data: [],
      specifications: [],
    },
    ZF: {
      selection: null,
      data: [],
      specifications: [],
    },
  },
}

/**
 * MIXING PURPOSE SET
 * -- Include selection data
 */
export const SELECTION__resultData: EndpointResultsData = {
  meta: {
    project: null,
    site: null,
    freeText: null,
  },
  results: {
    ZG: {
      selection: {
        primary: {
          size: 'ZG7',
          maxSpeed: {
            speed: [487, 487],
            powerVolume: [0.63, 2.387],
            tipSpeed: [4.51, 893],
            data: {
              turnovers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
              time: [
                0.0, 0.4, 0.79, 1.19, 1.58, 1.98, 2.38, 2.77, 3.17, 3.57, 3.96, 4.36,
                4.75,
              ],
            },
          },
          halfSpeed: {
            speed: [245, 245],
            powerVolume: [0.079, 0.2984],
            tipSpeed: [2.27, 447],
          },
        },
        alternative: {
          size: 'ZG10',
          maxSpeed: {
            speed: [490, 490],
            powerVolume: [0.01, 0.023],
            tipSpeed: [1.8, 353],
          },
          halfSpeed: {
            speed: [245, 245],
            powerVolume: [0.001, 0.003],
            tipSpeed: [0.9, 177],
          },
        },
      },
      data: [
        {
          label: 'ZG1',
          volumes: [8, 7, 7, 7, 6, 6, 5, 5, 5, 5],
          viscosity: [1, 5, 10, 15, 20, 25, 30, 35, 40, 45],
        },
        {
          label: 'ZG2',
          volumes: [40, 36, 33, 31, 29, 26, 26, 25, 25, 24],
          viscosity: [1, 5, 10, 15, 20, 25, 30, 35, 40, 45],
        },
        {
          label: 'ZG7',
          volumes: [1600, 1456, 1327, 1232, 1152, 1088, 1048, 1008, 984, 960],
          viscosity: [1, 5, 10, 15, 20, 25, 30, 35, 40, 45],
        },
      ],
      specifications: [
        {
          label: 'Vessel',
        },
        {
          label: 'Vessel jacket',
          value: 'Yes',
        },
        {
          label: 'Mobile vessel',
          value: 'No',
        },
        {
          label: 'Inner diameter',
          value: '1003 mm',
        },
        {
          label: 'Position of Mixer',
          value: '134mm - 223mm',
        },
        {
          label: 'Mixing and Media',
        },
        {
          label: 'Selected Mixer',
          value: 'ZG7',
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
        primary: {
          size: 'ZGP8',
          maxSpeed: {
            speed: [343, 343],
            powerVolume: [0.91, 0.91],
            tipSpeed: [4.24, 4.24],
          },
          halfSpeed: {
            speed: 170.5,
            powerVolume: 0.11,
            tipSpeed: 2.11,
          },
        },
      },
      data: [],
      specifications: [],
    },
    HP: {
      selection: null,
      data: [],
      specifications: [],
    },
    HS: {
      selection: null,
      data: [],
      specifications: [],
    },
    ZF: {
      selection: null,
      data: [],
      specifications: [],
    },
  },
}
