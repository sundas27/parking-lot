// ParkingLotPage.tsx
import React from 'react';
import { Container, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import ParkingLotComponent from '../components/ParkingLot';

const ParkingLotPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Typography variant="h4" gutterBottom>
          Parking Lot Page
        </Typography>
        <ParkingLotComponent />
      </Container>
    </>
  );
};

export default ParkingLotPage;
