import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <section className="bg-dark-bg pt-6 py-16">
      <div className="flex items-center justify-center w-full">{children}</div>
    </section>
  );
};

export default MainLayout;
