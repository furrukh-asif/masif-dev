import React from 'react';
import styles from './Layout.module.css';

type LayoutProps = {
    children: React.ReactNode
}

export default function Layout({ children } : LayoutProps){
    return (
        <div className={styles.container}>
            <div className={styles.layout}>
                 <main>{children}</main>
            </div>   
        </div>
    )
}