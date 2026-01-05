"use server";

import { insertBooking } from "./data-service";
import { supabase } from "./supabase";

export async function submitMentorApplication(formData) {
  const mentorData = {
    name: formData.get("name"),
    email: formData.get("email"),
    location: formData.get("location"),
    role: formData.get("role"),
    company: formData.get("company"),
    rate: formData.get("rate"),
    bio: formData.get("bio"),
  };

  // Validation
  if (
    !mentorData.name ||
    !mentorData.email ||
    !mentorData.location ||
    !mentorData.role ||
    !mentorData.company ||
    !mentorData.rate ||
    !mentorData.bio
  ) {
    return { success: false, error: "All fields are required." };
  }

  const { error } = await supabase
    .from("mentor_applications")
    .insert(mentorData);

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}

export async function bookSession(booking, id) {
  if (!booking.session || !booking.day || !booking.time) {
    return { error: "All booking details are required." };
  }

  await insertBooking({
    mentor_id: id,
    session: booking.session,
    day: booking.day,
    time: booking.time,
    message: booking.message,
  });

  return { success: true };
}
