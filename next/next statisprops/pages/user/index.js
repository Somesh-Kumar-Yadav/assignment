import { dummy } from "../../dummy/data";
import { useRouter } from "next/router";
export default function User() {
	const router = useRouter();
	console.log(dummy);
	return (
		<>
			<h3>Users</h3>
			{dummy.map((item) => {
				return (
					<>
						<p
							style={{ cursor: "pointer" }}
							onClick={() => router.push(`/user/${item.id}`)}
						>
							{item.id}- {item.name}
						</p>
					</>
				);
			})}
		</>
	);
}
