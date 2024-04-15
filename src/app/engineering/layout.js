import Navigation from "@/components/engineering/Navigation";

export const Layout = ({ children }) => {
  return (
    <div className="w-full h-full">
      <Navigation />
      <div className="mt-20 h-full">{children}</div>
    </div>
  );
};

export default Layout;
