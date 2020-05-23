import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, FilledInput, InputAdornment, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
    root: {
        height: "89vh"
    },
    marginTop:{
        marginTop: "10rem"
    }
});

const SearchBar = () => {
    const classes = useStyles();

    return(
        <FormControl className={classes.root} fullWidth margin="normal">
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
    )
}

export default SearchBar;