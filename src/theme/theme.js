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
                font: _font.primary,
                fontWeight: 400,
                paddingBottom: 0,
                overflowY: 'visible',
                lineHeight: 1.5,
                textAlign: 'center',
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

                    '& fieldset': {
                        // borderColor: '#f4d48c!important',
                    },

                    [breakpoints.down('sm')]: {},
                    [breakpoints.down('xs')]: {
                        // paddingTop: defaultTheme.spacing(4),
                    },

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
                    '&.fields-bottom': {
                        // костыль
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                    },
                    '&.fields-top:first-child:not(:last-child)': {
                        // костыль
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        marginBottom: -1,
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
        MuiButton: {
            root: {
                textTransform: 'inherit',

                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'border-box',
                marginLeft: 'auto',
                marginRight: 'auto',
                fontFamily: _font.secondary,
                fontWeight: '700!important',
                transition: '0.2s all ease-in-out',
                fontSize: 22,

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
                '&:hover': {
                    backgroundColor: "#fff",
                },
                '&:active,&.active': {},
            },
            containedSecondary: {
                backgroundColor: "#fff",
                color: "#194467",
                borderRadius: 25,
                marginTop: 30,
                width: '100%',
                [breakpoints.down('sm')]: {},
                '&:active,&.active,&:hover,&:focus': {
                    backgroundColor: "#fff",
                },
                '&$disabled': {},
            },
            outlinedSecondary: {
                fontFamily: _font.secondary,
                fontWeight: 600,


                marginTop: '30',
                fontSize: '16px',
                whiteSpace: 'nowrap',
                [breakpoints.down('sm')]: {
                    fontSize: '14px',
                },
                '&:hover': {
                    borderWidth: 2,


                },
                '&:active,&.active': {borderWidth: 2},
                '&$disabled': {
                    opacity: '.7',
                },
            },
        },
        MuiAppBar: {
            root: {
                width: 'auto',
            },
            colorPrimary: {},
        },
        MuiSelect: {
            iconFilled: {},
        },
        MuiMenuItem: {
            root: {
                '&$selected': {
                    // background: _palette.secondary,
                },
            },
            gutters: {},
        },
        MuiSvgIcon: {
            root: {},
        },
        MuiDrawer: {
            paper: {
                '& a': {},
            },
        },
        /* форма */
        MuiCheckbox: {
            root: {
                padding: defaultTheme.spacing(1 / 2),

            },
            colorPrimary: {

                '&$checked': {},
                '&$disabled': {},
            },
        },
        MuiSnackbarContent: {
            root: {},
            message: {},
            action: {},
        },
        MuiFormHelperText: {
            root: {
                left: 0,
                bottom: 0,
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                width: '100%',
                whiteSpace: 'nowrap',
                lineHeight: 1.25,
                textTransform: 'none',
                fontSize: 16,
                color: '#FF5050',
                fontFamily: _font.secondary,
                position: 'absolute',
                '&$error': {
                    color: '#FF5050',
                },
                [breakpoints.down('sm')]: {
                    fontSize: 12,
                },
            },
            contained: {
                marginLeft: 0,
                marginRight: 0,
            },
        },
        MuiFormControl: {
            root: {
                paddingBottom: 24,
                marginTop: 0,
                marginBottom: 0,
                maxWidth: '100%',
            },
        },

        MuiPaginationItem: {
            root: {

                '&$selected': {

                    '&$textSecondary': {},
                    '&$textPrimary': {},
                },
                '&$disabled': {
                    // visibility: 'hidden',
                },
                '&$textSecondary': {},
                '&:hover': {
                    transaction: 'none',
                    // backgroundColor: 'transparent!important',
                },
            },
            outlined: {


                [breakpoints.down('xs')]: {},
                '&$sizeSmall': {},

                '&$disabled': {
                    visibility: 'visibility',
                },
                '&$selected': {

                    '&$textSecondary': {},
                    '&$sizeSmall': {},
                },
            },
            ellipsis: {},
            icon: {},
        },
        MuiOutlinedInput: {
            root: {
                borderRadius: 20,
                '&:hover $notchedOutline': {},
                '&$focused $notchedOutline': {},
                '&$error $notchedOutline': {},
                '&$disabled $notchedOutline': {},
            },
            multiline: {},
            notchedOutline: {

                '& legend': {},
            },
            input: {

                '&$disabled': {},
                '&:-internal-autofill-selected': {},
                '&:-webkit-autofill': {},
            },
            adornedEnd: {
                paddingRight: 0,
            },
        },
        MuiFilledInput: {
            root: {

                '&:before, &:after': {},
                '&:hover': {},
                '&$error': {},
                '&$focused': {},
                [breakpoints.down('sm')]: {},
            },
            input: {


                '&:-internal-autofill-selected': {},
                '&:-webkit-autofill': {},
                [breakpoints.down('sm')]: {},
            },
        },
        MuiInputBase: {
            root: {},

        },
        MuiExpansionPanelSummary: {
            root: {

                [breakpoints.down('sm')]: {},
                '&$expanded': {},
            },
            content: {

                '&$expanded': {},
            },
            expandIcon: {

                '&$expanded': {},
            },
        },
        MuiExpansionPanel: {
            root: {

                '&:last-child': {},
                margin: 0,
                '&$expanded': {
                    margin: 0,
                },
            },
        },
        MuiExpansionPanelDetails: {
            root: {

                [breakpoints.down('sm')]: {},
                '& a': {},
            },
        },
        MuiInputLabel: {
            root: {

                '&$focused': {},

                '&$error': {},
            },
            formControl: {},
            outlined: {

                '&$shrink': {},
            },
            filled: {

                [breakpoints.down('sm')]: {},
                '&$shrink': {},
                '&$focused': {},
            },
        },
        MuiFormLabel: {
            root: {

                '&$disabled': {},
                '&focused': {},
            },
        },
        MuiFormControlLabel: {
            root: {
                marginLeft: 0,

                '& a': {},
            },
            label: {

                '&$disabled': {},
            },
        },


        MuiTypography: {
            root: {
                fontFamily: _font.secondary,
            },
            colorPrimary: {},
            body1: {
                fontFamily: _font.secondary,

            },
            h5: {
                fontFamily: _font.secondary,
                fontSize: 30,
            }
        },

        MuiTabs: {
            flexContainer: {
                backgroundColor:'#fff',



                [breakpoints.down('sm')]: {},
            },
        },

        MuiTab: {
            root: {
                color: '#194467',
            },

            wrapper: {
                color: '#194467',
                backgroundColor:'#fff',
                [breakpoints.down('sm')]: {},
            },
            textColorInherit: {
                [breakpoints.down('sm')]: {
                    '&:first-child': {},
                    '&:last-child': {},
                },
            },
        },
        PrivateTabIndicator: {
            root: {},

        },
        MuiTableCell: {
            root: {},
        },
    },
    palette: _palette,
    font: _font,
})

export default theme
