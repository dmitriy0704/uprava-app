import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import UslugaYurista from "./uslugi/UslugaYurista";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {Grid} from "@material-ui/core";
import point from "../images/point.png";
import {_font} from "../theme";
import Bonus from "../components/Bonus";
import Actions1 from "../components/Actions1";
import Actions3 from "../components/Actions3";
import Actions2 from "../components/Actions2";

function TabPanel(props) {
    const {children, value, index, ...other} = props;


    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`wrapped-tabpanel-${index}`}
            aria-labelledby={`wrapped-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `wrapped-tab-${index}`,
        'aria-controls': `wrapped-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {},
    panel: {
        backgroundColor: "#fff",
        textAlign: "left",
        paddingLeft: 0,
        paddingRight: 0,
        '&>div': {
            padding: 0
        },
    },
    select: {
        color: '#194467',
        textDecoration: 'none',
        fontSize: 23,
        display: "block",
        marginBottom: 10,
        fontFamily: _font.secondary,
    },
    line: {
        display: "block",

        color: '#194467',
        fontSize: 18,
        borderBottom: "5px solid #EBECEC",
        paddingTop: 15,
        paddingBottom: 5,
        paddingLeft: 16
    },
    title_page: {
        fontSize: 18,
        color: '#9D9E9E',
        fontFamily: _font.secondary,
    },
    line_content: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    line_text: {},
    line_btn: {},
    text_grey: {
        color: "#B2B3B3",
        fontFamily: _font.secondary,
        fontSize: 16,
        textAlign: "left",
        marginLeft: 0,
        lineHeight: 1.1,
        marginTop: 5,
        marginBottom: 5
    },
    action: {
        border: "3px solid #194467",
        borderRadius: 5,
        marginTop: 12,
        marginLeft: 10,
        marginRight: 10,
        padding: 10
    },
    action_label: {
        color: '#194467',
        fontFamily: _font.secondary,
        fontSize: 22
    },
    action_text: {
        color: "#B2B3B3",
        fontSize: 17,
        fontFamily: _font.secondary,
        lineHeight: 1.1
    },
    title_min: {
        color: '#194467',
        fontFamily: _font.secondary,
        fontSize: 20
    },
    digit: {
        color: '#194467',
        fontFamily: _font.secondary,
        fontSize: 25,
        textAlign:"right",
        paddingRight:16

    }


}));

export default function TabsWrappedLabel() {
    const classes = useStyles();
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example" variant="fullWidth">
                    <Tab
                        value="one"
                        label="Заработать"
                        wrapped
                        {...a11yProps('one')}
                    />
                    <Tab value="two" label="Бонусы" {...a11yProps('two')} />
                    <Tab value="three" label="Отчеты" {...a11yProps('three')} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index="one" className={classes.panel}>
                <span className={classes.line}>
                    Выберите услугу
                </span>
                <span className={classes.line}>
                    <Link to="/UslugaYurista" className={classes.select}><img src={point} alt=""
                                                                              style={{maxWidth: 7, marginRight: 5}}/>Услуги юриста</Link>
                </span>
                <span className={classes.line}>
                    <Link to="/UslugaYurista" className={classes.select}><img src={point} alt=""
                                                                              style={{maxWidth: 7, marginRight: 5}}/>Услуги Независимого эксперта</Link>
                </span>
            </TabPanel>
            <TabPanel value={value} index="two" className={classes.panel}>
                <Bonus/>
                <span className={classes.text_grey}>
                            Акции и скидки
                </span>
                <Actions1/>
                <Actions2/>
                <Actions3/>
            </TabPanel>
            <TabPanel value={value} index="three" className={classes.panel}>
                <span className={classes.line}>
                    <Grid container direction={"row"} justify={"flex-start"} alignItems={"flex-start"}>
                        <Grid item xs={10}>
                            <Box className={classes.title_min}>Отправлено рекомендаций</Box>
                            <Box className={classes.text_grey}>Всего</Box>
                        </Grid>
                        <Grid item xs={2}>
                            <Box className={classes.digit}>120</Box>
                        </Grid>
                    </Grid>
                </span>
                <span className={classes.line}>
                    <Grid container direction={"row"} justify={"flex-start"} alignItems={"flex-start"}>
                        <Grid item xs={10}>
                            <Box className={classes.title_min}>Без перехода</Box>
                            <Box className={classes.text_grey}>По ссылке не перешли</Box>
                        </Grid>
                        <Grid item xs={2}>
                            <Box className={classes.digit}>40</Box>
                        </Grid>
                    </Grid>
                </span>
                <span className={classes.line}>
                    <Grid container direction={"row"} justify={"flex-start"} alignItems={"flex-start"}>
                        <Grid item xs={10}>
                            <Box className={classes.title_min}>Ранее уже рекомендованные</Box>
                            <Box className={classes.text_grey}>Кто-то уже рекомендовал</Box>
                        </Grid>
                        <Grid item xs={2}>
                           <Box className={classes.digit}>15</Box>
                        </Grid>
                    </Grid>
                </span>
                <span className={classes.line}>
                    <Grid container direction={"row"} justify={"flex-start"} alignItems={"flex-start"}>
                        <Grid item xs={10}>
                            <Box className={classes.title_min}>Актуальные рекомендации</Box>
                            <Box className={classes.text_grey}>В обработке</Box>
                        </Grid>
                        <Grid item xs={2}>
                            <Box className={classes.digit}>65</Box>
                        </Grid>
                    </Grid>
                </span>
                <span className={classes.line}>
                    <Grid container direction={"row"} justify={"flex-start"} alignItems={"flex-start"}>
                        <Grid item xs={10}>
                            <Box className={classes.title_min}>Достигнуто цели</Box>
                            <Box className={classes.text_grey}>Согласно правилам</Box>
                        </Grid>
                        <Grid item xs={2}>
                            <Box className={classes.digit}>5</Box>
                        </Grid>
                    </Grid>
                </span>
            </TabPanel>
        </div>
    );
}