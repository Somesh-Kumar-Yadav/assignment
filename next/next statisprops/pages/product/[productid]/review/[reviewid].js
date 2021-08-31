import { useRouter } from "next/dist/client/router";

export default function ProductDetail() {
	const router = useRouter();
	const { reviewid, productid } = router.query;
	return (
		<h1>
			Review {reviewid} for Product {productid}
		</h1>
	);
}
