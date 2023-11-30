export type MixerKey = 'ZG' | 'ZF' | 'HP' | 'HS' | 'ZGP'
export type MixerSize = `${MixerKey}${number}`
export type MixingPurposeCode = `#${`0${number}`|number}`
export type MixingIntensity = 'Gentle' | 'General' | 'Vigorous'

/**
 * ENDPOINT: /data
 *
 * This is the initial data object that the app will load
 * before it can start.
 */
export type EndpointInitialData = {
  mixingPurposes: {
    code: MixingPurposeCode
    title: string
    recommendations: MixerKey[]
    intensity: MixingIntensity
    vortex: boolean
  }[]
  material: {
    letter: string
    variant: string
  }[]
  oRings: string[]
}

/**
 * These parameters will be passed via GET or POST body
 * variables to the /results endpoint
 */
export interface ResultQueryParams {
  //------------------------------------------------------------------------
  //  Step 1: Vessel
  //------------------------------------------------------------------------
  /**
   * <Input!D24>
   * @default 'metric
   */
  units?: 'metric' | 'imperial' | null
  /**
   * <Input!D9>
   */
  inner_diameter: number
  /**
   * <Input!D12>
   */
  working_volume: number
  /**
   * <Input!D11>
   * @default [Same as working volume]
   */
  maximum_volume: number | null
  /**
   * <Input!D10>
   * @default 5
   */
  wall_thickness?: number | null
  /**
   * <Input!D7>
   */
  vessel_jacket?: boolean | number
  /**
   * <Input!D8>
   */
  mobile_vessel?: boolean | number

  //------------------------------------------------------------------------
  //  Step 2: Liquid
  //------------------------------------------------------------------------
  /**
   * <Input!D3>
   */
  mixing_purpose?: MixingPurposeCode
  /**
   * <Input!D{27-31}>
   * Populates a corresponding alternative choice input, e.g.:
   * The value { "ZG": "ZG2", "ZGP": "ZGP4" } will set 'ZG2' to
   * <Input!D27> and 'ZGP4' to <Input!D28>
   */
  alt_choices?: Partial<Record<MixerKey, MixerSize>>
  /**
   * <Input!D13>
   * @default General
   */
  mixing_intensity?: MixingIntensity
  /**
   * <Input!D14>
   * @default 1000
   */
  density?: number | null
  /**
   * <Input!D15>
   * @default 1
   */
  viscosity?: number | null

  //------------------------------------------------------------------------
  //  Step 3: Mixer
  //------------------------------------------------------------------------
  /**
   * <Input!D17>
   * Material: SS (Stainless Steel)
   * @default [First list option key]
   */
  material?: string | null
  /**
   * <Input!D20>
   * Material: O-rings
   * @default [First list option]
   */
  o_ring?: string | null
  /**
   * <Input!D20>
   * @default IP55
   */
  ip_class?: 'IP55' | 'IP66' | null
  /**
   * <Input!D21>
   */
  atex?: boolean | number
  /**
   * <Input!D22>
   */
  rpm_sensor?: boolean | number
  /**
   * <Input!D3>
   */
  lowering_device?: boolean | number

  /**
   * <Input!D4>
   */
  project?: string | null
  /**
   * <Input!D5>
   */
  site?: string | null
  /**
   * <Input!D6>
   */
  free_text?: string | null
}

/**
 * ENDPOINT /results
 * PAYLOAD: ResultInputParams
 *
 * Returns _all_ mixers and their recommended settings based on the
 * user's input parameters and some metadata, which for now will be
 * repeating the input data (project, site, etc.)
 */
export interface EndpointResultsData {
  meta: {
    project: string | null
    site: string | null
    freeText: string | null
  }
  results: Record<MixerKey, EndpointResultItem>
}

/**
 * The values can either be set as a single value
 * or a tuple of [metric,imperial] unit values
 */
interface MixerTurnoverData {
  /**
   * Metric value, or [metric, imperial] unit values
   */
  speed: number | [number, number]
  /**
   * Metric value, or [metric, imperial] unit values
   */
  powerVolume: number | [number, number]
  /**
   * Metric value, or [metric, imperial] unit values
   */
  tipSpeed: number | [number, number]
  /**
   * This is used to generate the curve for
   * the tank turnover graph
   */
  data?: {
    /**
     * Tank turnover values at the set [Viscosity] value
     */
    turnovers: number[]
    /**
     * Values in minutes
     */
    time: number[]
  }
}

interface MixerSelectionData {
  size: MixerSize
  maxSpeed: MixerTurnoverData
  /**
   * @deprecated will be replaced with customSpeed
   */
  halfSpeed: MixerTurnoverData
  /**
   * Refers to Tank turnover- and blending-time section
   * where the user can set their own times
   */
  customSpeed?: MixerTurnoverData | null
}

export interface EndpointResultItem {
  /**
   * The selection data will present the recommended and optional alternative
   * mixer size based on a combination of the essential inputs (`working_volume`,
   * `viscosity` and `mixing_intensity`) the sorting inputs: `mixing_purpose` and
   * `alt_choices`. It will also contain the speed data which is calculated from
   * the `volume` and `density` values.
   *
   * In the case where there are no available recommendations
   * for a mixer, selection will be set to `null`
   */
  selection: null | {
    /**
     * <{MIXER}!B44>
     * The primary selection data is what Metenova recommends, based on the
     * user's input.
     *
     * NOTE: If the cell value is 'N/A', it would be preferable if the
     * API set the value to null for consistency
     */
    primary: MixerSelectionData | 'N/A' | null
    /**
     * <{MIXER}!B45>
     * The alternative choice data will only be included if another mixer size
     * --different from the primary choice--is set via `alt_choices`.
     *
     * NOTE: If the cell value is 'N/A', it would be preferable if the
     * API set the value to null for consistency
     */
    alternative?: MixerSelectionData | 'N/A' | null
  }
  /**
   * Volumes: <Mixer>!<{B|D|F|...}-{7-41}>
   * Viscosity: <Mixer>!<{C|E|G|...}-{7-41}>
   *
   * Contains the size data, which will be used to render the line charts.
   */
  data: {
    /**
     * E.g. "ZG1"
     */
    label: string
    /**
     * All the values in the mixer size column
     */
    volumes: number[]
    /**
     * All the values in the mixer size column
     */
    viscosity: number[]
  }[]
  /**
   *
   * <Output>
   * The table row data
   */
  specifications: {
    /**
     * <Output!B7-{n}>
     * Single label means it is a heading
     */
    label: string
    /**
     * <Output!{MIXER_COLUMNS_1-2}>
     * Each mixer has two columns, so the value
     * can either be a string or string array
     */
    value?: string | string[]
    /**
     * Set when the (value) label should be bold
     */
    boldLabel?: boolean
  }[]
}
