import React from 'react';
import {date, datetime} from '../../../../utils/dates'
import { StyledTime } from './styles'

const DateUI = () => {
  return (
    <StyledTime dateTime={datetime}>{date}</StyledTime>
  );
};

export default DateUI;