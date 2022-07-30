import { useRouter } from 'next/router'
import * as React from 'react'

export interface CategoriesByIdProps {}

export default function CategoriesPostById(props: CategoriesByIdProps) {
	const routes = useRouter()
	return (
		<div>
			<h1>CategoriesById Page</h1>
			<p>CategoriesId: {routes.query.postId}</p>
			<p>CategoriesId: {routes.query.categoriesId}</p>
		</div>
	)
}
