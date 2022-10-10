import { useState } from "react";
import icon from "../icon.svg";
import RatingRange from "./RatingRange";
import { ThankYouIllustration, FeedbackStat } from "./FeedbackThankYou";

function FeedbackLogo() {
  return (
    <div className="round-container">
      <img className="feedback-card__logo" src={icon} alt="Feedback Logo" />
    </div>
  );
}

export function FeedbackHeader(props) {
  return (
    <div className="feedback-card__header">
      <h2 className="feedback-card__heading">{props.heading}</h2>
      <p className="feedback-card__text">{props.body}</p>
    </div>
  );
}

export default function FeedbackCard() {
  const [rate, setRate] = useState(undefined);
  const [hasValue, sethasValue] = useState(false);
  const [isRated, setIsRated] = useState(false);

  const range = [1, 2, 3, 4, 5];
  const ranges = range.map((value, i) => {
    return (
      <li className="range-item" key={`range-${i}`}>
        <button
          className="range-item__button"
          onClick={(e) => {
            setRate(() => value);
            sethasValue(() => true);
          }}
        >
          {value}
        </button>
      </li>
    );
  });

  if (isRated) {
    return (
      <section className="feedback-thanks-card">
        <ThankYouIllustration />
        <FeedbackStat ratingValue={rate} />
        <FeedbackHeader
          heading="Thank you!"
          body="We appreciate you taking the time to give a rating. If you ever need more support don't hesitate to get in touch!"
        />
      </section>
    );
  } else {
    return (
      <section className="feedback-card">
        <FeedbackLogo />
        <FeedbackHeader
          heading="How did we do?"
          body="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
        />
        <RatingRange children={ranges} />
        <button
          className="feedback-card__submit"
          onClick={(e) => {
            hasValue ? setIsRated(() => true) : setIsRated(() => false);
          }}
        >
          Submit
        </button>
      </section>
    );
  }
}
