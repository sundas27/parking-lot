// Navbar.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@mui/material';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          <Link href="/" color="inherit" underline="none">
            Parking Lot Application
          </Link>
        </Typography>
        <div style={{ marginLeft: 'auto' }}>
          <Link href="/ParkingLot" color="inherit" underline="none" style={{ marginRight: '10px' }}>
            Parking Lot
          </Link>
          <Link href="/ParkingManager" color="inherit" underline="none">
            Parking Manager
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
