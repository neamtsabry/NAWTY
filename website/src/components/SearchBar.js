import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia, FormControl, FilledInput, InputAdornment, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
    root: {
        height: "92vh",
        overflow: "scroll"
    },
    marginBottom:{
        marginBottom: "1.5rem"
    }
});

const SearchBar = () => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <FormControl  fullWidth margin="normal">
                <FilledInput
                    autoComplete="happy"
                    placeholder="Search for Park"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton type="submit"  aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    }
            />
            </FormControl>
            <CardMedia
                className={classes.marginBottom}
                component="img"
                height="200"
                image="https://images.unsplash.com/photo-1519331379826-f10be5486c6f"
                title="Park" />
            <CardMedia
                className={classes.marginBottom}
                component="img"
                height="200"
                image="https://images.unsplash.com/photo-1562613396-efbafc8b382e"
                title="Park" />
            <CardMedia
                className={classes.marginBottom}
                component="img"
                height="200"
                image="https://images.unsplash.com/photo-1558864255-eced94afc9ec"
                title="Park" />
            <CardMedia
                className={classes.marginBottom}
                component="img"
                height="200"
                image="https://images.unsplash.com/photo-1523849161192-3a6e717932c9"
                title="Park" />
        </div>
        
    )
}

export default SearchBar;