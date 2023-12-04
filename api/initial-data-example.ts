import { EndpointInitialData } from './types'

export const initialData: EndpointInitialData = {
  mixerSizes: {
    ZG: ['ZG1', 'ZG2', 'ZG3', 'ZG4', 'ZG5', 'ZG6', 'ZG7', 'ZG8', 'ZG9', 'ZG10'],
    ZGP: ['ZGP2', 'ZGP5', 'ZGP8'],
    HP: ['HP2', 'HP5', 'HP8'],
    HS: ['HPS2', 'HPS5', 'HS8'],
    ZF: ['ZG100', 'ZG160'],
  },
  mixingPurposes: [
    {
      code: '#01',
      title: 'Upstream - Media prep: Floating powder mixing',
      recommendations: ['ZG', 'HP'],
      intensity: 'Vigorous',
      vortex: true,
    },
    {
      code: '#02',
      title: 'Upstream - Media prep: Sinking powder mixing',
      recommendations: ['ZG', 'HP'],
      intensity: 'Gentle',
      vortex: null,
    },
    {
      code: '#03',
      title: 'Downstream - Buffer prep: Dissolve salt',
      recommendations: ['ZG', 'HP'],
      intensity: 'Vigorous',
      vortex: null,
    },
    {
      code: '#04',
      title: 'Downstream - Buffer hold: Keep suspension',
      recommendations: ['ZG', 'HP'],
      intensity: 'General',
      vortex: null,
    },
    {
      code: '#05',
      title: 'Downstream - Product hold: Shear sensitive',
      recommendations: ['ZF', 'ZG'],
      intensity: 'Gentle',
      vortex: false,
    },
    {
      code: '#06',
      title: 'Downstream - Product hold: Keep suspension, Non-shear sensitive',
      recommendations: ['ZG'],
      intensity: 'General',
      vortex: false,
    },
    {
      code: '#07',
      title: 'Downstream - Final bulk: Keep suspension, Shear sensitive',
      recommendations: ['ZF', 'ZG'],
      intensity: 'Gentle',
      vortex: false,
    },
    {
      code: '#08',
      title: 'Downstream - Final bulk: Keep suspension, Non-shear sensitive',
      recommendations: ['ZG'],
      intensity: 'General',
      vortex: false,
    },
    {
      code: '#09',
      title: 'Downstream - Tablet coating: Cellulose - Powder mixing',
      recommendations: ['HP', 'ZG'],
      intensity: 'Vigorous',
      vortex: true,
    },
    {
      code: '#10',
      title: 'Downstream - Tablet coating: Oil based - emulsification',
      recommendations: ['HS'],
      intensity: 'General',
      vortex: true,
    },
    {
      code: '#11',
      title: 'Other mixing - Particle size reduction',
      recommendations: ['HS'],
      intensity: 'General',
      vortex: null,
    },
    {
      code: '#12',
      title: 'Other mixing - Strong Acid or bases',
      recommendations: ['ZGP'],
      intensity: 'General',
      vortex: null,
    },
    {
      code: '#13',
      title: 'Other',
      recommendations: null,
      intensity: 'General',
      vortex: false,
    },
  ],
  material: [
    {
      key: '-',
      title: 'EN 1.4404 / 316L',
    },
    {
      key: 'A',
      title: 'EN 1.4435 / 316L',
    },
    {
      key: 'B',
      title: 'EN 1.4539 / ANSI 904L',
    },
    {
      key: 'C',
      title: 'Hastelloy C22',
    },
    {
      key: 'D',
      title: 'Hastelloy C276',
    },
    {
      key: 'E',
      title: 'UNS N08367 / AL-6XN',
    },
    {
      key: 'F',
      title: 'EN 1.4571 / UNS31635 (316Ti)',
    },
    {
      key: 'G',
      title: 'EN 1.4435 / 316L BN2',
    },
    {
      key: 'H',
      title: 'SMO 254',
    },
    {
      key: 'J',
      title: 'EN 1.4404 / 316L SA-240',
    },
    {
      key: 'K',
      title: 'Titanium',
    },
    {
      key: 'L',
      title: 'EN 1.4404 / 316L, ASME Code case SA2156-1/UG14',
    },
    {
      key: 'M',
      title: 'UNS N08367/AL-6XN, ASME Code case SA2156-1',
    },
    {
      key: 'N',
      title: 'Hastelloy C22, ASME Code case SA2156-1',
    },
  ],
  oRings: [
    'EPDM (FDA USP class VI compliant)',
    'Silicone Platinum Cured o-rings in lieu of EPDM',
    'Viton o-ring in lieu of EPDM',
    'Kalrez o-ring in lieu of EPDM',
  ],
}
