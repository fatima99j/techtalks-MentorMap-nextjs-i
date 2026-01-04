export function filterMentors(mentors, filters) {
  let filteredMentors = mentors;
  const { search, industry, experience, skill } = filters;

  if (search) {
    const searchQuery = search.split("-").join(" ").trim().toLowerCase();
    filteredMentors = filteredMentors.filter(
      (mentor) =>
        mentor.full_name.trim().toLowerCase().includes(searchQuery) ||
        mentor.job.trim().toLowerCase().includes(searchQuery)
    );
  }

  // Filter by industry
  if (industry) {
    const industryQuery = industry.split("-").join(" ").trim().toLowerCase();
    filteredMentors = filteredMentors.filter((mentor) =>
      mentor.industry?.trim().toLowerCase().includes(industryQuery)
    );
  }

  // Filter by exp
  if (experience) {
    filteredMentors = filteredMentors.filter((mentor) => {
      const years = mentor.experience_years;
      if (experience === "5-10") return years >= 5 && years <= 10;
      if (experience === "10-15") return years >= 10 && years <= 15;
      if (experience === "15-plus") return years >= 15;

      return true;
    });
  }

  // Filter by skill
  if (skill) {
    const skillQuery = skill.trim().toLowerCase();
    filteredMentors = filteredMentors.filter((mentor) => {
      const mentorSkills =
        mentor.skills?.map((s) => s.trim().toLowerCase()) || [];
      return mentorSkills.some((mentorSkill) =>
        mentorSkill.includes(skillQuery)
      );
    });
  }

  return filteredMentors;
}
