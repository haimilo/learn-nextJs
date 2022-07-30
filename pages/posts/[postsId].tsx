import Link from 'next/link'
import { useRouter } from 'next/router'
import * as React from 'react'

export interface PostsByIdProps {}

export default function PostsById(props: PostsByIdProps) {
	const routes = useRouter()
	return (
		<div>
			<h1>PostsById Page</h1>
			<p>PostId: {routes.query.postsId}</p>
			<button>
				<Link href="/"> Home </Link>
			</button>
		</div>
	)
}
