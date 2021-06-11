export default {
  type: 'light',

  common: {
    black: '#0A0E12',
    white: '#000',
  },
  background: {
    paper: '#194467',
    footer: '#194467',
    default: '#60B7CF',
    backdrop: 'rgba(255, 255, 26, .6)',
    contrast: '#000',
  },

  table: {
    header: '#3e3f41',
    row: '#e8e8e8',
  },

  primary: {
    main: '#0A0E12',
    contrast: '#000',
  },
  secondary: {
    main: '#194467',
    contrast: '#000',
  },

  error: {
    main: 'rgba(240, 48, 32, 1)',
    contrast: '#000',
  },
  warning: {
    main: '#f44f00',
    contrast: '#000',
  },
  info: {
    main: '#194467',
    contrast: '#000',
  },
  success: {
    main: '#58d131',
    contrast: '#000',
  },
  // ---------------------------- Text
  text: {
    primary: '#000',
    secondary: '#000',
    disabled: 'rgba(177, 177, 177, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)',
    icon: 'rgba(105,105,105,0.54)',
  },
  // ---------------------------- Action
  action: {
    active: '#000',
    hover: 'rgba(145,145,145,0.52)',
    hoverOpacity: 0.04,
    selected: '#000',
    selectedOpacity: 0.08,
    disabled: '#A6A6A6',
    disabledBackground: '#ececec',
    disabledOpacity: 0.38,
    focus: '#bfbfbf',
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
  // ---------------------------- Divider
  divider: 'rgba(255, 255, 255, 0.12)',

  tonalOffset: 0.2,
  contrastThreshold: 5,
  //getcontrast: () => {},
  //augmentColor: () => {},
}
