export async function getAvailableDays(supabase, mentorId) {
  const { data, error } = await supabase
    .from('available_slots')
    .select('start_time')
    .eq('mentor_id', mentorId)
    .eq('is_booked', false)

  if (error) throw error

  // extract unique dates
  const dates = [
    ...new Set(
      data.map(slot =>
        new Date(slot.start_time).toISOString().split('T')[0]
      )
    )
  ]

  return dates
}
export async function getAvailableSlotsByDate(
  supabase,
  mentorId,
  date // '2025-12-27'
) {
  const start = `${date}T00:00:00`
  const end = `${date}T23:59:59`

  const { data, error } = await supabase
    .from('available_slots')
    .select('id, start_time, end_time')
    .eq('mentor_id', mentorId)
    .eq('is_booked', false)
    .gte('start_time', start)
    .lte('start_time', end)
    .order('start_time')

  if (error) throw error
  return data
}
export async function bookSession(
  supabase,
  slotId,
  mentorId,
  clientId
) {
  // 1. create booking
  const { data: booking, error: bookingError } =
    await supabase
      .from('bookings')
      .insert({
        avslots_id: slotId,
        mentor_id: mentorId,
        stud_id: studId,
        status: 'confirmed'
      })
      .select()
      .single()

  if (bookingError) throw bookingError

  // 2. mark slot as booked
  const { error: slotError } = await supabase
    .from('available_slots')
    .update({ is_booked: true })
    .eq('id', slotId)

  if (slotError) throw slotError

  return booking
}
export async function getMentorRatingSummary(supabase, mentorId) {
  const { data, error } = await supabase
    .from('reviews')
    .select('rating')
    .eq('mentor_id', mentorId)

  if (error) throw error

  const total = data.length
  const counts = { 1:0, 2:0, 3:0, 4:0, 5:0 }
  let sum = 0

  data.forEach(r => {
    counts[r.rating]++
    sum += r.rating
  })

  return {
    average: total ? +(sum / total).toFixed(1) : 0,
    total,
    breakdown: {
      5: counts[5],
      4: counts[4],
      3: counts[3],
      2: counts[2],
      1: counts[1]
    }
  }
}
export async function getMentorReviews(supabase, mentorId) {
  const { data, error } = await supabase
    .from('reviews')
    .select(`
      id,
      rating,
      comment,
      created_at,
      profiles (
        full_name,
        avatar_url
      )
    `)
    .eq('mentor_id', mentorId)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}
export async function sendMessage(
  supabase,
  senderId,
  receiverId,
  content
) {
  const { data, error } = await supabase
    .from('messages')
    .insert({
      stud_id: senderId,
      mentor_id: receiverId,
      content
    })
    .select()
    .single()

  if (error) throw error
  return data
}
export async function getMessages(
  supabase,
  userA,
  userB
) {
  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .or(
      `and(stud_id.eq.${userA},mentor_id.eq.${userB}),
       and(stud_id.eq.${userB},mentor_id.eq.${userA})`
    )
    .order('created_at')

  if (error) throw error
  return data
}
