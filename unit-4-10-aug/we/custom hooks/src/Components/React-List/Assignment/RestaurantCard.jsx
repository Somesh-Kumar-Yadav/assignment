import styles from "./RestaurantCard.module.css"
export function RestaurantCard({ data }) {

    
    return <div className={styles.container}>
        
        <div className={styles.first}>
        <img src={data.url} alt="j"/>
        </div>
        <div className={styles.second}>
        <h2>{data.title}</h2>
        <h3>{data.categories}</h3>
        <h4>₹{data.costforone } for one person</h4>
            <h6>Cash accepted: {data.cash}</h6>
            <h6>Card accepted: {data.card}</h6>
        </div>
        <div className={styles.third}>
            <p>{ data.rating} ★</p>
            <p>{data.totalvotes} votes</p>
            <button>Order Now</button>
        </div>
        </div>
} 