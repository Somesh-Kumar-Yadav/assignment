import styles from "./Card.module.css"
function Card({ url,title ,subtitle,address}) {
    return <div className={styles.card}>
        <div>
        <img src={url} alt="" />
        </div>
        <div>
        <h5>{title} ({subtitle})</h5>
            <h2>{address }</h2>

        </div>
        <div>
        <p>Copy Address</p>
        <p>QR Code</p>
        </div>
    </div>
}
export {Card}