/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled';
import React, { useState } from 'react';
import Colors from '../../constants/colors';
import SVG from './SVG';

interface Props {
  fieldLabel: string;
  errors: any;
  register: any;
  name: string;
}
const Input: React.FC<Props> = ({
  fieldLabel,
  register,
  errors,
  name,
}: Props) => {
  const [fieldStatus, setFieldStatus] = useState(false);
  const toggleFieldStatus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value) return;
    setFieldStatus(false);
  };
  return (
    <div>
      <FlatInput active={fieldStatus} onClick={() => setFieldStatus(true)}>
        <div className="label">{fieldLabel}</div>
        <input
          type="text"
          onBlur={toggleFieldStatus}
          name={name}
          className="input"
          ref={register({ required: true })}
        />
      </FlatInput>
      <FieldError>
        <MobileRow spacing="0 .41rem">
          {errors[name] && (
            <SVG src="/assets/images/warning.png" width="10px" height="10px" />
          )}
          {errors[name]?.message ||
            (errors[name] && `${fieldLabel} is required`)}
        </MobileRow>
      </FieldError>
    </div>
  );
};

const MobileRow = styled.div(
  (props: { spacing?: string; justifyContent?: string; margin?: string }) => ({
    display: 'flex',
    justifyContent: props.justifyContent || 'flex-start',
    alignItems: 'center',
    fontSize: 'x-small',
    div: {
      margin: props.spacing,
    },
  })
);
const FieldError = styled.div({
  color: 'red',
});

const FlatInput = styled.div((props: { active: boolean }) => ({
  height: '2.5rem',
  width: '21rem',
  border: '1px solid',
  borderColor: !props.active ? 'rgba(60,73,138,0.42)' : Colors.darkSlateBlue,
  borderRadius: '4px',
  position: 'relative',
  margin: '.1rem',

  '.label': {
    position: 'absolute',
    padding: '0 .72rem',
    top: props.active ? '0' : '35%',
    '@media(max-width:500px)': {
      top: props.active ? '-10px' : '17%',
      fontSize: '.71rem',
    },
  },
  '.input': {
    height: '100%',
    width: '100%',
    position: 'absolute',
    bottom: '0',
    border: 'none',
    backgroundColor: 'transparent',
    padding: '0 .7rem',
    fontSize: '1.1rem',
    ':focus': {
      outline: 'none',
      border: 'none',
    },
    '@media(max-width:500px)': {
      left: '0',
      width: '85vw',
      paddingLeft: '1.2rem',
    },
  },
  '@media(max-width:500px)': {
    width: '85vw',
  },
}));

export default Input;
