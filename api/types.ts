/**
 * Incredibly accurate data versioning ;)
 */
export const VERSION = '0.25'

export type UnitSystem = 'Metric' | 'Imperial'

export type MixerKey = 'ZG' | 'ZF' | 'HP' | 'HS' | 'ZGP'
/**
 * Note:
 * The intended type is `${MixerKey}${number}`, but the ts-to-zod
 * converter doesn't work well with string literal types
 */
export type MixerSize = string
/**
 * Note:
 * The intended type is `#${`0${number}` | number}`, but the ts-to-zod
 * converter doesn't work well with string literal types
 * @elementPattern #\S+
 */
export type MixingPurposeCode = string
export type MixingIntensity = 'Gentle' | 'General' | 'Vigorous'

/**
 * ENDPOINT: /data
 *
 * This is the initial data object that the app will load
 * before it can start.
 */
export interface EndpointInitialData {
  /**
   * Default values
   */
  defaults: {
    /**
     * <Inputs!D3>
     */
    mixingPurpose?: MixingPurposeCode | null
    /**
     * <Inputs!D4>
     */
    project?: string
    /**
     * <Inputs!D5>
     */
    site?: string
    /**
     * <Inputs!D6>
     */
    freeText?: string
    /**
     * <Inputs!D7>
     */
    vesselJacket?: boolean | null
    /**
     * <Inputs!D8>
     */
    mobileVessel?: boolean | null
    /**
     * <Inputs!D9>
     */
    innerDiameter?: number | null
    /**
     * <Inputs!D10>
     */
    wallThickness?: number | null
    /**
     * <Inputs!D11>
     * Previously called "Nominal volume"
     */
    maximumVolume?: number | null
    /**
     * <Inputs!D12>
     * Previously called "Nominal volume"
     */
    workingVolume?: number | null
    /**
     * <Inputs!D13>
     */
    mixingIntensity?: MixingIntensity
    /**
     * <Inputs!D14>
     */
    density?: number | null
    /**
     * <Inputs!D15>
     */
    viscosity?: number | null
    /**
     * <Inputs!D17>
     */
    material?: string | null
    /**
     * <Inputs!D19>
     */
    oRings?: string | null
    /**
     * <Inputs!D20>
     */
    ipClass?: string | null
    /**
     * <Inputs!D21>
     */
    atex?: boolean | null
    /**
     * <Inputs!D22>
     */
    rpmSensor?: boolean | null
    /**
     * <Inputs!D23>
     */
    loweringDevice?: boolean | null
    /**
     * <Inputs!D24>
     */
    units?: UnitSystem
  }
  /**
   * <{MIXER}!{B6-}>
   * A list of all available sizes of a mixer
   * NOTE: Not sure if we can parse this from each
   * Mixer sheet today since each size occupy 2 columns
   */
  mixerSizes: Record<MixerKey, MixerSize[]>
  mixingPurposes: {
    code: MixingPurposeCode
    title: string
    /**
     * Note: Set null if the cell value is "All"
     */
    recommendations: MixerKey[] | null
    intensity: MixingIntensity
    /**
     * Note: Set null if the cell value is "NA"
     */
    vortex: boolean | null
  }[]
  material: {
    key: string
    title: string
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
   * @default metric
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
   * Defaults to the working volume value
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
  vessel_jacket?: boolean
  /**
   * <Input!D8>
   */
  mobile_vessel?: boolean

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
   *
   * NOTE: The type should be Partial<Record<MixerKey, MixerSize>>, but
   * the ts-to-zod plugin will not convert that correctly
   */
  alt_choices?: Record<MixerKey | string, MixerSize>
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
   * Defaults to the first list option key
   */
  material?: string | null
  /**
   * <Input!D19>
   * Material: O-rings
   * Defaults to the first list option
   */
  o_rings?: string | null
  /**
   * <Input!D20>
   * @default IP55
   */
  ip_class?: 'IP55' | 'IP66' | null
  /**
   * <Input!D21>
   */
  atex?: boolean
  /**
   * <Input!D22>
   */
  rpm_sensor?: boolean
  /**
   * <Input!D3>
   */
  lowering_device?: boolean

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
 * The values can either be set as a single value
 * or a tuple of [metric,imperial] unit values
 */
interface MixerTurnoverData {
  /**
   * Metric value, or [metric, imperial] unit values
   */
  speed: [number, number]
  /**
   * Metric value, or [metric, imperial] unit values
   */
  powerVolume: [number, number]
  /**
   * Metric value, or [metric, imperial] unit values
   */
  tipSpeed: [number, number]
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
  // /**
  //  * @deprecated will be replaced with customSpeed
  //  */
  // halfSpeed: MixerTurnoverData
  // /**
  //  * Refers to Tank turnover- and blending-time section
  //  * where the user can set their own times
  //  */
  // customSpeed?: MixerTurnoverData | null
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
    primary: MixerSelectionData | null
    /**
     * <{MIXER}!B45>
     * The alternative choice data will only be included if another mixer size
     * --different from the primary choice--is set via `alt_choices`.
     *
     * NOTE: If the cell value is 'N/A', it would be preferable if the
     * API set the value to null for consistency
     */
    alternative?: MixerSelectionData | null
  }
  /**
   * <Mixer>!<{B|D|F|...}-{7-41}>
   * Contains the size label and the volume data
   */
  sizes: {
    /**
     * E.g. "ZG1"
     */
    label: string
    /**
     * All the values in the mixer size column
     */
    volumes: number[]
  }[]
  /**
   * <Mixer>!<{C|E|G|...}-{7-41}>
   * The viscosity scale of the mixer. Should be the same
   * values for all sizes, and the total count should match
   * the volume count.
   */
  viscosities: number[]
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
     *
     * @PARSING INSTRUCTIONS:
     * If the (first) value is "N/A", please omit
     * _the whole row_!
     */
    value?: string[]
    /**
     * Set when the (value) label should be bold
     */
    boldLabel?: boolean
  }[]
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
