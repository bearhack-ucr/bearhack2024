import data from "@/data/Config";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Tailwind,
  Link,
} from "@react-email/components";

const Template = ({ children, name, preview }) => {
  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Tailwind>
        <Body className="my-auto mx-auto font-sans px-2">
          <Container className="border border-solid text-white border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px] bg-[#002525]">
            <Section className="mt-[32px]">
              <Img
                src="https://www.bearhack.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.473367c8.webp&w=3840&q=75"
                width="120"
                height="80"
                alt="Vercel"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Thank you for applying!
            </Heading>
            <Text className="text-[14px] leading-[24px]">
              Hello <strong>{name}</strong>,
            </Text>
            {children}
            <Text>
              - {data.name} Team {data.heart}
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text>
              Visit{" "}
              <Link href={data.domain} className="text-[#4ABFB5]">
                {data.domain}
              </Link>{" "}
              for more information about <strong>{data.name}</strong> and follow
              us on{" "}
              <Link href={data.instagram} className="text-[#4ABFB5]">
                Instagram
              </Link>{" "}
              and{" "}
              <Link href={data.linkedin} className="text-[#4ABFB5]">
                Linkedin
              </Link>{" "}
              for up to date information and announcements.
            </Text>
            <Text className="text-gray-300 text-xs leading-[24px]">
              This invitation was intended for{" "}
              <span className="text-white">{name}</span>. If you were not
              expecting this email, you can ignore this email. If you are
              concerned about your account&apos;s safety, please contact{" "}
              <Link href={`mailto:${data.email}`} className="text-[#4ABFB5]">
                {data.email}
              </Link>{" "}
              to get in touch with us.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Template;
