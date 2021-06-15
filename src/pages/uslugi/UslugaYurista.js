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
import message from "../../images/message.png";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import font from "../../theme/font";
import {_font} from "../../theme";


const useStyles = makeStyles(() => ({
    main_page: {
        backgroundColor: "#fff",
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: 0,
        paddingRight: 0,
        border:"1px solid #194467"
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
        fontFamily: _font.secondary,
        fontSize: 24,
        lineHeight:"28px"


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

    avatar: {
        paddingTop: 15,
        paddingRight: 10

    },

    orange: {
        color: '#fff',
        backgroundColor: '#ff5722',
    },
    purple: {
        color: '#fff',
        backgroundColor: '#673ab7',
    },
    green: {
        color: '#fff',
        backgroundColor: 'green',
    },
    content: {
        paddingLeft: 15,
        paddingRight: 15
    },
    cash: {
        color: '#194467',
        fontSize: 18,
        paddingTop: 15,
        paddingLeft:10,

    },
    select: {
        color: '#194467',
        textDecoration: 'none',
        fontSize: 16
    },
    icon: {
        color: '#fff',
        fontSize: 35,
        textAlign: "right",
        marginLeft: 7
    },
    icons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    line: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
        borderBottom: "5px solid #EBECEC",
        paddingTop: 0,
        paddingBottom: 10,

    },
    title: {},
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

}))


const UslugaYurista = () => {

    const classes = useStyles()

    return (

        <Box maxWidth={'xs'} className={classes.main_page}>
            <Grid container direction={"row"} justify={"center"} alignItems={"flex-start"}
                  className={classes.header}>
                <Grid item xs={12}>
                    <Grid container direction={"row"} justify={"space-between"} alignItems={"flex-start"}>
                        <Grid item xs={1}>
                            <Box className={classes.back}>
                                <Link to="/LK">
                                    <ArrowBackIcon className={classes.icon}/>
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={5}>
                            <Typography variant={"h6"} component={"h6"} className={classes.title_page}>
                                Услуги
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Box className={classes.icons}>
                                <Link to="/"><ExitToAppIcon className={classes.icon}/></Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
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
                    <Link to="/AvtoYurist" className={classes.select}>
                    <Box className={classes.line}>
                        <Box className={classes.avatar}>
                            <Avatar className={classes.orange}>Ба</Avatar>
                        </Box>
                        <Box className={classes.title}>
                            <Box className={classes.title_item}>
                                Банкротство физических лиц
                            </Box>
                            <Box className={classes.text_item}>
                                Плюс скидки на телефоны, строительные работы, рекламы и др.
                            </Box>
                        </Box>
                        <Box className={classes.cash}>
                            7000&nbsp;р.
                        </Box>
                    </Box>
                    </Link>
                </Grid>
                <Grid item xs={12}>
                    <Link to="/AvtoYurist" className={classes.select}>
                        <Box className={classes.line}>
                            <Box className={classes.avatar}>
                                <Avatar className={classes.purple}>Ав</Avatar>
                            </Box>
                            <Box className={classes.title}>
                                <Box className={classes.title_item}>
                                    АвтоЮрист
                                </Box>
                                <Box className={classes.text_item}>
                                    Плюс скидки на телефоны, строительные работы, рекламы и др.
                                </Box>
                            </Box>
                            <Box className={classes.cash}>
                                7000&nbsp;р.
                            </Box>
                        </Box>
                    </Link>
                </Grid>
                <Grid item xs={12}>
                    <Link to="/AvtoYurist" className={classes.select}>
                        <Box className={classes.line}>
                            <Box className={classes.avatar}>
                                <Avatar className={classes.orange}>Се</Avatar>
                            </Box>
                            <Box className={classes.title}>
                                <Box className={classes.title_item}>
                                    Семейные споры
                                </Box>
                                <Box className={classes.text_item}>
                                    Плюс скидки на телефоны, строительные работы, рекламы и др.
                                </Box>
                            </Box>
                            <Box className={classes.cash}>
                                7000&nbsp;р.
                            </Box>
                        </Box>
                    </Link>
                </Grid>
                <Grid item xs={12}>
                    <Link to="/AvtoYurist" className={classes.select}>
                        <Box className={classes.line}>
                            <Box className={classes.avatar}>
                                <Avatar className={classes.green}>На</Avatar>
                            </Box>
                            <Box className={classes.title}>
                                <Box className={classes.title_item}>
                                    Наследственные споры
                                </Box>
                                <Box className={classes.text_item}>
                                    Плюс скидки на телефоны, строительные работы, рекламы и др.
                                </Box>
                            </Box>
                            <Box className={classes.cash}>
                                7000&nbsp;р.
                            </Box>
                        </Box>
                    </Link>
                </Grid>
            </Grid>
        </Box>
    )
}
export default UslugaYurista;