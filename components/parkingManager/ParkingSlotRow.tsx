import React from 'react';
import { TableRow, TableCell, Button, Typography, IconButton, Tooltip } from '@mui/material';
import { NotApplicable } from '../../definitions/common';
import { SlotStatus } from '../../definitions/parkingSlot';
import { capitalizeFirstLetter } from '../../utils/common';
import { getColorByStatus } from '../../utils/parkingSlot';
import CarIcon from '../icons/carIcon';

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
    slot: ParkingSlot;
    isExpanded: boolean;
    onToggleExpand: (slotId: string) => void;
    onToggleMaintenance: (slotId: string) => void;
}

const ParkingSlotRow: React.FC<Props> = ({
    slot,
    isExpanded,
    onToggleExpand,
    onToggleMaintenance,
}) => {
    return (
        <>
            <TableRow>
                <TableCell>
                    <IconButton onClick={() => onToggleExpand(slot.id)} aria-expanded={isExpanded}>
                        {isExpanded ? <span>&#9650;</span> : <span>&#9660;</span>}
                    </IconButton>
                    {slot.id}
                </TableCell>
                <TableCell>{slot.vehicleName || NotApplicable}</TableCell>
                <TableCell sx={{ color: getColorByStatus(slot.status) }}>
                    <Tooltip title={capitalizeFirstLetter(slot.status)} arrow>
                        <CarIcon />
                    </Tooltip>
                </TableCell>
                <TableCell>
                    <Button variant="contained" onClick={() => onToggleMaintenance(slot.id)}>
                        {slot.status === SlotStatus.Maintenance ? 'End Maintenance' : 'Put into Maintenance'}
                    </Button>
                </TableCell>
            </TableRow>
            {isExpanded && (
                <TableRow>
                    <TableCell colSpan={5}>
                        <Typography variant="body2">Vehicle Details:</Typography>
                        <ul>
                            <li>Model: {slot.model || NotApplicable}</li>
                            <li>Owner Name: {slot.ownerName || NotApplicable}</li>
                            <li>Color: {slot.color || NotApplicable}</li>
                        </ul>
                    </TableCell>
                </TableRow>
            )}
        </>
    );
};

export default ParkingSlotRow;