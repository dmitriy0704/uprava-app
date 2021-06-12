import React from "react";
// import '../App.css';
import {Link} from "react-router-dom";
import {Box, Container, Grid, TextField, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/styles'
import Button from "@material-ui/core/Button";


const useStyles = makeStyles(() => ({
    main_page: {
        backgroundColor: "#fff",
        minHeight: "100%",
        paddingTop: 120,
        paddingBottom: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative"

    },

    title_big_blue: {

        color: "#194467",
        textAlign: "center",
        fontSize: 20,

    },
    title_blue: {
        color: "#194467",
        textAlign: "center",
        fontSize: 20,
    },

    text: {
        color: "#194467",
        textAlign: "center",
        marginTop: 0,
        marginBottom: 30,
        fontSize: 18,
    },
    title_box: {
        height: 120,
        marginBottom: 30
    },
    title_page: {
        position: 'absolute',
        top: 15,
        left: 15,
        color: '#9D9E9E',
        width: "100%",

    }
}))


const RegSMS = () => {

    const classes = useStyles()

    return (

        <Container maxWidth={'xs'} className={classes.main_page}>
            <Grid container direction={"row"} justify={"center"} alignItems={"center"}>
                <Grid item xs={12}>
                    <Box className={classes.title_page}>

                        <Grid container direction={"row"} justify={"space-between"} alignItems={"center"}>
                            <Grid item xs={4}>
                                <Box>
                                    Вход с паролем
                                </Box>
                            </Grid>
                            <Grid item xs={2}>
                                <Box mr={2}>
                                    60
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
                                Введите код из СМС
                            </Typography>
                        </Box>
                    </Box>
                    <Box className={'reg_input'}>
                        <TextField
                            label="Код из СМС"
                            variant="outlined"
                            color={"primary"}
                            fullWidth={true}
                        />
                    </Box>
                    <Box>
                        <Link to="/RegPass">
                            <Button variant="contained" color="primary">
                                Даллее
                            </Button>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Container>

    )

}

export default RegSMS;