import { AuditProperties } from "./auditProperties";

/**
 * Represents a condensed view of an appointment.
 *
 * @interface CondensedAppointmentView
 *
 * @property {number} id - The unique identifier for the appointment.
 * @property {string} petName - The name of the pet.
 * @property {string} vetName - The name of the veterinarian.
 * @property {string} ownerName - The name of the owner.
 * @property {AppointmentStatus} status - The current status of the appointment.
 * @property {string} date - The date and time of the appointment.
 * @property {string} reason - The reason for the appointment.
 */
export type CondensedAppointmentView = Pick<
  Appointment,
  "id" | "petName" | "vetName" | "ownerName" | "status" | "date" | "reason"
>;

/**
 * Represents an appointment with audit properties and form details.
 *
 * @interface Appointment
 * @extends AuditProperties
 * @extends AppointmentForm
 *
 * @property {number} id - The unique identifier for the appointment.
 * @property {AppointmentStatus} status - The current status of the appointment.
 */
export interface Appointment extends AuditProperties, AppointmentForm {
  id: number;
  status: AppointmentStatus;
}

/**
 * Represents the form details for creating an appointment.
 *
 * @interface AppointmentForm
 *
 * @property {number} petId - The unique identifier for the pet.
 * @property {number} vetId - The unique identifier for the veterinarian.
 * @property {number} ownerId - The unique identifier for the owner.
 * @property {string} date - The date and time of the appointment.
 * @property {string} reason - The reason for the appointment.
 * @property {string} [notes] - Additional notes for the appointment.
 */
export interface AppointmentForm {
  petId: number;
  petName: string;
  petImageURL: string;
  vetId: number;
  vetName: string;
  ownerId: number;
  ownerName: string;
  date: string;
  reason: string;
  notes?: AppointmentNote[];
}

/**
 * Enum representing the status of an appointment.
 *
 * @enum {string}
 * @property {string} PENDING - The appointment is pending vet approval.
 * @property {string} APPROVED - The appointment has been approved.
 * @property {string} CANCELLED - The appointment has been cancelled.
 * @property {string} COMPLETED - The appointment has been completed.
 */
export enum AppointmentStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
}

/**
 * Represents a note for an appointment.
 *
 * @interface AppointmentNote
 * @extends AuditProperties
 *
 * @property {number} id - The unique identifier for the note.
 * @property {number} appointmentId - The unique identifier for the appointment.
 * @property {string} note - The note content.
 */
export interface AppointmentNote extends AuditProperties {
  id: number;
  index: number;
  appointmentId: number;
  createdBy: string;
  createdById: number;
  modifiedBy?: string;
  modifiedById?: number;
  note: string;
}

export interface AppointmentNoteForm {
  note: string;
}
