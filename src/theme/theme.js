import {colors, createMuiTheme} from '@material-ui/core'
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import _font from './font'
import _palette from './palette'

const breakpoints = createBreakpoints({})
const defaultTheme = createMuiTheme()

const theme = createMuiTheme({
    breakpoints,
    overrides: {
        MuiIconButton: {
            root: {
                lineHeight: 1,
                '&.popoverButton': {
                    color: _palette.text.secondary,
                    borderRadius: defaultTheme.spacing(2),
                },
            },
            colorSecondary: {
                '&.popoverButton': {
                    backgroundColor: '#cf0a2c',
                    border: '0 none',
                },
            },
        },
        MuiDialog: {
            paper: {
                width: '100%',
                background: '#ffffff',
                borderRadius: 8,
                backgroundSize: 'cover',
                overflowY: 'visible',
                boxShadow: 'none',
            },
            paperFullScreen: {
                height: 'auto',
            },
        },
        MuiDialogContent: {
            root: {
                fontFamily: _font.primary,
                fontWeight: 400,
                paddingBottom: 0,
                marginBottom: 0,
                overflowY: 'visible',
                lineHeight: 1.2,
                textAlign: 'left',
                color: '#000000',
                fontSize: 24,
                [breakpoints.down('sm')]: {
                    paddingLeft: defaultTheme.spacing(2),
                    paddingRight: defaultTheme.spacing(2),
                    paddingBottom: 0,
                    fontSize: 20,
                },
                '& .text': {
                    color: '#000000',
                    fontSize: '20px',
                    [breakpoints.down('sm')]: {
                        fontSize: 18,
                    },
                },
                '& .link': {
                    fontSize: '100%',
                    color: '#000000',
                    textDecoration: 'none',
                    '&:hover': {
                        color: _palette.other,
                    },
                },
                '&>*:last-child': {
                    marginBottom: defaultTheme.spacing(4),
                },
                '& .fields': {
                    textAlign: 'center',
                    color: '#000000',
                    backgroundColor: 'transparent',
                    '& .field_row>*': {
                        [breakpoints.up('md')]: {
                            '&:first-child:not(:last-child)': {
                                paddingRight: defaultTheme.spacing(1),
                            },
                            '&:last-child:not(:first-child)': {
                                paddingLeft: defaultTheme.spacing(1),
                            },
                        },
                    },
                },
                '& .actions': {
                    maxWidth: 270,
                    width: '90%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                },
            },
        },
        MuiDialogTitle: {
            root: {
                position: 'relative',
                backgroundColor: 'transparent',
                color: '#000000',
                textAlign: 'center',
                fontSize: '24px',
                fontFamily: _font.secondary,
                fontWeight: 600,
            },
        },
        MuiAppBar:{
            root:{
                paddingLeft:16,
                paddingRight:16

            },
            colorPrimary:{
                backgroundColor:'#fff'
            }
        },
        MuiButton: {
            root: {
                textTransform: 'inherit',
                maxWidth: 300,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'border-box',
                marginLeft: 'auto',
                marginRight: 'auto',
                fontFamily: _font.secondary,
                transition: '0.2s all ease-in-out',
                '&$disabled': {
                    opacity: '.7',
                },
                [breakpoints.down('sm')]: {
                    fontSize: '14px',
                },
            },
            containedPrimary: {
                color: '#fff',
                backgroundColor: '#194467',
                borderRadius: 20,
                width: '100%',
                height: 45,
                maxWidth: 300,
                fontSize: 22,
                '&:hover': {
                    backgroundColor: '#194467',
                },
                '&:active,&.active': {
                    backgroundColor: '#194467',
                },

            },
            containedSecondary: {
                maxWidth: 300,
                backgroundColor: "#fff",
                color: "#194467",
                borderRadius: 25,
                marginTop: 30,
                width: '100%',
                fontSize: 30,
                fontFamily: _font.secondary,
                [breakpoints.down('sm')]: {},
                '&:active,&.active,&:hover,&:focus': {
                    backgroundColor: "#fff",
                },
            },
            outlinedSecondary: {
                fontFamily: _font.secondary,
                fontWeight: 600,
                maxWidth: 300,
                whiteSpace: 'nowrap',
                borderRadius:25,
                backgroundColor:"#B2B3B3",
                borderColor:"#B2B3B3",
                color:"#fff",
                [breakpoints.down('sm')]: {
                    fontSize: '18px',
                },
            },
        },

        /* форма */
        MuiCheckbox: {
            root: {
                padding: defaultTheme.spacing(1 / 2),
            },
        },

        MuiFormControl: {
            root: {
                maxWidth: 300,
                marginBottom: 30
            },
            fullWidth: {
                maxWidth: 300,
            }
        },
        MuiOutlinedInput: {
            root: {
                maxWidth: 300,
                borderRadius: 20,
            },
            input: {
                maxWidth: 300,
            },
            adornedEnd: {
                paddingRight: 0,
            },
        },
        MuiFilledInput: {
            root: {
                maxWidth: 300,
            },
            input: {
                maxWidth: 300,
            },
        },
        MuiInputBase: {
            root: {
                maxWidth: 300,
                border: " 1px solid #D9DADA",
                borderRadius: 20,
                width: "100%",
                boxShadow: "0 0 3px 5px rgba(0,0,0,.2)",
                marginLeft: "auto",
                marginRight: "auto",
                height: 50,
                marginBottom: 20,
                textAlign: "center",
                fontSize: 23,
                fontFamily: _font.secondary,
            },
            input: {
                textAlign: "center",
            }
        },
        MuiExpansionPanelSummary: {
            root: {
                maxWidth: 300,
            },
            content: {
                maxWidth: 300,
            },
        },
        MuiExpansionPanel: {
            root: {
                margin: 0,
                '&$expanded': {
                    margin: 0,
                },
            },
        },



        MuiFormControlLabel: {
            root: {
                marginLeft: 0,
            },
        },
        MuiTypography: {
            root: {
                fontFamily: _font.secondary,
            },
            colorPrimary: {},
            body1: {
                fontFamily: _font.secondary,
                fontSize: 20,
                lineHeight:1.2
            },
            h5: {
                fontFamily: _font.secondary,
                fontSize: 30,
            },
            h6:{
                fontFamily: _font.secondary,
                fontSize: 18,

            }
        },

        MuiAvatar: {
            root: {
                width: 35,
                height: 35,
                fontSize: 20,
                fontFamily: _font.secondary
            }
        },

        MuiTabs: {
            flexContainer: {
                backgroundColor: '#fff',
                [breakpoints.down('sm')]: {},
            },
        },

        MuiTab: {
            root: {
                color: '#194467',
                fontFamily: _font.secondary,
                fontSize: 18,
                fontWeight: 900,
                textTransform: "initial",
                backgroundColor: "#ffffff"
            },
            wrapped: {
                fontFamily: _font.secondary,
                fontSize: 18,
                fontWeight: 900,
                textTransform: "initial",
            },

            wrapper: {
                fontWeight: 900,
                fontFamily: _font.secondary,
                fontSize: 18,
                color: '#194467',
                backgroundColor: '#fff',
                [breakpoints.down('sm')]: {},
            },
        },
    },
    palette: _palette,
    font: _font,
})

export default theme
