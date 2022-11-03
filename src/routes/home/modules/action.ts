import { ActionFunctionArgs } from 'react-router-dom';
import { deletePost } from './api';

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = Object.fromEntries(await request.formData());
  if (formData?.id && typeof formData.id === 'string') {
    deletePost(formData.id);
  }
};
