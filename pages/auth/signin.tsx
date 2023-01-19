import React from 'react';
import type { NextPage } from 'next';

import Head from 'next/head';
import Link from 'next/link';

import Header from 'components/header/header';

import styles from './signin.module.scss';

const SignInPage: NextPage = () => {
	return (
		<React.Fragment>
			<Head>
				<title>Bank API - Sign in</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<div className={styles.main}>
				<div className={styles.sign_in}>
					<h1>Sign in</h1>
					<span>Логин</span>
					<input type="text" placeholder="example@mail.ru" />
					<span>Пароль</span>
					<input type="password" placeholder="******" />
					<label className={styles.remember_me} htmlFor="remember_me">
						<input type="checkbox" id="remember_me" name="remember_me" />
						<p>Запомнить меня</p>
					</label>
					<Link href="/" className={styles.btn}>
						Sign in
					</Link>
					<Link href="/auth/signup" className={styles.link_to_signup}>
						У вас ещё нет аккаунта? <strong>Sign up.</strong>
					</Link>
				</div>
			</div>
		</React.Fragment>
	);
};

export default SignInPage;
