import React from 'react';
import { FormControl, FilledInput, InputAdornment, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = () => {
    return(
        <FormControl fullWidth margin="normal">
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