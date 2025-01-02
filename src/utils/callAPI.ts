export const v1Prefix = "/api/v1";
export const VETERINARIANS = v1Prefix + "/veterinarians";
export const PETS = v1Prefix + "/pets";
export const APPOINTMENTS = v1Prefix + "/appointments";

export const GET = "GET";
export const POST = "POST";
export const PATCH = "PATCH";
export const DELETE = "DELETE";

export async function callAPI(
  method: string,
  endpoint: string,
  handler: (data: any) => void,
  reqBody?: string
) {
  try {
    const response = await fetch(`http://localhost:3001${endpoint}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: reqBody,
      mode: "cors",
    });
    if (response.status === 200) {
      const data = await response.json();
      handler(data);
    } else {
      console.error(
        `Recieved non 200 status code when calling API ${endpoint}`
      );
      console.error(response);
    }
  } catch (error) {
    console.error(`Failed to make call to ${endpoint}`);
  }
}
