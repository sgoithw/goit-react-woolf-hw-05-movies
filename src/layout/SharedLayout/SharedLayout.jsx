import { Outlet } from 'react-router-dom';
import styles from './SharedLeayout.module.css';
import { Header, Loader } from 'components';
import { Suspense } from 'react';

const SharedLayout = () => (
  <div className={styles.container}>
    <Header />
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  </div>
);

export default SharedLayout;
