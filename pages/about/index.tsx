import { useRouter } from 'next/router'
import * as React from 'react'
import styles from '../../styles/Home.module.css'

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
	const router = useRouter()
	const goHome = () => {
		router.push('/')
	}
	return (
		<div>
			<h1>About Page</h1>
			<button className={styles.button} onClick={() => goHome()}>
				Home
			</button>
		</div>
	)
}
