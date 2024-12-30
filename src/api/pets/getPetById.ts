import { callAPI } from "../../utils/callAPI";
import { Pet } from "../../models/pets";

export async function getPetById(petId: number): Promise<Pet | undefined> {
  let pet: Pet | undefined = undefined;
  try {
    await callAPI(`/api/v1/pets/${petId}`, (data) => {
      pet = data;
    });
  } catch (error) {
    console.error(`Failed to get pet by ID: ${error}`);
  }

  return pet;
}
