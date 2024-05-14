import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Collapse,
  IconButton,
  Typography,
  Tooltip
} from '@mui/material';

interface ParkingSlot {
  id: string;
  status: 'available' | 'occupied' | 'maintenance';
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

const tableStyle = {
  borderCollapse: 'collapse',
  width: '100%',
  '& th, & td': {
    border: '1px solid #dddddd',
    textAlign: 'left',
    padding: '8px',
  },
  '& th': {
    backgroundColor: '#f2f2f2',
  },
  '& tr:nth-child(even)': {
    backgroundColor: '#f2f2f2',
  },
};

const ParkingSlotTable: React.FC<Props> = ({ slots, onToggleMaintenance }) => {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(() => new Set());

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
    <TableContainer component={Paper}>
      {/* <Table sx={tableStyle}> */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Vehicle Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {slots.map(slot => (
            <React.Fragment key={slot.id}>
              <TableRow>
                <TableCell>
                  <IconButton
                    onClick={() => handleRowExpand(slot.id)}
                    aria-expanded={expandedRows.has(slot.id)}
                  >
                    {expandedRows.has(slot.id) ? (
                      <span>&#9650;</span>
                    ) : (
                      <span>&#9660;</span>
                    )}
                  </IconButton>
                  {slot.id}
                </TableCell>
                <TableCell>{slot.vehicleName || 'N/A'}</TableCell>
                <TableCell sx={{ color: getColorByStatus(slot.status) }}>
                  <Tooltip title={getTooltipText(slot.status)} arrow>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-car-front" viewBox="0 0 16 16">
                      <path d="M4 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0m10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM4.862 4.276 3.906 6.19a.51.51 0 0 0 .497.731c.91-.073 2.35-.17 3.597-.17s2.688.097 3.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 10.691 4H5.309a.5.5 0 0 0-.447.276" />
                      <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM4.82 3a1.5 1.5 0 0 0-1.379.91l-.792 1.847a1.8 1.8 0 0 1-.853.904.8.8 0 0 0-.43.564L1.03 8.904a1.5 1.5 0 0 0-.03.294v.413c0 .796.62 1.448 1.408 1.484 1.555.07 3.786.155 5.592.155s4.037-.084 5.592-.155A1.48 1.48 0 0 0 15 9.611v-.413q0-.148-.03-.294l-.335-1.68a.8.8 0 0 0-.43-.563 1.8 1.8 0 0 1-.853-.904l-.792-1.848A1.5 1.5 0 0 0 11.18 3z" />
                    </svg>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  {slot.status === 'maintenance' ? (
                    <Button variant="contained" onClick={() => onToggleMaintenance(slot.id)}>
                      End Maintenance
                    </Button>
                  ) : (
                    <Button variant="contained" onClick={() => onToggleMaintenance(slot.id)}>
                      Put into Maintenance
                    </Button>
                  )}
                </TableCell>
              </TableRow>
              <Collapse in={expandedRows.has(slot.id)} timeout="auto" unmountOnExit>
                <TableRow sx={{ bgcolor: 'background.paper' }}>
                  <TableCell colSpan={6}>
                    <Typography variant="body2">Vehicle Details:</Typography>
                    <ul>
                      <li>Model: {slot.model || 'N/A'}</li>
                      <li>Owner Name: {slot.ownerName || 'N/A'}</li>
                      <li>Color: {slot.color || 'N/A'}</li>
                    </ul>
                  </TableCell>
                </TableRow>
              </Collapse>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const getColorByStatus = (status: string) => {
  switch (status) {
    case 'available':
      return 'green';
    case 'occupied':
      return 'red';
    case 'maintenance':
      return 'orange';
    default:
      return 'black';
  }
};

const getTooltipText = (status: string) => {
  switch (status) {
    case 'available':
      return 'Available';
    case 'occupied':
      return 'Occupied';
    case 'maintenance':
      return 'Maintenance';
    default:
      return 'Car';
  }
};

export default ParkingSlotTable;