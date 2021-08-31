import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function About() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>About Page</h1>
				<p className={styles.description}>
					Next.js is a react library , used for server-side rendering ,static
					page generation , better usage of sass and for Search Engine
					Optimization.
				</p>
				<div className={styles.grid}>
					<a onClick={() => router.push("/")} className={styles.card}>
						<h2>Back to Home &larr;</h2>
					</a>
				</div>
			</main>
		</div>
	);
}
