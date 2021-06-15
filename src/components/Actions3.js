import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {Checkbox, FormControlLabel, Grid, InputAdornment, TextField} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {_font} from "../theme";
import InputMask from "react-input-mask";
import MaterialInput from "@material-ui/core/Input";
import rus from "../images/rus.png";
import {makeStyles} from '@material-ui/styles'
import InfoIcon from '@material-ui/icons/Info';
import PhoneIcon from '@material-ui/icons/Phone';
import ShareIcon from '@material-ui/icons/Share';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import copy from "../images/copy.png"


const useStyles = makeStyles(() => ({
    reg_input: {},
    text_grey: {
        color: "#B2B3B3",
        fontFamily: _font.secondary,
        fontSize: 16,
        textAlign: "left",
        marginLeft: 10,
        lineHeight:1.1

    },
    check: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingLeft: 5,
        fontFamily: _font.secondary,

    },
    info: {
        marginTop: 5,
        color: "#B2B3B3",
        marginLeft: -10
    },
    line: {
        display: "block",
        width: "100%",
        borderBottom: "5px solid #EBECEC",
        paddingTop: 10,
        paddingBottom: 20,
    },
    share:{
        fontSize:21,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems:"flex-start",
        paddingLeft:15,
        fontFamily: _font.secondary,
    },
    share_icon:{
        marginBottom:-5
    },
    action: {
        border: "3px solid #194467",
        borderRadius: 5,
        marginTop:12,
        marginLeft:10,
        marginRight:10,
        padding:10
    },
    action_label: {
        color: '#194467',
        fontFamily: _font.secondary,
        fontSize: 22
    },
    action_text: {
        color: "#B2B3B3",
        fontSize: 17,
        fontFamily: _font.secondary,
        lineHeight:1.1
    },
    line_content: {
        textAlign:"left",
        paddingLeft:10,
        paddingBottom:10,
        paddingTop:5,
        fontFamily: _font.secondary,
        fontSize: 19,
        fontWeight: 400,
        color: "#194467"
    },
}))

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const {children, classes, onClose, ...other} = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {/*{onClose ? (*/}
            {/*    <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>*/}
            {/*        <CloseIcon/>*/}
            {/*    </IconButton>*/}
            {/*) : null}*/}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default function Actions3() {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles()
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
    });

    const handleChange = (event) => {
        setState({...state, [event.target.name]: event.target.checked});
    };

    return (
        <div>
            <Grid container direction={"row"} justify={"flex-start"} alignItems={"flex-start"}>
                <Grid item xs={12}>
                    <Box className={classes.action} onClick={handleClickOpen}>
                        <Box className={classes.action_label}>
                           3000р на поход в Q20
                        </Box>
                        <Box className={classes.action_text}>
                            от компании ХмиАоми, вы можете получить скидку в самом магазине
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    3000р на поход в Q20
                </DialogTitle>
                <DialogContent dividers>
                    <Grid container direction={"row"} justify={"flex-start"} alignItems={"flex-start"}>
                        <Grid item xs={12}>
                            <Box className={classes.text_grey}>
                                Компания
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box className={classes.line_content}>
                                ООО Обливион
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container direction={"row"} justify={"flex-start"} alignItems={"flex-start"}>
                        <Grid item xs={12}>
                            <Box className={classes.text_grey}>
                                Контакт для связи
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box className={classes.line_content}>
                                +7 918-170-13-16
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container direction={"row"} justify={"flex-start"} alignItems={"flex-start"}>
                        <Grid item xs={12}>
                            <Box className={classes.text_grey}>
                                Акция действует до
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box className={classes.line_content}>
                                12.12.2020
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container direction={"row"} justify={"flex-start"} alignItems={"flex-start"}>
                        <Grid item xs={12}>
                            <Box className={classes.text_grey}>
                                Правила получения (использования)
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box className={classes.line_content}>
                                Текст текст текст текст текст
                            </Box>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Grid container direction={"row"} justify={"center"} alignItems={"center"}>
                        <Grid item xs={3}>
                            <Button variant="contained" color="primary" autoFocus onClick={handleClose}>
                                OK
                            </Button>
                        </Grid>
                    </Grid>
                </DialogActions>
            </Dialog>
        </div>
    );
}