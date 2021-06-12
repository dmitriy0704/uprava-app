import React from "react";
import '../App.css';
import {Box, Container, Grid, Link, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/styles'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import FullWidthTabs from "./Content";
import message from '../images/message.png';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Button from "@material-ui/core/Button";
const useStyles = makeStyles(() => ({
    main_page: {
        backgroundColor: "#fff",
        minHeight: "100%",
        paddingTop: 0,
        paddingBottom: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: 0,
        paddingRight: 0

    },

    header: {
        backgroundColor: '#194467',
        paddingTop: 15,
        paddingRight:15,
        height: 115

    },
    title_page: {
        color: '#fff',
        textAlign:'left',

    },

    text: {
        color: "#fff",
        textAlign: "left",
        marginTop: 15,
        marginBottom: 30,
        fontSize: 18,
        lineHeight:1.2

    },
    back: {
        paddingLeft: 15,

    },
    icon: {
        color: '#fff',
        fontSize: 28,
    }
}))


const Dashboard = () => {

    const classes = useStyles()

    return (

        <Container maxWidth={'xs'} className={classes.main_page}>
            <Grid container direction={"row"} justify={"center"} alignItems={"flex-start"} className={classes.header}>
                <Grid item xs={2}>
                    <Box className={classes.back}>
                        <ArrowBackIcon className={classes.icon}/>
                    </Box>
                </Grid>
                <Grid item xs={8}>


                        <Typography variant={"h6"} component={"h6"} className={classes.title_page}>
                            УПРАВА
                        </Typography>


                        <Typography component={"p"} className={classes.text}>
                            Услуги юриста и <br/> независимого эксперта
                        </Typography>

                </Grid>
                <Grid item xs={2}>
                    <img src={message} alt="" style={{maxWidth: 23, marginBottom:3,marginRight:5}}/>
                    <InfoOutlinedIcon className={classes.icon}/>
                </Grid>
            </Grid>

            <Grid container direction={"row"} justify={"center"} alignItems={"center"}>
                <Grid item xs={12}>

                        <FullWidthTabs/>

                </Grid>
            </Grid>
        </Container>
    )
}
export default Dashboard;