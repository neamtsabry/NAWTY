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

const AddLocation = () => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Grid container justify="center" >
                <Grid item xs={10}>
                    <h1 className={classes.marginTop}>Add Location</h1>
                </Grid>
                
                <Grid item xs={10}>
                    <FormControl fullWidth margin="normal">
                        <TextField
                            label="Location"
                            type="text"
                            variant="outlined"
                        />
                    </FormControl>
                    
                </Grid>
                <Grid item xs={10}>
                    <FormControl fullWidth margin="normal">
                        <TextField
                            label="Number of People"
                            type="number"
                            variant="outlined"
                        />
                    </FormControl>
                </Grid>
                
                <Grid item xs={10}>
                    <Button component={Link} to="/map" variant="outlined" color="primary">
                        Add
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default AddLocation;