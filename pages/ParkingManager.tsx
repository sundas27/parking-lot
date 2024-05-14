// ParkingManagerPage.tsx
import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import ParkingSlotTable from '../components/ParkingSlotTable';

interface ParkingSlot {
  id: string;
  status: 'available' | 'occupied' | 'maintenance';
  vehicleName?: string;
  vehicleId?: string;
}

const ParkingManagerPage: React.FC = () => {
  // Mock data for parking slots
  const [parkingSlots, setParkingSlots] = useState<ParkingSlot[]>([
    { id: '1', status: 'available', vehicleName: 'Civic' },
    { id: '2', status: 'occupied', vehicleName: 'Prius', vehicleId: 'ABC123' },
    { id: '3', status: 'maintenance', vehicleName: 'Cultus' },
  ]);

  // Function to toggle maintenance status of a parking slot
  const toggleMaintenance = (slotId: string) => {
    setParkingSlots(prevSlots =>
      prevSlots.map(slot =>
        slot.id === slotId ? { ...slot, status: slot.status === 'maintenance' ? 'available' : 'maintenance' } : slot
      )
    );
  };

  return (
    <>
      <Navbar />
      <Container>
        <Typography variant="h4" gutterBottom>
          Parking Manager Page
        </Typography>
        <ParkingSlotTable slots={parkingSlots} onToggleMaintenance={toggleMaintenance} />
      </Container>
    </>
  );
};

export default ParkingManagerPage;
