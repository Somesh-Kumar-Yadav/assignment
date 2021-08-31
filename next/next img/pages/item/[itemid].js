import { useRouter } from "next/dist/client/router";

export default function Item({ post }) {
	const router = useRouter();

	if (router.isFallback) {
		return <h1>Loading...</h1>;
	}
	return (
		<>
			<h2>
				{post.id} {post.title}
			</h2>
			<p>{post.body}</p>
		</>
	);
}

export async function getStaticPaths() {
	const response = await fetch(`http://localhost:3004/products`);
	const data = await response.json();
	const paths = data.map((item) => {
		return {
			params: {
				itemid: `${item.id}`,
			},
		};
	});
	return {
		paths: paths,
		fallback: true,
	};
}

export async function getStaticProps(context) {
	const { params } = context;
	const response = await fetch(
		`http://localhost:3004/products/${params.productsid}`
	);
	const data = await response.json();
	if (!data.id) {
		return {
			notFound: true,
		};
	}
	return {
		props: {
			item: data,
		},
	};
}
