import classNames from 'classnames';
import React from 'react';

const ButtonSelectContext = React.createContext({
  value: null,
  onChangeValue: function noop() {}
});

export const ButtonSelect = ({ value, onChangeValue, children }) => {
  return (
    <ButtonSelectContext.Provider
      value={{
        value,
        onChangeValue
      }}
    >
      <div className="btn-group">{children}</div>
    </ButtonSelectContext.Provider>
  );
};

export const ButtonOption = ({ value: buttonVal, ...buttonProps }) => {
  const { value, onChangeValue } = React.useContext(ButtonSelectContext);
  return (
    <button
      className={classNames(
        'btn',
        value === buttonVal ? 'btn-primary active' : 'btn-default'
      )}
      onClick={() => onChangeValue(buttonVal)}
      {...buttonProps}
    />
  );
};
