import styles from "./section.module.css"
function Section() {
    return <div className={styles.section}>
        <div>
            <img src="https://pbs.twimg.com/profile_images/1378999055154511879/XmphRvoz_400x400.jpg" alt="img" />
            <h1>Sudo_Overflow</h1>
            <p>Hey this is my sudo_overflow profile,thanks for supporting me.</p>
        </div>    
    </div>
}
export {Section}