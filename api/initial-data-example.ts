import { EndpointInitialData } from './types'

export const initialData: EndpointInitialData = {
  mixingPurposes: [
    {
      code: '#01',
      title: 'Upstream - Media prep / Powder mixing, Sinking powder',
      recommendations: ['HP', 'ZG'],
      intensity: 'Vigorous',
      vortex: true,
    },
    {
      code: '#02',
      title: 'Upstream - Media prep / Powder mixing, Floating powder',
      recommendations: ['HP', 'ZG'],
      intensity: 'Vigorous',
      vortex: true,
    },
    {
      code: '#03',
      title: 'Downstream - Product hold, Shear sensitive',
      recommendations: ['ZF', 'ZG'],
      intensity: 'Gentle',
      vortex: false,
    },
    {
      code: '#04',
      title: 'Downstream - Product hold, Non shear sensitive',
      recommendations: ['ZG'],
      intensity: 'General',
      vortex: false,
    },
    {
      code: '#05',
      title: 'Downstream - Final bulk, Shear sensitive',
      recommendations: ['ZF'],
      intensity: 'Gentle',
      vortex: false,
    },
    {
      code: '#06',
      title: 'Downstream - Final bulk, Non shear sensitive',
      recommendations: ['ZG'],
      intensity: 'General',
      vortex: false,
    },
    {
      code: '#07',
      title: 'Downstream - Buffer prep / dissolve salt ',
      recommendations: ['HP', 'ZG'],
      intensity: 'Vigorous',
      vortex: true,
    },
    {
      code: '#08',
      title: 'Downstream - Buffer hold / Keep suspension homogenous',
      recommendations: ['ZG'],
      intensity: 'General',
      vortex: false,
    },
    {
      code: '#09',
      title: 'Downstream - Tablet coating, cellulose / powder',
      recommendations: ['HP', 'ZG'],
      intensity: 'Vigorous',
      vortex: true,
    },
    {
      code: '#10',
      title: 'Downstream - Tablet coating, oil based / emulsification',
      recommendations: ['HS', 'ZG'],
      intensity: 'Vigorous',
      vortex: true,
    },
    {
      code: '#11',
      title: 'Other mixing - Particle size reduction',
      recommendations: ['HS'],
      intensity: 'Vigorous',
      vortex: true,
    },
    {
      code: '#12',
      title: 'Other mixing -  Strong Acid or bases',
      recommendations: ['ZGP'],
      intensity: 'General',
      vortex: false,
    },
    {
      code: '#13',
      title: 'Other mixing - Other ….Input…',
      recommendations: [],
      intensity: 'General',
      vortex: false,
    },
  ],
  material: [
    {
      letter: '-',
      variant: 'EN 1.4404 / 316L',
    },
    {
      letter: 'A',
      variant: 'EN 1.4435 / 316L',
    },
    {
      letter: 'B',
      variant: 'EN 1.4539 / ANSI 904L',
    },
    {
      letter: 'C',
      variant: 'Hastelloy C22',
    },
    {
      letter: 'D',
      variant: 'Hastelloy C276',
    },
    {
      letter: 'E',
      variant: 'UNS N08367 / AL-6XN',
    },
    {
      letter: 'F',
      variant: 'EN 1.4571 / UNS31635 (316Ti)',
    },
    {
      letter: 'G',
      variant: 'EN 1.4435 / 316L BN2',
    },
    {
      letter: 'H',
      variant: 'SMO 254',
    },
    {
      letter: 'J',
      variant: 'EN 1.4404 / 316L SA-240',
    },
    {
      letter: 'K',
      variant: 'Titanium',
    },
    {
      letter: 'L',
      variant: 'EN 1.4404 / 316L, ASME Code case SA2156-1/UG14',
    },
    {
      letter: 'M',
      variant: 'UNS N08367/AL-6XN, ASME Code case SA2156-1',
    },
    {
      letter: 'N',
      variant: 'Hastelloy C22, ASME Code case SA2156-1',
    },
  ],
  oRings: [
    'EPDM (FDA USP class VI compliant)',
    'Silicone Platinum Cured o-rings in lieu of EPDM',
    'Viton o-ring in lieu of EPDM',
    'Kalrez o-ring in lieu of EPDM',
  ],
}
