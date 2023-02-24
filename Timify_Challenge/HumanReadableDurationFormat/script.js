function formatDurationn(time) {}

function formatDuration(time) {
  if (time <= 0) {
    console.log("now");
    return 'now';
  }
  const typeTime = ["year", "day", "hour", "minute", "second"];
  let second = 0;
  let minute = 0;
  let hour = 0;
  let day = 0;
  let year = 0;
  minute = Math.floor(time / 60);
  second = time % 60;

  hour = Math.floor(minute / 60);
  minute = minute % 60;

  day = Math.floor(hour / 24);
  hour = hour % 24;

  year = Math.floor(day / 365);
  day = day % 365;

  const resultTime = [year, day, hour, minute, second];
  const resultStrArr = [];
  for (let i = 0; i < resultTime.length; i++) {
    if (resultTime[i] === 1) {
      resultStrArr.push(resultTime[i] + " " + typeTime[i]);
    } else if (resultTime[i] >= 2) {
      resultStrArr.push(resultTime[i] + " " + typeTime[i] + "s");
    }
  }
  let resultStr = "";
  for (let i = 0; i < resultStrArr.length; i++) {
    if (i === resultStrArr.length - 2) {
      resultStr += resultStrArr[i] + " and " + resultStrArr[i + 1];
      break;
    }
    if (i !== resultStrArr.length - 1) {
      resultStr += resultStrArr[i] + ", ";
    } else {
      resultStr += resultStrArr[i];
    }
  }
  console.log(resultStr);
  return resultStr;
}

formatDuration(3600);
formatDuration(1);
formatDuration(62);
formatDuration(120);
formatDuration(3662);
