import { type ReactNode } from 'react'

import { BottomNavigation } from '../navigation'
import styles from './BottomNavLayout.module.css'

interface BottomNavLayoutProps {
  children: ReactNode
}

export default function BottomNavLayout ({ children }: BottomNavLayoutProps) {
  return (
    <div className={styles.layout}>
      <div className="pb-bottom-nav">{children}</div>
      <BottomNavigation />
    </div>
  )
}
