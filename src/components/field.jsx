import classNames from 'classnames';
import React from 'react';

let id = Date.now();

const getId = () => `field-${id++}`;

const FieldContext = React.createContext({
  inputId: undefined,
  setInputId: function noop() {}
});

export const Field = ({ children }) => {
  const [inputId, setInputId] = React.useState(() => getId());

  return (
    <FieldContext.Provider value={{ inputId, setInputId }}>
      <div className="form-group">{children}</div>
    </FieldContext.Provider>
  );
};

export const Label = props => {
  const { inputId } = React.useContext(FieldContext);
  return <label htmlFor={inputId} {...props} />;
};

export const Input = ({ className, ...inputProps }) => {
  const { inputId, setInputId } = React.useContext(FieldContext);
  React.useEffect(() => {
    if (inputProps.id && inputProps.id !== inputId) {
      setInputId(inputProps.id);
    }
  }, [inputProps.id]);
  return (
    <input
      className={classNames('form-control', className)}
      id={inputId}
      {...inputProps}
    />
  );
};
