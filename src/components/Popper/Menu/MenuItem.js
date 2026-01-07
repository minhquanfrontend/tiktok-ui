import Button from '~/components/Button';
import classname from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classname.bind(styles);
function MenuItem({ data, onClick }) {
    return (
        <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
