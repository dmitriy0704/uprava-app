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
import Bonus from "../Component/Bonus";

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
        width: "100%",
        color: '#194467',
        fontSize: 18,
        borderBottom: "5px solid #EBECEC",
        paddingTop: 10,
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
        fontSize: 20,
        textAlign: "left",
        marginLeft: 16,
        lineHeight: 1.1,
        marginTop: 15
    },
    action: {
        border: "3px solid #194467",
        borderRadius: 5,
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        padding:10
    },
    action_label: {
        color: '#194467',
        fontFamily: _font.secondary,
        fontSize: 16
    },
    action_text: {
        color: "#B2B3B3",
        fontSize: 14,
        fontFamily: _font.secondary,
        lineHeight:1.1
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
                <Grid container direction={"row"} justify={"flex-start"} alignItems={"flex-start"}>
                    <Grid item xs={12}>
                        <Bonus/>
                    </Grid>
                </Grid>
                <Grid container direction={"row"} justify={"flex-start"} alignItems={"flex-start"}>
                    <Grid item xs={12}>
                        <Box className={classes.text_grey}>
                            Акции и скидки
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box className={classes.action}>
                            <Box className={classes.action_label}>
                                5% скидка на покупку телефона
                            </Box>
                            <Box className={classes.action_text}>
                                от компании ХмиАоми, вы можете получить скидку в самом магазине
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box className={classes.action}>
                            <Box className={classes.action_label}>
                                Бесплатная консультация юриста
                            </Box>
                            <Box className={classes.action_text}>
                                от компании ХмиАоми, вы можете получить скидку в самом магазине
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box className={classes.action}>
                            <Box className={classes.action_label}>
                                3000р на поход в Q20
                            </Box>
                            <Box className={classes.action_text}>
                                от компании ХмиАоми, вы можете получить скидку в самом магазине
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

            </TabPanel>
            <TabPanel value={value} index="three" className={classes.panel}>
                Отчеты
            </TabPanel>
        </div>
    );
}