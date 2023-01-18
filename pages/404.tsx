import type { NextPage } from 'next';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import styles from './404.module.scss';

const ErrorPage: NextPage = () => {
	return (
		<div className={styles.error}>
			<div className={styles.error_number}>
				<Image
					src="/page_404/404.png"
					width={250}
					height={250}
					alt="error rabbit"
				></Image>
			</div>
			<h2>
				Эй? Как ты сюда попал? <br /> Тебя тут быть не должно.
			</h2>
			<Link href="/">Выпинывайся.</Link>
		</div>
	);
};

export default ErrorPage;
