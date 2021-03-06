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
        fontSize: 20,
        textAlign: "left",
        marginLeft: 10,

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
    }
}))


const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: -5,
        top: -5,
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const {children, classes, onClose, ...other} = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon/>
                </IconButton>
            ) : null}
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

export default function Dialogs() {
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const classes = useStyles()
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClickOpen1 = () => {
        setOpen1(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleClose1 = () => {
        setOpen1(false);
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

                    <Box className={classes.line}>
                        <Box mt={2} mb={3} className={classes.text_grey}>
                            ?????????? ??????????
                        </Box>


                        <Box mt={2} mb={3}>
                            <Box className={classes.reg_input}>
                                {/*<img src={rus} alt="" className={classes.rus}/>*/}
                                <InputMask mask="+7 (999) 999-99-99" variant="outlined">{(inputProps) =>
                                    <MaterialInput {...inputProps} type="tel" disableUnderline label="??????????????"
                                                   variant="outlined" color={"primary"}
                                                   startAdornment={
                                                       <InputAdornment position="start" style={{paddingLeft: 15}}>
                                                           <PhoneIcon/>
                                                       </InputAdornment>
                                                   }

                                    />}</InputMask>
                            </Box>
                        </Box>
                        <Box mt={2} mb={3} className={classes.check}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={state.checkedB}
                                        onChange={handleChange}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="?????????????????? ????????????????"
                            /><InfoIcon className={classes.info}/>
                        </Box>
                        <Box>
                            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                                ??????????????????
                            </Button>
                        </Box>

                    </Box>


                    <Box className={classes.line}>
                        <Box className={classes.share}>

                            <Box mb={1}> <ShareIcon className={classes.share_icon}/> ???????????????????? ??????????????</Box>
                            <Box> <img src={copy} alt="" style={{maxWidth:23,marginTop:5,marginBottom:-7
                            }}/> ?????????????????????? ????????????</Box>
                        </Box>

                    </Box>
                    <Box className={classes.text_grey} pt={1}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.


                    </Box>

                </Grid>
            </Grid>

            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    ????????????????????!
                </DialogTitle>
                <DialogContent dividers>
                    <Typography style={{
                        fontFamily: _font.secondary,
                        fontSize: 21,
                        lineHeight: 1.1,
                        textAlign: "left",
                        marginBottom: 15
                    }}>
                        ?????????? ???????????????????? ????????????????, ???? ?? ?????? ???????? ?????????????? ??????????, ?????????????????? ?? ????????????????.
                    </Typography>

                    <Typography style={{
                        fontFamily: _font.secondary,
                        fontSize: 21,
                        color:'#194467',
                        textAlign: "center",
                        marginBottom: 0,
                        textDecoration:"underline"
                    }}>
                        ?????????????? ???? ????????????????????????!
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Grid container direction={"row"} justify={"center"} alignItems={"center"}>
                        <Grid item xs={3}>
                            <Button variant="contained" color="primary" autoFocus onClick={handleClickOpen1}>
                                OK
                            </Button>
                        </Grid>
                    </Grid>
                </DialogActions>
            </Dialog>













        </div>
    );
}