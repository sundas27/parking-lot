// VehicleCard.tsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface Vehicle {
  id: string;
  // Other vehicle properties
}

interface Props {
  vehicle: Vehicle;
}

const VehicleCard: React.FC<Props> = ({ vehicle }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Vehicle Details</Typography>
        <Typography>ID: {vehicle.id}</Typography>
        {/* Display other vehicle details */}
      </CardContent>
    </Card>
  );
};

export default VehicleCard;
