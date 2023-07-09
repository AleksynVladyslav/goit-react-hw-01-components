import propTypes from 'prop-types';

import css from './Statistics.module.css';

export const StatTitle = ({ title }) => {
  return <h2 className={css.title}>{title}</h2>;
};

StatTitle.propTypes = {
  title: propTypes.string.isRequired,
};
