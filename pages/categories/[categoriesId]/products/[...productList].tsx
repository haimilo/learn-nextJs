import { useRouter } from 'next/router'
import * as React from 'react'

export interface CategoriesProductsPageProps {}

export default function ProductListPage(props: CategoriesProductsPageProps) {
	const routes = useRouter()
	return (
		<div>
			<h1>Product List Page Page</h1>
			<p>ProductList: {JSON.stringify(routes.query)}</p>
		</div>
	)
}
