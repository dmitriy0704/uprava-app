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
import {Checkbox, FormControlLabel, Grid, TextField} from "@material-ui/core";
import Box from "@material-ui/core/Box";

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

export default function Dialogs() {
    const [open, setOpen] = React.useState(false);

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
            setState({ ...state, [event.target.name]: event.target.checked });
        };



        return (
        <div>

            <Grid container direction={"row"} justify={"flex-start"} alignItems={"flex-start"}>

                <Grid item xs={12}>
                    <Box mt={2} mb={3}>
                        <TextField
                            id="standard-basic"
                            label="Номер друга"
                            fullWidth={true}
                        />
                    </Box>
                    <Box mt={2} mb={3}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={state.checkedB}
                                    onChange={handleChange}
                                    name="checkedB"
                                    color="primary"
                                />
                            }
                            label="Отправить анонимно"
                        />
                    </Box>

                </Grid>


            </Grid>







            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                Отправить
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    ОТПРАВЛЕНО!
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        После заключения договора, Вы и Ваш друг получат бонус, указанный в правилах.
                    </Typography>


                </DialogContent>
                <DialogActions>

                    <Grid container direction={"row"} justify={"center"} alignItems={"center"}>
                        <Grid item xs={3}>
                            <Button variant="contained" color="primary" autoFocus onClick={handleClose} >
                                OK
                            </Button>
                        </Grid>

                    </Grid>

                </DialogActions>
            </Dialog>
        </div>
    );
}