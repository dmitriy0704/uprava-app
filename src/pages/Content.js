import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
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

function TabPanel(props) {
    const { children, value, index, ...other } = props;



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
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    panel: {
        backgroundColor: "#fff",
        textAlign:"left",
        paddingLeft: 15,
        paddingRight: 15

    },
    select:{
        color: '#194467',
        textDecoration:'none',
        fontSize:18,
        display:"block",
        marginBottom:10
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
                <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example" centered>
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


                <Grid container direction={"row"} justify={"flex-start"} alignItems={"flex-start"}>
                    <Grid item xs={12} style={{marginBottom:15}}>
                        Выберите услугу
                    </Grid>
                    <Grid item xs={12}>
                        <Link to="/UslugaYurista"  className={classes.select}><img src={point} alt="" style={{maxWidth:7,marginRight:5}}/>Услуги юриста</Link>
                    </Grid>
                    <Grid item xs={12}>
                        <Link to="/UslugaYurista" className={classes.select}><img src={point} alt="" style={{maxWidth:7,marginRight:5}}/>Услуги назависимого эксперта</Link>
                    </Grid>
                </Grid>





            </TabPanel>
            <TabPanel value={value} index="two" className={classes.panel}>
                Бонусы
            </TabPanel>
            <TabPanel value={value} index="three" className={classes.panel}>
                Отчеты
            </TabPanel>
        </div>
    );
}