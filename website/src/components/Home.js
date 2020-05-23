import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, FormControl, TextField, Button } from '@material-ui/core';

const Home = () => {
    return(
        <Grid container justify="center">
            <Grid item xs={10}>
                <h1>Weclome</h1>
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
                        fullWidth
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
    )
}

export default Home;