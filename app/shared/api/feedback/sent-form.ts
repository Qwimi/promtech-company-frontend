import type { FeedbackForm } from '~/shared/types';
import { axiosInstance } from '../axios-instance'

export async function apiSentForm(formData: FeedbackForm): Promise<void> {
    return await axiosInstance.post('/v1/Files/callback', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
}