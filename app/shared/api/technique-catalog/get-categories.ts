import type {Category} from '~/shared/types';
import { axiosInstance } from '../axios-instance'

export async  function getCategories(): Promise<Category[]> {
    return await axiosInstance.get('/v1/Categories');
}