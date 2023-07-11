import propTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li key={id} className={css.item}>
      <span
        className={`${css.status} ${
          isOnline === true ? css.online : css.offline
        }`}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  id: propTypes.number.isRequired,
  avatar: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  isOnline: propTypes.bool.isRequired,
};
