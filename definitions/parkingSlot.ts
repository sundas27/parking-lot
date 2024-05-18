
export enum SlotStatus {
  Available = 'available',
  Occupied = 'occupied',
  Maintenance = 'maintenance',
}



export const ParkingSlotTableHeaders = [
  { id: 'id', label: 'ID' },
  { id: 'vehicleName', label: 'Vehicle Name' },
  { id: 'status', label: 'Status' },
  { id: 'action', label: 'Action' },
];

export const MockDataForParkingManager = [
  { id: '1', status: 'available', vehicleName: 'Civic' },
  { id: '2', status: 'occupied', vehicleName: 'Prius', vehicleId: 'ABC123' },
  { id: '3', status: 'maintenance', vehicleName: 'Cultus' },
];