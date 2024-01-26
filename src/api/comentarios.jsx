export const API_URL = "https://dogsapi.origamid.dev/json";

export function COMENTARIO_POST(id, comentario, token) {
  return {
    url: `${API_URL}/api/comment/${id}`,
    options: {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: comentario,
      }),
    },
  };
}
