import React from 'react';

const timeFormat = (date) => {
  let hours = String(date.getHours()).padStart(2, '0');
  let minutes = String(date.getMinutes()).padStart(2, '0');
  let seconds = String(date.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

const Clock = ({ time }) => {
  return (
    <div>
      <h2>{timeFormat(time)}</h2>
    </div>
  );
}

export default Clock;
