export const API_URL = "https://dogsapi.origamid.dev/json";

export function ESTATISTICAS_GET({ token }) {
  return {
    url: `${API_URL}/api/stats`,
    options: {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
}
