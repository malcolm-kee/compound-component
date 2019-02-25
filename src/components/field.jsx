import classNames from 'classnames';
import React from 'react';

let id = Date.now();

const getId = () => id++;

export const Field = ({ label, className, id, ...inputProps }) => {
  const defaultFieldId = React.useRef(getId());

  return (
      <div className="form-group">
        {label && <label htmlFor={id || defaultFieldId}>{label}</label>}
        <input 
          className={classNames('form-control', className)} 
          id={id || defaultFieldId} 
          {...inputProps} 
        />
      </div>
  );
};
