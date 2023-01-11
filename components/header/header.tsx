import React, { FC } from 'react';

import Link from 'next/link';

import styles from './header.module.scss';

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Link href="/">Регистрация</Link>
		</header>
	);
};
export default Header;
