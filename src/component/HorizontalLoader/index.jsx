import classes from './style.module.scss';

const HorizontalLoader = () => {
    return <div className={classes.loader}>
        <div className={classes.bar1} />
        <div className={classes.bar2} />
        <div className={classes.bar3} />
        <div className={classes.bar4} />
        <div className={classes.bar5} />
    </div>
}

export default HorizontalLoader;