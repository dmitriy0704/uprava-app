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
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    InputAdornment, Radio,
    RadioGroup,
    TextField
} from "@material-ui/core";
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
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import HelpIcon from '@material-ui/icons/Help';

const useStyles = makeStyles(() => ({
    reg_input: {
        paddingTop:15
    },
    text_grey: {
        color: "#B2B3B3",
        fontFamily: _font.secondary,
        fontSize: 20,
        textAlign: "left",
        marginLeft: 16,
        lineHeight: 1.1,
        marginTop: 15
    },


    line: {
        display: "block",
        width: "100%",
        borderBottom: "5px solid #EBECEC",
        paddingTop: 10,
        paddingBottom: 20,
        paddingLeft: 0,
        paddingRight: 0
    },

    line_content: {
        paddingLeft: 16,
        fontFamily: _font.secondary,
        fontSize: 30,
        fontWeight: 400,
        color: "#194467"
    },
    line_btn: {
        paddingRight: 16
    },
    icon: {
        color: "#194467",
        fontSize: 30,
        marginTop: 10,
        marginLeft: 15
    },
    input_area: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        marginTop: 15,
    },
    btn:{
        fontSize:12,
        padding:2
    }
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

export default function Bonus() {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles()
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [value, setValue] = React.useState('select1');

    const handleChangeR = (event) => {
        setValue(event.target.value);
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
        <>
            <Box className={classes.line}>
                <Grid container direction={"row"} justify={"flex-start"} alignItems={"flex-start"}>
                    <Grid item xs={12}>
                        <Box className={classes.text_grey}>
                            Вознаграждение
                        </Box>
                    </Grid>
                </Grid>
                <Grid container direction={"row"} justify={"space-between"} alignItems={"center"}>
                    <Grid item xs={5}>
                        <Box className={classes.line_content}>
                            1200,00
                        </Box>
                    </Grid>
                    <Grid item xs={5}>
                        <Box className={classes.line_btn}>
                            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                                Получить
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Способ получения денег
                </DialogTitle>
                <DialogContent dividers>
                    <FormControl component="fieldset" fullWidth={true}>
                        <RadioGroup aria-label="gender" name="gender1" value={value}
                                    onChange={handleChangeR}>
                            <Grid container direction={"row"} justify={"flex-start"} alignItems={"flex-start"}>
                                {/*<Grid container direction={"row"} justify={"center"} alignItems={"center"}>*/}
                                <Grid item xs={12}>
                                    <Box className={'check_label'}>
                                        <FormControlLabel value="select1" control={<Radio/>}
                                                          label="На карту через номер телефона" labelPlacement={"end"}/>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box className={'check_label'}>
                                        <FormControlLabel value="select2" control={<Radio/>} label="По номеру карты"
                                                          labelPlacement={"end"}/>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container direction={"row"} justify={"center"} alignItems={"center"}>
                                <Grid item xs={12}>
                                    {value === 'select1' &&
                                    <Box className={'check_content'}>
                                        <Grid container direction={"row"} justify={"flex-start"}
                                              alignItems={"flex-start"}>
                                            <Grid item xs={12}>
                                                <Box className={classes.text_grey}>
                                                    Номер карты
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Box className={classes.input_area}>
                                                    <InputMask
                                                        mask="9999 9999 9999 9999"
                                                        variant="outlined">{(inputProps) =>
                                                        <MaterialInput {...inputProps}
                                                                       type="text" disableUnderline
                                                                       variant="outlined"
                                                                       color={"primary"}/>}
                                                    </InputMask>
                                                    <HelpIcon className={classes.icon}/>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Box className={classes.text_grey}>
                                                    Денежные средства вам будут переведены в срок не более 30 дней
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>}
                                    {value === 'select2' &&
                                    <Box className={'check_content'}>
                                        <Grid item xs={12}>
                                            <Box className={classes.reg_input}>
                                                <InputMask mask="+7 (999) 999-99-99" variant="outlined">{(inputProps) =>
                                                    <MaterialInput {...inputProps} type="tel" disableUnderline
                                                                   label="Телефон"
                                                                   variant="outlined" color={"primary"}
                                                                   startAdornment={
                                                                       <InputAdornment position="start"
                                                                                       style={{paddingLeft: 15}}>
                                                                           <PhoneIcon/>
                                                                       </InputAdornment>
                                                                   }
                                                    />}</InputMask>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Box className={classes.text_grey}>
                                                Денежные средства вам будут переведены в срок не более 30 дней
                                            </Box>
                                        </Grid>
                                    </Box>}
                                </Grid>
                            </Grid>
                        </RadioGroup>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Grid container direction={"row"} justify={"center"} alignItems={"center"}>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" autoFocus onClick={handleClose} className={classes.btn}>
                                ОТПРАВИТЬ ЗАПРОС НА ПОЛУЧЕНИЕ БОНУСОВ
                            </Button>
                        </Grid>
                    </Grid>
                </DialogActions>
            </Dialog>
        </>
    );
}