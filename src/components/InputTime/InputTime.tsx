import React, { useState, useEffect, useRef } from 'react';
import { isValid } from './utils/validate';

type InputTimeProps = {
  initTime: string; 
  disabled?: boolean;
  mountFocus?: boolean;
  name: string;
  value: string | number | readonly string[] | undefined;
  onTimeChange: (e: any) => void | undefined; 
};

const InputTime: React.FC<InputTimeProps> = ({...props}) => {
  const [time, setTime] = useState(props.initTime || '');

  const _input = useRef<HTMLInputElement>(null);

  useEffect(() => {
      if (!props.disabled && props.mountFocus) {
          setTimeout(() => {
            if (null !== _input.current) {
              _input.current.focus();
            }
          }, 0);
      }
  });

  let lastVal = '';

  const onChangeHandler = (val: any) => {
      if (val === time) {
          return;
      }
      if (isValid(val)) {
          if (val.length === 2 && lastVal.length !== 3 && val.indexOf(':') === -1) {
              val = val + ':';
          }

          if (val.length === 2 && lastVal.length === 3) {
              val = val.slice(0, 1);
          }

          if (val.length > 5) {
              return false;
          }

          lastVal = val;

          setTime(val);

          if (val.length === 5) {
            props.onTimeChange(val);
          }
      }
  }

    return (
      <input
          name={props.name ? props.name : undefined}
          type='time'
          disabled={props.disabled}
          value={props.value}
          className='form-control'
          onChange={(e) => onChangeHandler(e.target.value)}
          ref={_input}
      />
  );
};


export default InputTime;