import React, { useState, ReactNode, FC, memo } from "react";
import Button from "./Button";

interface TabsProps {
  children: ReactNode;
  className?: string;
}

interface TabProps {
  children: ReactNode;
  label: string;
  className?: string;
}

const Tabs: FC<TabsProps> = ({ children, className }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={`w-full space-y-8 ${className}`}>
      <TabHeaders activeIndex={activeIndex} onTabClick={handleTabClick}>
        {children}
      </TabHeaders>
      <TabContent activeIndex={activeIndex}>{children}</TabContent>
    </div>
  );
};

interface TabHeadersProps {
  children: ReactNode;
  activeIndex: number;
  onTabClick: (index: number) => void;
}

const TabHeaders: FC<TabHeadersProps> = memo(({ children, activeIndex, onTabClick }) => (
  <div className="flex flex-col md:flex-row w-full">
    {React.Children.map(children, (child, index) => {
      if (React.isValidElement(child) && child.type === Tab) {
        const { label } = child.props as TabProps;
        return (
          <Button
            key={index}
            onClick={() => onTabClick(index)}
            isActiveColor={activeIndex === index}
            fullWidth={true}
            className="px-3 py-4 md:py-8 text-base md:text-lg transform transition-transform duration-300 hover:scale-105 hover:text-primary-red"
            upperCase={false}
          >
            {label}
          </Button>
        );
      }
      return null;
    })}
  </div>
));

interface TabContentProps {
  children: ReactNode;
  activeIndex: number;
}

const TabContent: FC<TabContentProps> = ({ children, activeIndex }) => (
  <div>
    {React.Children.map(children, (child, index) => {
      if (React.isValidElement(child) && child.type === Tab) {
        return activeIndex === index ? child : null;
      }
      return null;
    })}
  </div>
);

const Tab: FC<TabProps> = memo(({ children, label, className }) => (
  <div aria-label={label} className={className}>{children}</div>
));

export { Tabs, Tab };
