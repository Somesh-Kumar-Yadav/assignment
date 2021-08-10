import styles from "./Card.module.css"
function Card({ obj }) {
    
    return <div className={styles.container}>
        <div>
            <div>
                <img src="https://pbs.twimg.com/profile_images/1378999055154511879/XmphRvoz_400x400.jpg" alt="img" />
                
            </div>
            <h1>{ obj.name}</h1>
            <h2>{ obj.location}</h2>
            <h3>{obj.description}</h3>
            <div>
                <button>
                    Message
                </button>
                <button>
                    Following
                </button>
            </div>
        </div>
        <div>
            <p>Skills</p>
            <div>
                
            {
                obj.skills.map((el) => {
                    return <button>{el}</button>
                })
            }
            </div>
        </div>
    </div>
}
export {Card}