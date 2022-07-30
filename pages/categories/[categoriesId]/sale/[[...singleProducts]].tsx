import { useRouter } from 'next/router'
import * as React from 'react'

export interface SingleProductsProps {}

export default function SingleProduct(props: SingleProductsProps) {
	const routes = useRouter()
	return (
		<div>
			<h1>Single Product Page</h1>
			<p>ProductId: {JSON.stringify(routes.query)}</p>
		</div>
	)
}
