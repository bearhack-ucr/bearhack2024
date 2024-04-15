import Navigation from "@/components/engineering/Navigation";

export const Layout = ({ children }) => {
  return (
    <div className="w-full bg-gradient-to-b from-bear-page-gradient-1 to-bear-page-gradient-2">
      <Navigation />
      <div className="mt-20">{children}</div>
    </div>
  );
};

export default Layout;
