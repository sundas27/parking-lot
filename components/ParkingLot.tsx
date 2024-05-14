// ParkingLotComponent.tsx
import React, { useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import VehicleCard from './VehicleCard';

const ParkingLotComponent: React.FC = () => {
  // State to manage parked vehicles
  const [parkedVehicles, setParkedVehicles] = useState<string[]>([]);

  // Function to handle parking a vehicle
  const parkVehicle = () => {
    // Simulate parking a vehicle (add its ID to the list of parked vehicles)
    const vehicleId = `Vehicle ${parkedVehicles.length + 1}`;
    setParkedVehicles([...parkedVehicles, vehicleId]);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={parkVehicle}>
          Park Vehicle
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom>
          Parked Vehicles
        </Typography>
        {parkedVehicles.length > 0 ? (
          parkedVehicles.map((vehicleId, index) => (
            <Grid item key={index} xs={12}>
              <VehicleCard vehicle={{ id: vehicleId }} />
            </Grid>
          ))
        ) : (
          <Typography>No vehicles parked</Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default ParkingLotComponent;
