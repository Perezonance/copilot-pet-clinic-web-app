import { callAPI } from "../../utils/callAPI";
import { Veterinarian } from "../../models/veterinarian";

export async function getVeterinarianById(
  vetId: number
): Promise<Veterinarian | undefined> {
  let vet: Veterinarian | undefined = undefined;
  try {
    await callAPI(`/api/v1/veterinarians/${vetId}`, (data) => {
      vet = data;
    });
  } catch (error) {
    console.error(`Failed to get veterinarian by ID: ${error}`);
  }

  return vet;
}
