// ParkingSlotCard.tsx
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

// Define the ParkingSlot interface
interface ParkingSlot {
  id: string;
  status: 'available' | 'occupied' | 'maintenance';
}

interface Props {
  slot: ParkingSlot;
  onToggleMaintenance: () => void;
}

const ParkingSlotCard: React.FC<Props> = ({ slot, onToggleMaintenance }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Parking Slot {slot.id}</Typography>
        <Typography>Status: {slot.status}</Typography>
        <Button variant="contained" onClick={onToggleMaintenance}>
          {slot.status === 'maintenance' ? 'End Maintenance' : 'Put into Maintenance'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ParkingSlotCard;
