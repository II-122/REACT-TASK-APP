import React, { FC } from 'react';
import { ILogItem } from '../../../types';
import { BsFillPersonFill } from 'react-icons/bs';
import { logAuthor, logDate, logItemWrap, logMessage } from './LogItem.css';

type TLogItemProps = {
  logItem : ILogItem;
}

const LogItem : FC<TLogItemProps>= ({
  logItem
}) => {
  let timeOffset = new Date(Date.now() - Number(logItem.logTimestamp));
  
  const showOffsetTime = `
    ${timeOffset.getMinutes() > 0 ? `${timeOffset.getMinutes()}m` : ""}
    ${timeOffset.getSeconds() > 0 ? `${timeOffset.getSeconds()}s ago` : ""}
    ${timeOffset.getSeconds() === 0 ? "just now" : ""}
  `;
  return (
    <div className={logItemWrap}>
      <div className={logAuthor}>
        <BsFillPersonFill />
        {logItem.logAuthor}
      </div>
      <div className={logMessage}>{logItem.logMessage}</div>
      <div className={logDate}>{showOffsetTime}</div>
    </div>
  )
}

export default LogItem;