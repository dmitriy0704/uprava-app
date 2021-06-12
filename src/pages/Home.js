import React from "react";
import '../App.css';
import {Link} from "react-router-dom";
import {Box, Container, Grid, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/styles'
import Button from "@material-ui/core/Button";
import bg from '../images/bg.jpg';
import main_i from '../images/main_i.png';


const useStyles = makeStyles(() => ({
    main_page: {
        padding:0,
        height: "100%",
    },
    main:{
        position: 'relative',
        height: '100%',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    main_i_b: {
        textAlign: "center",
    },
    bg: {
        height: '100%',
        position: "absolute",
        top: 0,
        left: 0,
    },
    main_i: {
        maxWidth: 130,
    },
    title_big: {
        marginTop: 30,
        color: "#fff",
        textAlign: "center",
        fontSize: 24,
        fontFamily: 'Futura-Normal,serif',
    },
    title_min: {
        fontSize: 24,
        marginTop: 30,
        color: "#fff",
        textAlign: "center",
    },
    text: {
        color: "#fff",
        textAlign: "center",
        marginTop: 30,
        fontSize: 18,
    },
    link: {
        display: "block",
        color: "#fff",
    },
    linkBtn: {
        color: "#194467",
        textDecoration: 'none',
    },
    main_container: {
        position: "relative",
        zIndex: 5
    },
    height:{
        height:"100%"
    }
}))


const Home = () => {
    const classes = useStyles()
    return (
        <Container maxWidth={'xs'} className={classes.main_page}>
            <Grid container direction={"row"} justify={"center"} alignItems={"center"}  className={classes.height}>
                <Grid item xs={12} className={classes.height}>

                    <Box className={classes.main}>

                        <img src={bg} alt="" className={classes.bg}/>
                        <Box className={classes.main_container}>
                            <Box className={classes.main_i_b}>
                                <img src={main_i} alt="" className={classes.main_i}/>
                            </Box>
                            <Box className={classes.title_big}>
                                <Typography variant={"h5"} component={"h5"}>
                                    УПРАВА
                                </Typography>
                                <Typography variant={"h5"} component={"h5"}>
                                    Messenger
                                </Typography>
                            </Box>
                            <Box className={classes.title_min}>
                                <Typography variant={"h5"} component={"h5"}>
                                    Добро пожаловать!
                                </Typography>
                            </Box>
                            <Box className={classes.text}>
                                <Typography component={"p"}>
                                    Нажимая "Вход и регистрация" <br/>
                                    вы соглашаетесь с нашими<br/>
                                    <Link to="#" className={classes.link}>Условиями предоставления услуг<br/>
                                        и Политикой конфиденциальности
                                    </Link>
                                </Typography>
                            </Box>
                            <Box>
                                <Button variant="contained" color="secondary">
                                    <Link to="/RegPhone" className={classes.linkBtn}>Вход и регистрация</Link>
                                </Button>
                            </Box>
                        </Box>
                    </Box>


                </Grid>
            </Grid>
        </Container>
    )
}
export default Home;