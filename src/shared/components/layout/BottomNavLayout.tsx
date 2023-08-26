import { ReactNode } from 'react';

import styles from './BottomNavLayout.module.css';
import { BottomNavigation } from '../navigation';

type BottomNavLayoutProps = {
  children: ReactNode;
};

export default function BottomNavLayout({ children }: BottomNavLayoutProps) {
  return (
    <div className={styles.layout}>
      <div className="pb-bottom-nav">{children}</div>
      <BottomNavigation />
    </div>
  );
}
