import { supabase } from "./supabase";

export async function getMentors() {
  const { data, error } = await supabase
    .from("mentors")
    .select(
      `
      *,
      reviews (
        rating
      )
    `
    )
    .order("mentor_id", { ascending: true });

  if (error) {
    console.error("Error fetching mentors:", error);
    return null;
  }

  // Calc average rating for mentors
  if (data) {
    data.forEach((mentor) => {
      if (mentor.reviews && mentor.reviews.length > 0) {
        const totalRating = mentor.reviews.reduce(
          (sum, review) => sum + review.rating,
          0
        );
        mentor.average_rating = (totalRating / mentor.reviews.length).toFixed(
          1
        );
        mentor.total_reviews = mentor.reviews.length;
      } else {
        mentor.average_rating = 0;
        mentor.total_reviews = 0;
      }
    });
  }

  return data;
}

export async function getMentorsCount() {
  const { count } = await supabase
    .from("mentors")
    .select("*", { count: "exact", head: true });

  return count || 0;
}

export async function getMentor(mentorId) {
  const { data, error } = await supabase
    .from("mentors")
    .select(
      `
      *,
      reviews (
        rating
      )
    `
    )
    .eq("mentor_id", mentorId)
    .single();

  if (error) throw new Error(error.message);

  if (data.reviews && data.reviews.length > 0) {
    const totalRating = data.reviews.reduce(
      (sum, review) => sum + review.rating,
      0
    );
    data.average_rating = (totalRating / data.reviews.length).toFixed(1);
    data.total_reviews = data.reviews.length;
  } else {
    data.average_rating = 0;
    data.total_reviews = 0;
  }

  return data;
}

// for metadata
export async function getMentorName(id) {
  const { data, error } = await supabase
    .from("mentors")
    .select("full_name")
    .eq("mentor_id", id)
    .single();

  if (error) return null;
  return data.full_name.split(" ")[0];
}

export async function getAllMentorIds() {
  const { data: mentors, error } = await supabase
    .from("mentors")
    .select("mentor_id");

  if (error || !mentors) {
    console.error("Error fetching mentor IDs:", error);
    return [];
  }

  return mentors.map((mentor) => mentor.mentor_id.toString());
}

export async function insertBooking(booking) {
  const { data, error } = await supabase.from("bookings").insert([
    {
      mentor_id: booking.mentor_id,
      session: booking.session,
      day: booking.day,
      time: booking.time,
      message: booking.message || null,
    },
  ]);

  if (error) {
    console.error("Error inserting booking:", error);
    return null;
  }

  return data;
}
