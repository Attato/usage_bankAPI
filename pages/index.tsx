import type { NextPage } from 'next';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { Inter } from '@next/font/google';

import styles from './index.module.scss';

const inter = Inter({ subsets: ['latin'] });

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Bank API</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<div className={styles.center}>
					<div className={styles.project_title}>
						<h1>Bank API</h1>
						<span>Версия: 0.1.0</span>
					</div>
					<div className={styles.thirteen}>
						<h1>₽</h1>
					</div>
				</div>

				<div className={styles.currenciess__table}>
					<div className={styles.currenciess__title}>
						<span>Курсы валют</span>
						<span>31.12.2022</span>
						<span>10.01.2023</span>
					</div>
					<div className={styles.currenciess__row}>
						<div className={styles.currenciess}>
							<Image
								src="/currencies/usd.svg"
								width={24}
								height={24}
								alt="usd"
							></Image>
							<p>USD,&#8239;</p>
							<span>1$</span>
						</div>
						<p className={styles.num}>70,3375 ₽</p>
						<p className={styles.num}>70,3002 ₽</p>
					</div>
					<div className={styles.currenciess__row}>
						<div className={styles.currenciess}>
							<Image
								src="/currencies/eur.svg"
								width={24}
								height={24}
								alt="eur"
							></Image>
							<p>EUR,&#8239;</p>
							<span>1€</span>
						</div>
						<p className={styles.num}>75,6553 ₽</p>
						<p className={styles.num}>75,0785 ₽</p>
					</div>
					<div className={styles.currenciess__row}>
						<div className={styles.currenciess}>
							<Image
								src="/currencies/cny.svg"
								width={24}
								height={24}
								alt="cny"
							></Image>
							<p>CNY,&#8239;</p>
							<span>1¥</span>
						</div>
						<p className={styles.num}>9,8949 ₽</p>
						<p className={styles.num}>10,2867 ₽</p>
					</div>
				</div>

				<div className={styles.grid}>
					<Link
						href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						className={styles.card}
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2 className={inter.className}>
							Open Source <span>-&gt;</span>
						</h2>
						<p className={styles.className}>
							Открытый исходный код данного проекта.
						</p>
					</Link>
				</div>
			</main>
		</>
	);
};

export default Home;
