// ParkingManagerPage.tsx
import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import Navbar from '../components/common/Navbar';
import ParkingSlotTable from '../components/parkingManager/ParkingSlotTable';
import { MockDataForParkingManager, SlotStatus } from '../definitions/parkingSlot';

interface ParkingSlot {
  id: string;
  status: string;
  vehicleName?: string;
  vehicleId?: string;
}

const ParkingManagerPage: React.FC = () => {

  const [parkingSlots, setParkingSlots] = useState<ParkingSlot[]>(MockDataForParkingManager);

  const toggleMaintenance = (slotId: string) => {
    setParkingSlots(prevSlots =>
      prevSlots.map(slot =>
        slot.id === slotId ? { ...slot, status: slot.status === SlotStatus.Maintenance ? SlotStatus.Available : SlotStatus.Maintenance } : slot
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
