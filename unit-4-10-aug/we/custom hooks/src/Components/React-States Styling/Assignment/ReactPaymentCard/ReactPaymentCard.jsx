import styles from "./ReactPaymentCard.module.css"
function ReactPaymentCard({ color, date, logo, heading, subheading, devices }) {
    return (
        <div className={styles.container} style={{ background: color}}>
            <h4>{date}</h4>
            <h3>Case Study</h3>
            <img src={logo} alt="img" />
            <h1>{ heading}</h1>
            <h1>{ subheading}</h1>
            <h2>{ devices}</h2>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Right_arrow.svg/1221px-Right_arrow.svg.png" alt=""></img>
        </div>
	);
}
// Always use PascalCase for file and components and files names
export { ReactPaymentCard }
// 