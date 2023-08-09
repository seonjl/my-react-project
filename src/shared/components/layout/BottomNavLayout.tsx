import { ReactNode } from 'react';

import styles from './BottomNavLayout.module.css';
import { TopNavigation } from '../navigation';

type BottomNavLayoutProps = {
  children: ReactNode;
};

export default function BottomNavLayout({ children }: BottomNavLayoutProps) {
  return (
    <div className={styles.layout}>
      <TopNavigation />
      <div className="pb-bottom-nav">{children}</div>
    </div>
  );
}
