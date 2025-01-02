import * as api from "../../utils/callAPI";
import { Appointment, AppointmentNoteForm } from "../../models/appointments";

export async function UpdateNote(
  appointmentId: number,
  noteIndex: number,
  note: AppointmentNoteForm
): Promise<Appointment | undefined> {
  let appointment: Appointment | undefined = undefined;
  // Make a PATCH request to the server to update a note for the appointment
  try {
    await api.callAPI(
      api.PATCH,
      `/api/v1/appointments/${appointmentId}/notes/${noteIndex}`,
      (data: any) => {
        appointment = data;
      },
      JSON.stringify(note)
    );
  } catch (error) {
    console.error(`Failed to update note for appointment: ${error}`);
  }
  return appointment;
}
