import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import HomeIcon from '@material-ui/icons/Home';
import MapIcon from '@material-ui/icons/Map';
import SearchIcon from '@material-ui/icons/Search';
import AddLocationIcon from '@material-ui/icons/AddLocation';

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "#d0f2d3"
  },
});

export default function Navbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction component={Link} to="/" label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction component={Link} to="/map" label="Map" icon={<MapIcon />} />
      <BottomNavigationAction component={Link} to="/search" label="Search" icon={<SearchIcon />} />
      <BottomNavigationAction component={Link} to="/addlocation" label="Add location" icon={<AddLocationIcon />} />
    </BottomNavigation>
  );
}
