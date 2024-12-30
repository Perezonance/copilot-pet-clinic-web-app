export const v1Prefix = "/api/v1";
export const VETERINARIANS = v1Prefix + "/veterinarians";
export const PETS = v1Prefix + "/pets";
export const APPOINTMENTS = v1Prefix + "/appointments";

export async function callAPI(endpoint: string, handler: (data: any) => void) {
  try {
    const response = await fetch(`http://localhost:3001${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
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
