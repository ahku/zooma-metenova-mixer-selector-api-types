import { ResultQueryParams } from './types'

//------------------------------------------------------------------------
//  Input Example 1: Minimum required fields (will never happen)
//------------------------------------------------------------------------
const EX1_VESSEL_resultInputData: ResultQueryParams = {
  inner_diameter: 1003,
  working_volume: 1003,
  maximum_volume: 1200,
  vessel_jacket: true,
  mobile_vessel: false,
}

//------------------------------------------------------------------------
//  Input Example 2: Minimum required fields (will never happen)
//------------------------------------------------------------------------
const EX2_VESSEL_resultInputData: ResultQueryParams = {
  units: 'metric',
  inner_diameter: 1003,
  working_volume: 1003,
  maximum_volume: 1200,
  wall_thickness: 5,
  vessel_jacket: true,
  mobile_vessel: false,
}

//------------------------------------------------------------------------
//  Input Example 3: These inputs will always be set in step 2
//------------------------------------------------------------------------
const EX3_LIQUID_resultInputData: ResultQueryParams = {
  units: 'metric',
  inner_diameter: 1003,
  working_volume: 1003,
  maximum_volume: 1200,
  wall_thickness: 5,
  vessel_jacket: true,
  mobile_vessel: false,
  mixing_purpose: '#02',
  mixing_intensity: 'Vigorous',
  density: 1000,
  viscosity: 1,
}

//------------------------------------------------------------------------
//  Input Example 4: The alt_choices are set
//------------------------------------------------------------------------
const EX4_LIQUID_resultInputData: ResultQueryParams = {
  units: 'metric',
  inner_diameter: 1003,
  working_volume: 1003,
  maximum_volume: 1200,
  wall_thickness: 5,
  vessel_jacket: true,
  mobile_vessel: false,
  mixing_purpose: '#02',
  alt_choices: {
    ZG: 'ZG6',
    HS: 'HS3',
  },
  mixing_intensity: 'Vigorous',
  density: 1000,
  viscosity: 1,
}
