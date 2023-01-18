import type { NextPage } from 'next';

import Head from 'next/head';
import Link from 'next/link';

import styles from './404.module.scss';

const ErrorPage: NextPage = () => {
	return (
		<div className={styles.error}>
			<h2>
				Ау! Как ты сюда попал? <br /> Тебя тут быть не должно.
			</h2>
			<Link href="/">Выпинывайся.</Link>
		</div>
	);
};

export default ErrorPage;
