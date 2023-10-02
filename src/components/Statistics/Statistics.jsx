import PropTypes from 'prop-types';
import css from './Statistics.module.css'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
        <h2 className={css.title}>Statistics</h2>
        <ul className={css.list}>
            <li className={css.statItem}>
               Good: <span className={css.itemValue}>{good}</span>
            </li>
            <li className={css.statItem}>
               Neutral: <span className={css.itemValue}>{neutral}</span>
            </li>
            <li className={css.statItem}>
               Bad: <span className={css.itemValue}>{bad}</span>
            </li>
            <li className={css.statItem}>
               Total: <span className={css.itemValue}>{total}</span>
            </li>
            <li className={css.statItem}>
               Positive feedback: <span className={css.itemValue}>{positivePercentage}%</span>
            </li>
        </ul>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
