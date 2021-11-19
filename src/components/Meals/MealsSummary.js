import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Why are you here?
      </p>
      <p>
        Clicking on food to get more calories
      </p>
    </section>
  );
};

export default MealsSummary;