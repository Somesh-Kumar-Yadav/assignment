import { useRouter } from "next/dist/client/router";

export default function User({ user }) {
	const router = useRouter();
	return (
		<>
			<h2>
				{user.id} {user.first_name} {user.last_name}
			</h2>
		</>
	);
}

export async function getStaticPaths() {
	const response = await fetch(`https://reqres.in/api/users`);
	const data = await response.json();
	const paths = data.data.map((user) => {
		return {
			params: {
				id: `${user.id}`,
			},
		};
	});
	return {
		paths: paths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const { params } = context;
	const response = await fetch(`https://reqres.in/api/users/${params.id}`);
	const data = await response.json();
	console.log(params.id);
	return {
		props: {
			user: data.data,
		},
	};
}
