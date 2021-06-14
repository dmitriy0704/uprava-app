import React from "react";
// import '../App.css';
import {Link} from "react-router-dom";
import {Box, Container, Grid, InputAdornment, TextField, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/styles'
import Button from "@material-ui/core/Button";
import InputMask from 'react-input-mask';
import MaterialInput from '@material-ui/core/Input';
import rus from "../images/rus.png"
import {_font} from "../theme";
import {AccountCircle} from "@material-ui/icons";

const useStyles = makeStyles(() => ({
    main_page: {
        backgroundColor: "#fff",
        minHeight: "100%",


        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: _font.secondary,

    },

    title_big_blue: {
        color: "#194467",
        textAlign: "center",
        fontSize: 20,
        fontFamily: _font.secondary,
    },
    title_blue: {
        color: "#194467",
        textAlign: "center",
        fontSize: 20,
        fontFamily: _font.secondary,
    },

    text: {
        color: "#194467",
        textAlign: "center",
        marginTop: 0,
        marginBottom: 30,
        fontSize: 18,
        fontFamily: _font.secondary,
    },

    title_box: {
        height: 120,
        marginBottom: 30,
        fontFamily: _font.secondary,
    },

    reg_input: {
        position: "relative",
        fontFamily: _font.secondary,
    },

    rus: {
        position: "absolute",
        top: 5,
        left: 10,
        maxWidth: 30,
        fontFamily: _font.secondary,
    },
    a:{
        textDecoration:"none",
        '&$focused': {
            textDecoration:"none",
        },
        '&$active': {
            textDecoration:"none",
        },
    }
}))


const RegPhone = () => {

    const classes = useStyles()
    return (
        <Box maxWidth={'xs'} className={classes.main_page}>
            <Grid container direction={"row"} justify={"center"} alignItems={"center"}>
                <Grid item xs={12}>
                    <Box className={classes.title_box}>
                        <Box className={classes.title_big_blue}>
                            <Typography variant={"h5"} component={"h5"}>
                                Номер телефона
                            </Typography>
                        </Box>
                        <Box className={classes.title_blue}>
                            <Typography component={"p"} className={classes.text}>
                                Введите свой номер для входа <br/>
                                или регистрации
                            </Typography>
                        </Box>
                    </Box>
                    <Box className={classes.reg_input}>
                        {/*<img src={rus} alt="" className={classes.rus}/>*/}
                        <InputMask mask="+7 (999) 999-99-99" variant="outlined">{(inputProps) =>
                            <MaterialInput {...inputProps} type="tel" disableUnderline label="Телефон"
                                           variant="outlined" color={"primary"}
                                           startAdornment={
                                               <InputAdornment position="start">
                                                   <img src={rus} alt="" className={classes.rus}/>
                                               </InputAdornment>
                                           }

                            />}</InputMask>
                    </Box>
                    <Box>
                        <Link to="/RegSMS" className={classes.a}>
                            <Button variant="contained" color="primary">
                                Даллее
                            </Button>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
export default RegPhone;