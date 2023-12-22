/**
 * List of hackathon organizing team members, used in the "Meet the Team" section
 */

import placeholderImage from "@/assets/footer.svg";

const placeholderTeamMember = {
  name: "Placeholder Name",
  position: "Placeholder Position",
  image: placeholderImage,
};

const teamMembers = [...new Array(20)].map((x) => placeholderTeamMember);

export default teamMembers;
