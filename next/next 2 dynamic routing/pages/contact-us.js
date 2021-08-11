import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function Contact() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>Contact-us Page</h1>
				<p className={styles.description}>
					This webApp is built by Somesh , under the elective assignment of
					Masai School.
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
