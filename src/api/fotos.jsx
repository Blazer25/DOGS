export const API_URL = "https://dogsapi.origamid.dev/json";

export function FOTO_POST(formData, token) {
  return {
    url: `${API_URL}/api/photo`,
    options: {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    },
  };
}

export function FOTOS_GET({ pagina, total, usuario }) {
  return {
    url: `${API_URL}/api/photo/?_page=${pagina}&_total=${total}&_user=${usuario}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
}

export function FOTO_GET(id) {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
}

export function FOTO_DELETE(id, token) {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
}
