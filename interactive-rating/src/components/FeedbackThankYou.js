import illustration from "../illustration.svg"


export function ThankYouIllustration() {
    return (
        <div className="ty-illustration">
            <img src ={illustration} alt="Thank you Illustration"/>
        </div>
    );
}

export function FeedbackStat({ratingValue}) {
    return (
        <div className="rating-stats__band">
            <span className="rating-stats__text">{`You selected ${ratingValue} out of 5`}</span>
        </div>
    ) ;
}