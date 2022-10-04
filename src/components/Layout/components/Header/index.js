import classNames from 'classnames';
import styles from './Header.module.scss'

const cx = classNames.bind(styles)
function Header() {
    return <Header className={cx('wrapper')}></Header>
}

export default Header;