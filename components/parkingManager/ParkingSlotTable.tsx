import React, { useState } from 'react';
import DataTable from '../common/DataTable';
import ParkingSlotRow from './ParkingSlotRow';
import { ParkingSlotTableHeaders } from '../../definitions/parkingSlot';

interface ParkingSlot {
  id: string;
  status: string;
  vehicleName?: string;
  vehicleId?: string;
  model?: string;
  ownerName?: string;
  color?: string;
}

interface Props {
  slots: ParkingSlot[];
  onToggleMaintenance: (slotId: string) => void;
}

const ParkingSlotTable: React.FC<Props> = ({ slots, onToggleMaintenance }) => {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

  const handleRowExpand = (slotId: string) => {
    setExpandedRows(prevExpandedRows => {
      const newExpandedRows = new Set(prevExpandedRows);
      if (prevExpandedRows.has(slotId)) {
        newExpandedRows.delete(slotId);
      } else {
        newExpandedRows.add(slotId);
      }
      return newExpandedRows;
    });
  };

  return (
    <DataTable
      columns={ParkingSlotTableHeaders}
      data={slots}
      renderRow={(slot) => (
        <ParkingSlotRow
          key={slot.id}
          slot={slot}
          isExpanded={expandedRows.has(slot.id)}
          onToggleExpand={handleRowExpand}
          onToggleMaintenance={onToggleMaintenance}
        />
      )}
    />
  );
};

export default ParkingSlotTable;