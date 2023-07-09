import propTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListItem = ({ friends }) => {
  return friends.map(({ id, avatar, name, isOnline }) => (
    <li key={id} className={css.item}>
      <span
        className={`${css.status} ${
          isOnline === true ? css.online : css.offline
        }`}
      ></span>

      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  ));
};

FriendListItem.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      avatar: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      isOnline: propTypes.bool.isRequired,
    })
  ),
};
