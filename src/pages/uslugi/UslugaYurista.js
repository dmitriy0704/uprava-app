import React from "react";
import {makeStyles} from '@material-ui/styles'
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {Container, Grid} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Avatar from '@material-ui/core/Avatar';
import {Link} from "react-router-dom";
import point from "../../images/point.png";
import AvtoYurist from "./AvtoYurist";


const useStyles = makeStyles(() => ({
    main_page: {
        backgroundColor: "#fff",
        minHeight: 550,
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
        height: 115,
        paddingRight: 15,

    },
    title_page: {
        color: '#fff',
        textAlign: 'left',

    },

    text: {
        color: "#fff",
        textAlign: "left",
        marginTop: 15,
        marginBottom: 30,
        fontSize: 18,
        lineHeight: 1.2,
        paddingLeft: 15,
        paddingRight: 15,
    },

    lbl: {
        color: "#fff",
        textAlign: "center",
        marginTop: 15,
        marginBottom: 15,
        fontSize: 18,
        lineHeight: 1.2,
        paddingLeft: 15,
        paddingRight: 15,

    },
    back: {
        paddingLeft: 15,

    },
    icon: {
        color: '#fff',
        fontSize: 28,

    },
    avatar: {
        marginTop: 15,

    },
    title_item: {
        textAlign: 'left',
        marginTop: 15,
        fontWeight: 800,
        fontSize: 16,
    },
    text_item: {
        textAlign: 'left',
        color: '#',
        fontWeight: 200,
        fontSize: 14,
    },
    orange: {
        color: '#fff',
        backgroundColor: '#ff5722',
    },
    purple: {
        color: '#fff',
        backgroundColor: '#673ab7',
    },
    green:{
        color: '#fff',
        backgroundColor: 'green',
    },
    content: {
        paddingLeft: 15,
        paddingRight: 15
    },
    cash: {
        color: '#194467',
        fontSize: 14,
        paddingTop:15
    },
    select:{
        color: '#194467',
        textDecoration:'none',
        fontSize:16
    }

}))


const UslugaYurista = () => {

    const classes = useStyles()

    return (

        <Container maxWidth={'xs'} className={classes.main_page}>
            <Grid container direction={"row"} justify={"flex-start"} alignItems={"flex-start"}
                  className={classes.header}>
                <Grid ite xs={12}>
                    <Grid container direction={"row"} justify={"flex-start"} alignItems={"flex-start"}>
                        <Grid item xs={2}>
                            <Box className={classes.back}>
                                <ArrowBackIcon className={classes.icon}/>
                            </Box>
                        </Grid>
                        <Grid item xs={8}>
                            <Box>
                                <Typography variant={"h6"} component={"h6"} className={classes.title_page}>
                                    УПРАВА
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid ite xs={12}>
                    <Grid container direction={"row"} justify={"space-between"} alignItems={"flex-start"}>
                        <Grid item xs={4}>
                            <Box className={classes.lbl}>
                                Вид
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box className={classes.lbl}>
                                Выгода
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container direction={"row"} justify={"center"} alignItems={"center"} className={classes.content}>
                <Grid item xs={12}>
                    <Grid container direction={"row"} justify={"space-between"} alignItems={"flex-start"}>
                        <Grid item xs={2}>
                            <Box className={classes.avatar}>
                                <Avatar className={classes.orange}>Ба</Avatar>
                            </Box>
                        </Grid>
                        <Grid item xs={8}>
                            <Box className={classes.title_item}>
                                Банкротство физических лиц
                            </Box>
                            <Box className={classes.text_item}>
                                Плюс скидки на телефоны, строительные работы, рекламы и др.
                            </Box>
                        </Grid>
                        <Grid item xs={2}>
                            <Box className={classes.cash}>
                                7000 р.
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container direction={"row"} justify={"space-between"} alignItems={"flex-start"}>
                        <Grid item xs={2}>
                            <Box className={classes.avatar}>
                                <Avatar className={classes.purple}>Ав</Avatar>
                            </Box>
                        </Grid>
                        <Grid item xs={8}>
                            <Box className={classes.title_item}>
                                <Link to="/AvtoYurist"  className={classes.select}>АвтоЮрист</Link>
                            </Box>
                            <Box className={classes.text_item}>
                                Плюс скидки на телефоны, строительные работы, рекламы и др.
                            </Box>
                        </Grid>
                        <Grid item xs={2}>
                            <Box className={classes.cash}>
                                7000 р.
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container direction={"row"} justify={"space-between"} alignItems={"flex-start"}>
                        <Grid item xs={2}>
                            <Box className={classes.avatar}>
                                <Avatar className={classes.orange}>Се</Avatar>
                            </Box>
                        </Grid>
                        <Grid item xs={8}>
                            <Box className={classes.title_item}>
                               Семейные споры
                            </Box>
                            <Box className={classes.text_item}>
                                Плюс скидки на телефоны, строительные работы, рекламы и др.
                            </Box>
                        </Grid>
                        <Grid item xs={2}>
                            <Box className={classes.cash}>
                                7000 р.
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container direction={"row"} justify={"space-between"} alignItems={"flex-start"}>
                        <Grid item xs={2}>
                            <Box className={classes.avatar}>
                                <Avatar className={classes.green}>На</Avatar>
                            </Box>
                        </Grid>
                        <Grid item xs={8}>
                            <Box className={classes.title_item}>
                                Наследственны споры
                            </Box>
                            <Box className={classes.text_item}>
                                Плюс скидки на телефоны, строительные работы, рекламы и др.
                            </Box>
                        </Grid>
                        <Grid item xs={2}>
                            <Box className={classes.cash}>
                                7000 р.
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Container>
    )
}
export default UslugaYurista;