import { BASE_URL, API_TAXONOMIES_PATH } from "./configApi";

export async function fetchTaxonomies() {
  const response = await fetch(`${BASE_URL}${API_TAXONOMIES_PATH}`,{
    cache: 'no-store',
  })
  if (!response.ok) {
    throw new Error("Ошибка запроса")
  }
  return response.json()
}
