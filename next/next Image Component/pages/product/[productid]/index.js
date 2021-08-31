import { useRouter } from "next/dist/client/router";

export default function ProductDetail() {
	const router = useRouter();
	const productid = router.query.productid;
	return <h1> Details {productid}</h1>;
}
