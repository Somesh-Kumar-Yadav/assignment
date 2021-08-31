import Link from "next/link";
export default function UserList({ users }) {
	console.log(users);
	return (
		<>
			<h1>Lists of Users</h1>
			{users.map((user) => {
				return (
					<div key={user.id}>
						<Link href={`/users-reqres/${user.id}`} passHref>
							<h2>
								{user.id} {user.first_name} {user.last_name}
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
	const response = await fetch("https://reqres.in/api/users");
	const data = await response.json();
	return {
		props: {
			users: data.data,
		},
	};
}
