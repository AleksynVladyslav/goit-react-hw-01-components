import propTypes from 'prop-types';
import css from './Statistics.module.css';

export const StatsList = ({ stats }) => {
  return (
    <ul className={css.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li key={id} className={css.item}>
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage} %</span>
        </li>
      ))}
    </ul>
  );
};

StatsList.propTypes = {
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    })
  ),
};
