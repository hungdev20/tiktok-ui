import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/094cbc21cbf705c4e5518f478c7deaf1~c5_100x100.jpeg?x-expires=1660888800&x-signature=2SBb3lxkev2KqE4JDHREAYsbD00%3D" alt="Hoaa" />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <h4>Nguyen Manh Hung</h4>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <span className={cx('username')}>Hung</span>
      </div>
    </div>
  );
}

export default AccountItem;
