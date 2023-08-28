export interface CountdownTimeDelta {
  readonly days: string;
  readonly hours: string;
  readonly minutes: string;
  readonly seconds: string;
  readonly milliseconds: string;
}
export type DeadlineType = Date | string | number;

export function calcDate(date: DeadlineType): CountdownTimeDelta | null {
  let end: number;
  const start = new Date().getTime();
  if (typeof date === "string") {
    end = new Date(date).getTime();
  } else if (date instanceof Date) {
    end = date.getTime();
  } else {
    end = date;
  }

  const timeLeft = end - start;
  if(timeLeft<0){
    return null
  }

  const sec = Math.abs(timeLeft) / 1000;

  const days = Math.floor(sec / (3600 * 24));
  const hours = Math.floor((sec / 3600) % 24);
  const minutes = Math.floor((sec / 60) % 60);
  const seconds = Math.floor(sec % 60);
  const milliseconds = Number(((sec % 1) * 1000).toFixed());
  const transformValue = (value: number) => {
    return value < 10 ? "0" + value : String(value);
  };
  const computedDate = {
    days: transformValue(days),
    hours: transformValue(hours),
    minutes: transformValue(minutes),
    seconds: transformValue(seconds),
    milliseconds: transformValue(milliseconds),
  };
  return computedDate
}
