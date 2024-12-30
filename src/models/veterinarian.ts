/**
 * Represents a veterinarian with an ID and form details.
 *
 * @interface Veterinarian
 * @extends VeterinarianForm
 *
 * @property {number} id - The unique identifier for the veterinarian.
 */
export interface Veterinarian extends VeterinarianForm {
  id: number;
}

/**
 * Represents the form details for creating a veterinarian.
 *
 * @interface VeterinarianForm
 *
 * @property {string} name - The name of the veterinarian.
 * @property {VeterinarianSpecialty} specialty - The specialty of the veterinarian.
 */
export interface VeterinarianForm {
  name: string;
  specialties: VeterinarianSpecialty[];
}

/**
 * Enum representing the specialty of a veterinarian.
 *
 * @enum {string}
 * @property {string} GENERAL - General veterinary practice.
 * @property {string} SURGERY - Veterinary surgery.
 */
export enum VeterinarianSpecialty {
  GENERAL = "GENERAL",
  SURGERY = "SURGERY",
  DENTAL = "DENTAL",
  BEHAVIOR = "BEHAVIOR",
  ONCOLOGY = "ONCOLOGY",
}
