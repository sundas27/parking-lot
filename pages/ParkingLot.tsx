// ParkingLotPage.tsx
import React from 'react';
import { Container, Typography } from '@mui/material';
import Navbar from '../components/common/Navbar';
import ParkingLot from '../components/parkingLot/ParkingLot';

const ParkingLotPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Typography variant="h4" gutterBottom>
          Parking Lot Page
        </Typography>
        <ParkingLot />
      </Container>
    </>
  );
};

export default ParkingLotPage;
