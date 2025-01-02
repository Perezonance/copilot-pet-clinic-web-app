import * as api from "../../utils/callAPI";
import { Veterinarian } from "../../models/veterinarian";

export async function getVeterinarianById(
  vetId: number
): Promise<Veterinarian | undefined> {
  let vet: Veterinarian | undefined = undefined;
  try {
    await api.callAPI(api.GET, `/api/v1/veterinarians/${vetId}`, (data) => {
      vet = data;
    });
  } catch (error) {
    console.error(`Failed to get veterinarian by ID: ${error}`);
  }

  return vet;
}
