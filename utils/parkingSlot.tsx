import { SlotStatus } from "../definitions/parkingSlot";

export const getColorByStatus = (status: string) => {
    switch (status) {
        case SlotStatus.Available:
            return 'green';
        case SlotStatus.Occupied:
            return 'red';
        case SlotStatus.Maintenance:
            return 'orange';
        default:
            return 'black';
    }
};