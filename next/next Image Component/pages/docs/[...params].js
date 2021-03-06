import { useRouter } from "next/dist/client/router";
export default function Docs() {
	const router = useRouter();
	const { params = [] } = router.query;
	console.log(params);
	if (params.length === 2) {
		return (
			<h1>
				Viewing docs for {params[0]} of {params[1]}
			</h1>
		);
	} else if (params.length === 1) {
		return <h1>Viewing docs for feature {params[0]}</h1>;
	}
	return <></>;
}
