import classNames from 'classnames';
import React from 'react';

let id = Date.now();

const getId = () => `field-${id++}`;

export const Field = ({ label, className, id, ...inputProps }) => {
  const defaultFieldId = React.useRef(getId());

  return (
      <div className="form-group">
        {label && <label htmlFor={id || defaultFieldId.current}>{label}</label>}
        <input 
          className={classNames('form-control', className)} 
          id={id || defaultFieldId.current} 
          {...inputProps} 
        />
      </div>
  );
};
