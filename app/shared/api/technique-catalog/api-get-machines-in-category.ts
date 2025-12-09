import type {MachineCard} from '~/shared/types';
import {axiosInstance} from '~/shared/api/axios-instance';

export async function apiGetMachinesInCategory(id: string): Promise<MachineCard[]> {
    return await axiosInstance.get('/v1/Categories/' + id);
}