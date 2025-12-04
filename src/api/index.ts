export const api = (host: string = "https://back.agentprobusiness.com/api/v1") => ({
  get: async (
    url: string,
    params?: Record<string, any>,
    headers?: Record<string, string>
  ) => {
    try {
      const query = new URLSearchParams(params).toString();
      const queryString = query ? "?" + query : "";
      const res = await fetch(host + url + queryString, {
        method: "GET",
        headers: { ...headers },
      });
      const data = await res.json();
      console.log({ data });
      if (!res.ok) {
        throw new Error(`Ошибка: ${res.status} ${res.statusText}`);
      }
      return data;
    } catch (error) {
      console.error("Ошибка при выполнении GET-запроса:", error);
      throw error;
    }
  },
});
