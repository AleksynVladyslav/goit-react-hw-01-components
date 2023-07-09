import css from './Statistics.module.css';
import { StatTitle } from './StatTitle';
import { StatsList } from './StatsList';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <StatTitle title={title} />
      <StatsList stats={stats} />
    </section>
  );
};
