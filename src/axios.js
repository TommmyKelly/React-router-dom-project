axios
  .get(`${BASE_URL}/user`, { headers: { "app-id": APP_ID } })
  .then(({ data }) => setData(data))
  .catch(console.error);
