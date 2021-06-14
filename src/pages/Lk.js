import React from "react";
import {Link} from "react-router-dom";
import {Box, Container, Grid, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/styles'
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import message from "../images/message.png";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FullWidthTabs from "./Content";
import {_font} from "../theme";

const useStyles = makeStyles(() => ({
    main_page: {
        backgroundColor: "#fff",
        minHeight: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        boxShadow: "0 0 2px 4px rgba(0,0,0,0.1)",
        fontFamily: _font.secondary,

    },
    header: {
        backgroundColor: '#194467',
        paddingTop: 5,
        height: "auto",
        width: "100%",
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
        color: "#fff",
        textAlign: "left",
        marginTop: 0,
        marginBottom: 20,
        fontSize: 20,
        fontFamily: _font.secondary,
        paddingLeft:24
    },
    title_box: {
        height: 120,
        marginBottom: 30,
        fontFamily: _font.secondary,
    },

    title_page: {
        color: '#fff',
        textAlign: 'left',
        paddingLeft: 24,
        fontFamily: _font.secondary,
        fontSize:30
    },
    back: {},
    icon: {
        color: '#fff',
        fontSize: 28,
        marginLeft: 10,
        marginRight:7
    }
}))

const Lk = () => {
    const classes = useStyles()
    return (
        <>
            <Box className={classes.main_page}>
                <Box className={classes.header}>
                    <Grid container direction={"row"} justify={"space-between"} alignItems={"flex-start"}
                          className={classes.header}>
                        <Grid item xs={4}>
                            <Typography variant={"h6"} component={"h6"} className={classes.title_page}>
                                УПРАВА
                            </Typography>
                        </Grid>
                        <Grid item xs={5}>
                            <img src={message} alt="" style={{maxWidth: 23, marginBottom: 3, marginRight: 7}}/>
                            <InfoOutlinedIcon className={classes.icon}/>
                            <Link to="/"><ExitToAppIcon className={classes.icon}/></Link>
                        </Grid>
                    </Grid>
                    <Grid container direction={"row"} justify={"center"} alignItems={"center"}>
                        <Grid item xs={12}>
                            <Typography component={"p"} className={classes.text}>
                                Услуги юриста и <br/> независимого эксперта
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction={"row"} justify={"center"} alignItems={"center"}>
                        <Grid item xs={12}>
                            <FullWidthTabs/>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default Lk;