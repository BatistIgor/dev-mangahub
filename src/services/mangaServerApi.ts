import { BASE_URL, API_MANGA_PATH } from "./configApi";

export async function fetchManga(queryParams?: string) {
  const response = await fetch(`${BASE_URL}${API_MANGA_PATH}/${queryParams || ""}`);
  if (!response.ok) {
    throw new Error("Ошибка запроса");
  }
  return response.json();
}

export async function fetchMangaById(id: number) {
  const response = await fetch(`${BASE_URL}${API_MANGA_PATH}/${id}`);
  if (!response.ok) {
    throw new Error("Ошибка запроса");
  }
  return response.json();
}

export async function fetchChaptersById(id: number) {
  const response = await fetch(`${BASE_URL}${API_MANGA_PATH}/${id}/chapters`);
  if (!response.ok) {
    throw new Error("Ошибка запроса");
  }
  return response.json();
}

export async function fetchPagesByChapterId(Mangaid: number, chapterId: number) {
  const response = await fetch(`${BASE_URL}${API_MANGA_PATH}/${Mangaid}/chapters/${chapterId}`);
  if (!response.ok) {
    throw new Error("Ошибка запроса");
  }
  return response.json();
}