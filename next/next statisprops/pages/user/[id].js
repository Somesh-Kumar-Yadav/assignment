import { dummy } from "../../dummy/data";
import { useRouter } from "next/router";
export default function User() {
	const router = useRouter();
	const id = router.query.id;
	const data = dummy.filter((item) => {
		return item.id === Number(id);
	});
	console.log(data);
	return (
		<>
			<div style={{ display: "flex" }}>
				<h3 style={{ marginRight: "1rem" }}>Hii, </h3>
				{data.length === 1 ? <h4>{data[0].name}</h4> : <h4>Robot</h4>}
			</div>
			<button
				onClick={() => {
					router.push("./");
				}}
			>
				Back
			</button>
		</>
	);
}
