import React from 'react';
import classNames from 'classnames';
import { callAll } from '../lib';

const TabsContext = React.createContext({
  activeTab: null,
  setActiveTab: function noop() {}
});

export const Tabs = ({ defaultTab = null, children }) => {
  const [activeTab, setActiveTab] = React.useState(defaultTab);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
};

export const TabNav = props => <ul className="nav nav-tabs" {...props} />;

export const TabNavButton = ({
  tabVal,
  className,
  children,
  onClick,
  ...props
}) => {
  const { activeTab, setActiveTab } = React.useContext(TabsContext);
  return (
    <li className={activeTab === tabVal ? 'active' : undefined}>
      <a
        href={`#${tabVal}`}
        onClick={callAll(onClick, ev => {
          ev.preventDefault();
          setActiveTab(tabVal);
        })}
        className={classNames('btn', className)}
        {...props}
      >
        {children}
      </a>
    </li>
  );
};

export const TabPanel = props => <div className="tab-content" {...props} />;

export const Tab = ({ tabVal, className, ...props }) => {
  const { activeTab } = React.useContext(TabsContext);
  return (
    <div
      id={tabVal}
      className={classNames(
        'tab-pane fade',
        activeTab === tabVal && 'active in'
      )}
      {...props}
    />
  );
};
