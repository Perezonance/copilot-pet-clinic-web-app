import { Appointment, AppointmentNoteForm } from "../../models/appointments";
import * as api from "../../utils/callAPI";

export async function AddNewNote(
  appointmentId: number,
  note: AppointmentNoteForm
): Promise<Appointment | undefined> {
  let appointment: Appointment | undefined = undefined;
  // Make a POST request to the server to add a new note to the appointment
  try {
    await api.callAPI(
      api.PATCH,
      `/api/v1/appointments/${appointmentId}/notes`,
      (data) => {
        appointment = data;
      },
      JSON.stringify(note)
    );
  } catch (error) {
    console.error(`Failed to add new note to appointment: ${error}`);
  }
  return appointment;
}
