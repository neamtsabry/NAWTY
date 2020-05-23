import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, FormControl, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        height: "92.5vh"
    },
    marginTop:{
        marginTop: "10rem"
    }
});

const Home = () => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Grid container justify="center" >
                <Grid item xs={10}>
                    <h1 className={classes.marginTop}>Weclome</h1>
                </Grid>
                
                <Grid item xs={10}>
                    <FormControl fullWidth margin="normal">
                        <TextField
                            label="Email"
                            type="Email"
                            variant="outlined"
                        />
                    </FormControl>
                    
                </Grid>
                <Grid item xs={10}>
                    <FormControl fullWidth margin="normal">
                        <TextField
                            label="Password"
                            type="password"
                            variant="outlined"
                        />
                    </FormControl>
                </Grid>
                
                <Grid item xs={10}>
                    <Button component={Link} to="/map" variant="outlined" color="primary">
                        Login
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;