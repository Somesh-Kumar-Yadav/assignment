import { Navbar } from "./navbar"
import { Section } from "./section"
import { Card } from "./Card"
import styles from "./ReactDesigner.module.css"
function ReactDesignerCardII() {
    return <div className={styles.rcard}>
        <Navbar />
        <Section />
        
        <section>
            
        <Card title={"bitcon"} url={"https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Bitcoin-BTC-icon.png"} subtitle={"btc"} address={"kdjsnklsdbjhdsfsdjbsdkj"}/>
        <Card title={"ethereum"} url={"https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png"} subtitle={"eth"} address={"kdjsnklsdbjhdsfsdjbsdkj"}/>
        <Card title={"dogecoin"} url={"https://icons.iconarchive.com/icons/cjdowner/cryptocurrency/512/Dogecoin-icon.png"} subtitle={"doge"} address={"kdjsnklsdbjhdsfsdjbsdkj"}/>
</section>
       
    </div>
}
export {ReactDesignerCardII}