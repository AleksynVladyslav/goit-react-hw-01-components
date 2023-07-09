import css from './TransactionHistory.module.css';
import { THead } from './THead';
import { TBody } from './TBody';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <THead />
      <TBody items={items} />
    </table>
  );
};
