import React from 'react';

const TabsContext = React.createContext({
  activeIndex: null,
  setActiveIndex: function noop() {}
});

export const Tabs = ({ defaultIndex = null, children }) => {
  const [activeIndex, setActiveIndex] = React.useState(defaultIndex);

  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </TabsContext.Provider>
  );
};
