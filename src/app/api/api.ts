export const baseUrl = "http://localhost:3000";

export async function makeRequest(request: Request) {
  const sendTimestamp = new Date().toLocaleString();

  console.log(
    `REQUEST -------------------------------------------------\n` +
      `[${sendTimestamp}] ${request.method} ${request.url}`
  );

  try {
    const response = await fetch(request);
    const responseTimestamp = new Date().toLocaleString();
    const responseJson = await response.json();

    console.log(
      `RESPONSE -------------------------------------------------\n` +
        `[${responseTimestamp}] ${response.status} ${
          response.url
        }: ${JSON.stringify(responseJson)}`
    );
    return responseJson;
  } catch (exception) {
    const errorTimestamp = new Date().toLocaleString();
    console.log(`[${errorTimestamp}] ${request.url}: ${exception}`);
    return { error: exception };
  }
}
