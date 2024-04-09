import {
  EndpointGetRevisionData,
  EndpointGetRevisionResponse,
  EndpointPostRevisionResponse,
} from './types'

export const SizeRevisionPostResponse: EndpointPostRevisionResponse = {
  guid: '123e4567-e89b-12d3-a456-426655440000',
}

/**
 * Data object for get revisions endpoint
 */
export const SizeRevisionData: EndpointGetRevisionData = {
  guid: '',
  version: '1.0',
  inputs: {
    units: 'Metric',
    innerDiameter: 2667,
    workingVolume: 15540,
    maximumVolume: 22540,
    wallThickness: 5,
    vesselJacket: false,
    mobileVessel: false,
    mixingPurpose: '#01',
    altChoices: {
      ZF: 'ZFM100',
      HS: 'HS5',
      ZG: 'ZG7',
      HP: 'HP5',
    },
    selectedMixer: 'ZG',
    selectedMixerSize: 'ZG7',
    mixingIntensity: 'Vigorous',
    density: 1000,
    viscosity: 297,
    material: '-',
    oRings: 'EPDM (FDA USP class VI compliant)',
    ipClass: 'IP55',
    atex: false,
    rpmSensor: false,
    loweringDevice: false,
    site: '',
    project: '',
    freeText:
      'Zero-g mixers are the base line of Metenovas mixer program.\nThey are very versatile and covers a vast range of applications all\nthrough the process chain.  Zero-g mixers are the base line of Metenovas mixer program.\nThey are very versatile',
  },
  mixerData: {
    selection: {
      size: 'ZG6',
      altChoiceSize: null,
      maxSpeed: {
        speed: [490, 490],
        powerVolume: [0.43386352622760943, 1.64235243033936],
        tipSpeed: [4.102933333333334, 807.6624266666669],
        blendingTime1: null,
        blendingTime2: [2, 2],
        blendingTime: ['2 min', '2 min'],
        data: {
          turnovers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          time: [
            0, 0.43845663265306123, 0.8769132653061225, 1.3153698979591837,
            1.753826530612245, 2.192283163265306, 2.6307397959183674, 3.069196428571429,
            3.50765306122449, 3.946109693877551, 4.384566326530612,
          ],
        },
      },
      minimumVolume: null,
      lastDropVolume: null,
    },
    sizes: [
      {
        label: 'ZG1',
        volumes: [
          8, 7.28, 6.640000000000001, 6.16, 5.760000000000001, 5.44, 5.24, 5.04,
          4.920000000000001, 4.800000000000001, 4.688000000000001, 4.5600000000000005,
          4.4799999999999995, 4.4, 4.32, 4.24, 4.16, 4.08, 4, 3.9200000000000004, 3.88,
          3.44, 3.12, 2.84, 2.5600000000000005, 2.32, 2.08, 1.8800000000000001,
          1.6800000000000002, 1.52, 1.36, 1.2000000000000002, 1.056, 0.9199999999999999,
          0.8,
        ],
      },
      {
        label: 'ZG2',
        volumes: [
          40, 36.4, 33.2, 30.8, 28.8, 27.200000000000003, 26.200000000000003,
          25.200000000000003, 24.6, 24, 23.44, 22.8, 22.400000000000002, 22, 21.6,
          21.200000000000003, 20.8, 20.400000000000002, 20, 19.6, 19.400000000000002,
          17.2, 15.600000000000001, 14.200000000000001, 12.8, 11.600000000000001, 10.4,
          9.4, 8.4, 7.6000000000000005, 6.800000000000001, 6, 5.28, 4.6000000000000005, 4,
        ],
      },
      {
        label: 'ZG3',
        volumes: [
          200, 182, 166, 154, 144, 136, 131, 126, 123, 120, 117.2, 114, 112, 110, 108,
          106, 104, 102, 100, 98, 97, 86, 78, 71, 64, 58, 52, 47, 42, 38, 34, 30,
          26.400000000000002, 23, 20,
        ],
      },
      {
        label: 'ZG5',
        volumes: [
          680, 618.8000000000001, 564.4, 523.6, 489.6, 462.40000000000003,
          445.40000000000003, 428.40000000000003, 418.20000000000005, 408, 398.48, 387.6,
          380.8, 374, 367.20000000000005, 360.40000000000003, 353.6, 346.8, 340,
          333.20000000000005, 329.8, 292.40000000000003, 265.2, 241.4, 217.60000000000002,
          197.20000000000002, 176.8, 159.8, 142.8, 129.20000000000002, 115.60000000000001,
          102, 89.76, 78.2, 68,
        ],
      },
      {
        label: 'ZG6',
        volumes: [
          960, 873.6, 796.8000000000001, 739.2, 691.2, 652.8000000000001,
          628.8000000000001, 604.8000000000001, 590.4, 576, 562.5600000000001, 547.2,
          537.6, 528, 518.4, 508.8, 499.20000000000005, 489.6, 480, 470.40000000000003,
          465.6, 412.8, 374.40000000000003, 340.8, 307.20000000000005, 278.40000000000003,
          249.60000000000002, 225.60000000000002, 201.60000000000002, 182.4,
          163.20000000000002, 144, 126.72000000000001, 110.4, 96,
        ],
      },
      {
        label: 'ZG7',
        volumes: [
          1600, 1456, 1328, 1232, 1152, 1088, 1048, 1008, 984, 960, 937.6, 912, 896, 880,
          864, 848, 832, 816, 800, 784, 776, 688, 624, 568, 512, 464, 416, 376, 336, 304,
          272, 240, 211.20000000000002, 184, 160,
        ],
      },
      {
        label: 'ZG8',
        volumes: [
          4000, 3640, 3320, 3080, 2880, 2720, 2620, 2520, 2460, 2400, 2344, 2280, 2240,
          2200, 2160, 2120, 2080, 2040, 2000, 1960, 1940, 1720, 1560, 1420, 1280, 1160,
          1040, 940, 840, 760, 680, 600, 528, 460, 400,
        ],
      },
      {
        label: 'ZG9',
        volumes: [
          8000, 7280, 6640, 6160, 5760, 5440, 5240, 5040, 4920, 4800, 4688, 4560, 4480,
          4400, 4320, 4240, 4160, 4080, 4000, 3920, 3880, 3440, 3120, 2840, 2560, 2320,
          2080, 1880, 1680, 1520, 1360, 1200, 1056, 920, 800,
        ],
      },
      {
        label: 'ZG10',
        volumes: [
          16000, 14560, 13280, 12320, 11520, 10880, 10480, 10080, 9840, 9600, 9376, 9120,
          8960, 8800, 8640, 8480, 8320, 8160, 8000, 7840, 7760, 6880, 6240, 5680, 5120,
          4640, 4160, 3760, 3360, 3040, 2720, 2400, 2112, 1840, 1600,
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
        boldLabel: true,
        isFootnote: false,
      },
      {
        label: 'Vessel jacket',
        value: ['NO'],
        boldLabel: false,
        isFootnote: false,
      },
      {
        label: 'Mobile vessel',
        value: ['NO'],
        boldLabel: false,
        isFootnote: false,
      },
      {
        label: 'Inner diameter',
        value: ['1030 mm'],
        boldLabel: false,
        isFootnote: false,
      },
      {
        label: 'Position of Mixer',
        value: ['137mm - 229mm'],
        boldLabel: false,
        isFootnote: false,
      },
      {
        label: 'Wall thickness',
        value: ['5 mm'],
        boldLabel: false,
        isFootnote: false,
      },
      {
        label: 'Estimated empty vessel weight',
        value: ['400 kg'],
        boldLabel: false,
        isFootnote: false,
      },
      {
        label: 'Maximum volume',
        value: ['2000 L'],
        boldLabel: false,
        isFootnote: false,
      },
      {
        label: 'Working volume',
        value: ['880 L'],
        boldLabel: false,
        isFootnote: false,
      },
      {
        label: 'Minimum continous working volume',
        value: ['75.6 L'],
        boldLabel: false,
        isFootnote: false,
      },
      {
        label: 'Last drop mixing during drain',
        value: ['24.7 L'],
        boldLabel: false,
        isFootnote: false,
      },
      {
        label: 'H/ID ratio',
        value: ['1.09'],
        boldLabel: false,
        isFootnote: false,
      },
      {
        label:
          'Calculations based on cylindrical vessel with torispherical heads according to DIN 28011',
        value: null,
        boldLabel: false,
        isFootnote: true,
      },
      {
        label: 'Mixing and Media',
        value: null,
        boldLabel: true,
        isFootnote: false,
      },
      {
        label: 'Mixing intensity',
        value: ['Vigorous'],
        boldLabel: false,
        isFootnote: false,
      },
      {
        label: 'Density',
        value: ['1000 kg/m3'],
        boldLabel: false,
        isFootnote: false,
      },
      {
        label: 'Viscosity',
        value: ['1 cP'],
        boldLabel: false,
        isFootnote: false,
      },
      {
        label: 'Selected Mixer',
        value: ['ZG6'],
        boldLabel: true,
        isFootnote: false,
      },
      {
        label: 'Recommended Speed',
        value: ['490 rpm (max speed)', '490 rpm (working speed)'],
        boldLabel: false,
        isFootnote: false,
      },
      {
        label: 'Power/volume',
        value: ['0.434 W/L', '0.434 W/L'],
        boldLabel: false,
        isFootnote: false,
      },
      {
        label: 'Tip Speed',
        value: ['4.103 m/s', '4.103 m/s'],
        boldLabel: false,
        isFootnote: false,
      },
      {
        label: 'Indicative blending time',
        value: ['2 min', '2 min'],
        boldLabel: false,
        isFootnote: false,
      },
      {
        label:
          "The tank turnover and blending-time is indicative and can not be guaranteed. To evaluate and optimize this mixing configuration, a CFD simulation and/or mixing evaluation can be performed in Metenova's Application lab.",
        value: null,
        boldLabel: false,
        isFootnote: true,
      },
      {
        label: 'Mix Head and Tank Plate',
        value: null,
        boldLabel: true,
        isFootnote: false,
      },
      {
        label: 'Mixer',
        value: ['ZG6'],
        boldLabel: false,
        isFootnote: false,
      },
      {
        label: 'Mix Head diameter',
        value: ['160 mm'],
        boldLabel: false,
        isFootnote: false,
      },
      {
        label: 'Max speed at 1000 kg/m3, 1cP',
        value: ['490 rpm'],
        boldLabel: false,
        isFootnote: false,
      },
      {
        label: 'Recommended min speed',
        value: ['49 rpm'],
        boldLabel: false,
        isFootnote: false,
      },
      {
        label: 'Material',
        value: ['EN 1.4404 / 316L'],
        boldLabel: false,
        isFootnote: false,
      },
      {
        label: 'Surface',
        value: ['Ra <= 0,38μm, EP, on SS Components inside vessel'],
        boldLabel: false,
        isFootnote: false,
      },
      {
        label: 'Tank plate welding diameter',
        value: ['104 mm'],
        boldLabel: false,
        isFootnote: false,
      },
      {
        label: 'Design temperature',
        value: ['5°C - 150°C'],
        boldLabel: false,
        isFootnote: false,
      },
      {
        label: 'Design pressure',
        value: ['-1 – 7 barg'],
        boldLabel: false,
        isFootnote: false,
      },
      {
        label: 'Male Post and Female Sleeve',
        value: null,
        boldLabel: true,
        isFootnote: false,
      },
      {
        label: 'Material',
        value: ['Sintered Silicon Carbide (SSiC)'],
        boldLabel: false,
        isFootnote: false,
      },
      {
        label: 'O-rings',
        value: ['EPDM (FDA USP class VI compliant)'],
        boldLabel: false,
        isFootnote: false,
      },
      {
        label: 'Drive Unit',
        value: null,
        boldLabel: true,
        isFootnote: false,
      },
      {
        label: 'IP- Class Drive Unit',
        value: ['IP55'],
        boldLabel: false,
        isFootnote: false,
      },
      {
        label: 'ATEX',
        value: ['NO'],
        boldLabel: false,
        isFootnote: false,
      },
      {
        label: 'RPM sensor',
        value: ['YES'],
        boldLabel: false,
        isFootnote: false,
      },
      {
        label: 'Lowering Device',
        value: ['NO'],
        boldLabel: false,
        isFootnote: false,
      },
      {
        label:
          'For more detailed product data, please see respectively datasheets for Mix Head, Female Sleave, Male Post, Tank Plate and Drive Unit',
        value: null,
        boldLabel: false,
        isFootnote: true,
      },
    ],
  },
  mixerMeta: {
    title: 'Zero-g',
    shortDesc:
      'Versatile, providing effective and gentle mixing at the same time, covering a vast range of applications',
    thumbnail: '/img/products/zg.png',
    image: '/img/products/zg.png',
    datasheets: [
      { title: 'Mix Head', src: '' },
      { title: 'Mix Post', src: '' },
      { title: 'Tank Plate', src: '' },
      {
        title: 'Mobile vessel',
        src: '',
        rules: [{ type: 'vessel-prop', value: 'mobileVessel', show: true }],
      },
      { title: 'Female Sleeve', src: '' },
    ],
    specImages: [
      {
        sectionTitle: 'Mix Head and Tank Plate',
        src: '/img/products/specs/zg.png',
      },
    ],
  },
  created: 1234,
}

/**
 * Successful response object for /revisions/[:guid]
 */
export const SizeRevisionGetResponseSuccess: EndpointGetRevisionResponse =
  SizeRevisionData

/**
 * Failed response object for /revisions/[:guid]
 */
export const SizeRevisionGetResponseError: EndpointGetRevisionResponse = null
