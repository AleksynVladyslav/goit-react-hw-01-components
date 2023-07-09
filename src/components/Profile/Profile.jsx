import css from './Profile.module.css';
import { ProfileStats } from './ProfileStats';
import { ProfileDescr } from './ProfileDescr';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <ProfileDescr
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <ProfileStats stats={stats} />
    </div>
  );
};
