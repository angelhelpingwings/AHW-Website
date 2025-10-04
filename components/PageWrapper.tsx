
import React, { useEffect } from 'react';

interface PageWrapperProps {
  title: string;
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ title, children }) => {
  useEffect(() => {
    document.title = `${title} | Angel Helping Wing`;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <main className="flex-grow animate-fadeIn">
      {children}
    </main>
  );
};

export default PageWrapper;
