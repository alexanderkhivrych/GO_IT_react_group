import React, { useContext, useRef, useEffect } from 'react';
import ModeContext from '../modeContext';

const Button = () => {
  const mode = useContext(ModeContext);
  const mountedRef = useRef(false);
  useEffect(() => {
    mountedRef.current = true;
    return () => {};
  }, []);

  useEffect(() => {
    if (mountedRef.current) {
    }
  }, [mode]);

  return (
    <button data-id="id" onClick={() => {}} style={{ color: mode === 'dark' ? 'red' : 'green' }}>
      Test
    </button>
  );
};

export default Button;
