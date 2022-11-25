import { API } from '../../../lib/interfaces';
import { get, post } from './api';

export async function getCategories(): Promise<
  API.Response<API.Models.Category>
> {
  const res = await get(`/categories/`, false);
  return res.json();
}

export async function editCategory(
  id: string,
  data: API.Models.Category,
): Promise<API.Response<API.Models.Category>> {
  const res = await get(`/categories/${id}`, false, data);
  return res.json();
}

export async function createCategory(
  id: string,
  data: API.Models.Category,
): Promise<API.Response<API.Models.Category>> {
  const res = await post(`/categories/${id}`, false, data);
  return res.json();
}

export async function deleteCategory(
  id: string,
): Promise<API.Response<API.Models.Category>> {
  const res = await get(`/categories/${id}`, false);
  return res.json();
}
