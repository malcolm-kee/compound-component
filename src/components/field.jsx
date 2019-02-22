import classNames from 'classnames';
import React from 'react';

let id = Date.now();

const getId = () => id++;

const FieldContext = React.createContext({
  fieldId: '',
  setFieldId: function() {}
});

export const Field = ({ children }) => {
  const defaultFieldId = React.useRef(getId());
  const [fieldId, setFieldId] = React.useState(defaultFieldId.current);

  return (
    <FieldContext.Provider value={{ fieldId, setFieldId }}>
      <div className="form-group">{children}</div>
    </FieldContext.Provider>
  );
};

export const Label = props => {
  const { fieldId } = React.useContext(FieldContext);

  return <label htmlFor={fieldId} {...props} />;
};

export const Input = ({ className, ...props }) => {
  const { fieldId, setFieldId } = React.useContext(FieldContext);

  React.useEffect(() => {
    if (props.id && props.id !== fieldId) {
      setFieldId(props.id);
    }
  }, []);

  return (
    <input
      id={fieldId}
      className={classNames('form-control', className)}
      {...props}
    />
  );
};
