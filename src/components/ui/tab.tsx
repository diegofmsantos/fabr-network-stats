import React from 'react';

interface TabProps {
  children: React.ReactNode;
  active?: boolean;
}

const Tab: React.FC<TabProps> = ({ children, active = false }) => {
  return (
    <button
      className={`px-4 py-2 font-medium ${
        active
          ? 'text-white border-b-2 border-white'
          : 'text-gray-400 hover:text-gray-300'
      }`}
    >
      {children}
    </button>
  );
};

export default Tab;