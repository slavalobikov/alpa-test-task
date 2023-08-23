import classes from './style.module.scss';

const Step = ({maxStep, currentStep}) => {
    const arr = []
    for (let i = 0; i < maxStep; i++) {
        arr.push(i);
    }

    return (
        <div className={classes.registration_steps}>
            {arr.map((step, index) => (
                <div key={index} className={classes.step}>
                    <div data-is-current-step={index === currentStep - 1} className={classes.circle}></div>
                    <span className={classes.title}>Step {index + 1}</span>
                </div>
            ))}
        </div>
    );
}

export default Step;