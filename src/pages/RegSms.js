import React from "react";
// import '../App.css';
import {Link} from "react-router-dom";
import {Box, Container, Grid, TextField, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/styles'
import Button from "@material-ui/core/Button";


const useStyles = makeStyles(() => ({
    main_page: {
        backgroundColor: "#fff",
        minHeight: 550,
        paddingTop: 120,
        paddingBottom: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },

    title_big_blue: {
        marginTop: 30,
        color: "#194467",
        textAlign: "center",
        fontSize: 20,
        height:75,
    },
    title_blue:{
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
}))


const RegSMS = () => {

    const classes = useStyles()

    return (

        <Container maxWidth={'xs'} className={classes.main_page}>


            <Grid container direction={"column"} justify={"center"} alignItems={"center"}>
                <Grid item xs={12}>

                    <Box className={classes.title_big_blue}>
                        <Typography variant={"h5"} component={"h3"}>
                            Введите код из СМС
                        </Typography>
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