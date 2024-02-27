export function getFullDaysBeforeNewYear(date, month) {
  if (isNaN(date) || isNaN(month) || date < 1 || date > 31 || month < 1 || month > 12) {
    return null;
  }

  const currentYear = 2023;
  const inputDate = new Date(currentYear, month - 1, date);

  if (inputDate.toString() === 'Invalid Date') {
    return null;
  }

  const newYearEve = new Date(currentYear, 11, 31);
  const timeDifference = newYearEve.getTime() - inputDate.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference + 1;
}


export function formatWithWeekday(date) {
  if (!date) {
    return '';
  }

  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const weekday = weekdays[date.getDay()];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  const formattedString = `${weekday}, ${day}, ${month} ${year}`;

  return formattedString;
}


export function isValidDate(date) {
  if (date === undefined || !(date instanceof Date)) {
    return false;
  }
  return !isNaN(date.getTime());
}



export function isAfter(date, dateToCompare) {
  if (!(date instanceof Date) || isNaN(date.getTime()) ||
    !(dateToCompare instanceof Date) || isNaN(dateToCompare.getTime())) {
    return false;
  }
  return date > dateToCompare;
}


export function formatDistanceToNow(date) {
  if (!date) {
    return 'Date is unknown';
  }
  const now = new Date();
  const timeDifference = now - date;
  const seconds = Math.floor(timeDifference / 1000);
  const minuteThreshold = 90;
  const hourThreshold = 60 * 60;
  if (seconds < 30) {
    return 'less than a minute';
  } else if (seconds < minuteThreshold) {
    return '1 minute';
  } else if (seconds < 45 * 60) {
    const minutes = Math.round(seconds / 60);
    return `${minutes} minutes`;
  } else if (seconds < 90 * 60) {
    return 'about 1 hour';
  } else {
    const formattedDate = `${padTwoDigits(date.getDate())}.${padTwoDigits(date.getMonth() + 1)}.${date.getFullYear()} ${padTwoDigits(date.getHours())}:${padTwoDigits(date.getMinutes())}:${padTwoDigits(date.getSeconds())}`;
    return formattedDate;
  }
}
function padTwoDigits(number) {
  return number.toString().padStart(2, '0');
}



