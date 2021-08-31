import Link from "next/link";
export default function ItemList({ posts }) {
	return (
		<>
			<h1>Lists of Posts</h1>
			{posts.map((post) => {
				return (
					<div key={post.id}>
						<Link href={`item/${products.id}`} passHref>
							<h2>
								{products.id}
								{products.title}
								{products.price}
							</h2>
						</Link>
						<hr />
					</div>
				);
			})}
		</>
	);
}
export async function getStaticProps() {
	const response = await fetch("http://localhost:3004/products");
	const data = await response.json();
	return {
		props: {
			products: data,
		},
	};
}
