import React from "react";
// import '../App.css';
import {Link} from "react-router-dom";
import {Box, Container, Grid, TextField, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/styles'
import Button from "@material-ui/core/Button";

import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import MaterialInput from "@material-ui/core/Input";
import InputMask from "react-input-mask";
import {_font} from "../theme";

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
        fontFamily: _font.secondary,
        color: "#194467",
        textAlign: "center",
        fontSize: 20,

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
    title_page: {
        position: 'absolute',
        top: 15,
        left: 15,
        color: '#9D9E9E',
        width: "100%",
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


const RegName = () => {
    const classes = useStyles()
    return (
        <Box maxWidth={'xs'} className={classes.main_page}>
            <Grid container direction={"row"} justify={"center"} alignItems={"center"}>
                <Grid item xs={12}>
                    <Box className={classes.title_page}>
                        <Grid container direction={"row"} justify={"space-between"} alignItems={"center"}>
                            <Grid item xs={4}></Grid>
                            <Grid item xs={2}>
                                <Box mr={2}>
                                    <HelpOutlineOutlinedIcon/>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>

            <Grid container direction={"row"} justify={"center"} alignItems={"center"}>
                <Grid item xs={12}>
                    <Box className={classes.title_box}>
                        <Box className={classes.title_big_blue}>
                            <Typography variant={"h5"} component={"h5"}>
                                Ваше имя
                            </Typography>
                        </Box>
                    </Box>
                    <Box >
                        <InputMask
                            mask=""
                            variant="outlined">{(inputProps) =>
                            <MaterialInput {...inputProps}
                                           type="text" disableUnderline
                                           variant="outlined"
                                           color={"primary"}/>}
                        </InputMask>
                    </Box>

                    <Box>
                        <Link to="/Lk" className={classes.a}>
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

export default RegName;