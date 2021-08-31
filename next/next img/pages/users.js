import User from "../components/user";

export default function UserList({ users }) {
	return (
		<>
			<h1>List of users</h1>
			{users.map((user) => {
				return (
					<div key={user.id}>
						<User user={user} />
					</div>
				);
			})}
		</>
	);
}
export async function getStaticProps() {
	const respone = await fetch("https://reqres.in/api/users");
	const data = await respone.json();
	return {
		props: {
			users: data,
		},
	};
}
