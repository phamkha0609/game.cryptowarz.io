import React, { useEffect, useState } from "react";
import { Columns } from "react-bulma-components";
import "./style.scss";

function CountDown() {
  const [timerDay, setTimerDay] = useState<number>();
  const [timerHours, setTimerHours] = useState<number>();
  const [timerMinutes, setTimerMinutes] = useState<number>();
  const [timerSeconds, setTimerSeconds] = useState<number>();

  let interval: any;

  const startTimer = () => {
    const countDownDate = new Date("Apr 09,2022").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days: number = Math.floor(distance / (24 * 60 * 60 * 1000));

      const hours: number = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );

      const minutes: number = Math.floor(
        (distance % (60 * 60 * 1000)) / (1000 * 60)
      );

      const seconds: number = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        //stoptimer

        clearInterval(interval.current);
      } else {
        //update timer
        setTimerDay(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <div className="countdown">
      <Columns className=" is-mobile">
        <Columns.Column size={3} className="text-blue">
          <span className="timer"> {timerDay}</span>
          <br />
          Days
        </Columns.Column>
        <Columns.Column size={3} className="text-blue">
          <span className="timer"> {timerHours}</span>
          <br />
          Hours
        </Columns.Column>
        <Columns.Column size={3} className="text-blue">
          <span className="timer"> {timerMinutes}</span>
          <br />
          Minutes
        </Columns.Column>
        <Columns.Column size={3} className="text-blue">
          <span className="timer"> {timerSeconds}</span>
          <br />
          Seconds
        </Columns.Column>
      </Columns>
      {/* : {timerHours} : {timerMinutes} : {timerSeconds} */}
    </div>
  );
}

export default CountDown;
