import React, { FC } from 'react';

import Link from 'next/link';

import styles from './header.module.scss';

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Link href="/">Home</Link>
			<div className={styles.right_side}>
				<Link href="/auth/signin">Sign in</Link>
				<Link href="/auth/signup">Sign up</Link>
			</div>
		</header>
	);
};
export default Header;
