import Admin from "@/components/dynamic/form/Admin";
import Committee from "@/components/dynamic/form/Committee";
import Feedback from "@/components/dynamic/form/Feedback";
import Interest from "@/components/dynamic/form/Interest";
import Judge from "@/components/dynamic/form/Judge";
import Mentor from "@/components/dynamic/form/Mentor";
import Participant from "@/components/dynamic/form/Participant";
import Sponsor from "@/components/dynamic/form/Sponsor";
import Volunteer from "@/components/dynamic/form/Volunteer";
import ProtectedPage from "@/components/dynamic/ProtectedPage";
import Fault from "@/utils/error";

const Page = ({ params }) => {
  const components = {
    admin: <Admin />,
    committee: <Committee />,
    feedback: <Feedback />,
    interest: <Interest />,
    judge: <Judge />,
    mentor: <Mentor />,
    participant: <Participant />,
    sponsor: <Sponsor />,
    volunteer: <Volunteer />,
  };

  const capitalizeFirstLetter = (word) => {
    return word[0].toUpperCase() + word.slice(1);
  };

  if (components.hasOwnProperty(params.type)) {
    return (
      <ProtectedPage
        title={`Form | ${capitalizeFirstLetter(params.type)}`}
        restrictions={{}}
        customStyle={true}
      >
        {components[params.type]}
      </ProtectedPage>
    );
  } else {
    throw new Fault(
      404,
      "Page Not Found",
      "The page you are looking for does not seem to exist"
    );
  }
};

export default Page;
