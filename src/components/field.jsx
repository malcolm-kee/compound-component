import classNames from 'classnames';
import React from 'react';

let id = Date.now();

const getId = () => `field-${id++}`;

const FieldContext = React.createContext({
  fieldId: undefined,
  setFieldId: function noop() {}
});

export const Field = ({ children }) => {
  const [fieldId, setFieldId] = React.useState(() => getId());

  return (
    <FieldContext.Provider value={{fieldId, setFieldId}}>
      <div className="form-group">
        {children}
      </div>
    </FieldContext.Provider>
  );
};


export const Label = props => {
  const { fieldId } = React.useContext(FieldContext);
  return <label htmlFor={fieldId} {...props} />
}

export const Input = ({ className, ...inputProps }) => {
  const { fieldId, setFieldId } = React.useContext(FieldContext);

  React.useEffect(() => {
    if (inputProps.id && inputProps.id !== fieldId) {
      setFieldId(inputProps.id)
    }
  }, [inputProps.id])
  
  return <input className={classNames('form-control', className)} id={fieldId} {...inputProps} />
}