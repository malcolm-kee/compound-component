import React from 'react';

export const CheckboxGroup = ({ children }) => {
  const [checkedValues, setCheckedValues] = React.useState([]);
  const toggleValue = value =>
    checkedValues.indexOf(value) === -1
      ? setCheckedValues(checkedValues.concat(value))
      : setCheckedValues(checkedValues.filter(val => val !== value));

  return <div>{children}</div>;
};
