import data from "@/data/Config";
import Template from "./Template";
import { Link, Text } from "@react-email/components";

const Rejection = ({ name, position, preview }) => {
  return (
    <Template name={name} preview={preview}>
      <Text>
        Thank you for applying to {data.name} as a {position}. Unfortunately,
        due to particular circumstances we are unable to provide you a spot at{" "}
        {data.name}.
      </Text>
      <Text>
        However, we loved getting to know you and hope that you apply next year.
        If you have any questions, please reach out at{" "}
        <Link href={`mailto:${data.email}`} className="text-[#4ABFB5]">
          {data.email}
        </Link>
      </Text>
    </Template>
  );
};

export default Rejection;
