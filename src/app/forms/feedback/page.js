import Feedback from "@/components/forms/Feedback";
import ProtectedPage from "@/components/ProtectedPage";

const Page = () => {
  return (
    <ProtectedPage title="Form | Feedback">
      <Feedback />
    </ProtectedPage>
  );
};

export default Page;