const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const API_MANGA_PATH = "/api/v1/manga";
const API_TAXONOMIES_PATH = "/api/v1/taxonomies";

const API_PUBLICK_COMMENTS_PATH = "/public-comments/";
const API_COMMENTS_PATH = "/comments/";

const API_REGISTRATION_PATH = "/auth/users/";
const API_LOGIN_PATH = "/auth/jwt/create/";  /*Получение JWT токенов (access и refresh) с использованием логина и пароля пользователя.*/
const API_REFRESH_PATH = "/auth/jwt/refresh/";  /*Обновление токена доступа с использованием refresh токена.*/
const API_LOGAUT_PATH = "/auth/jwt/logout/";  /*Выход пользователя, уничтожение текущего refresh токена.*/

export { BASE_URL, API_MANGA_PATH, API_TAXONOMIES_PATH, API_REGISTRATION_PATH, API_LOGIN_PATH, API_REFRESH_PATH, API_LOGAUT_PATH, API_COMMENTS_PATH, API_PUBLICK_COMMENTS_PATH };