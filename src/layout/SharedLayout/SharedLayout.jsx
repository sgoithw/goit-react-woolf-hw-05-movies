import { Outlet } from 'react-router-dom';
import styles from './SharedLeayout.module.css';
import { Header } from 'components';

const SharedLayout = () => (
  <div className={styles.container}>
    <Header />
    <Outlet />
  </div>
);

export default SharedLayout;
