import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ friend }) => {
  const statusStyle = friend.isOnline ? css.online : css.offline;
  return (
    <li className={css.item}>
      <span className={statusStyle}></span>
      <img
        className={css.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{friend.name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
