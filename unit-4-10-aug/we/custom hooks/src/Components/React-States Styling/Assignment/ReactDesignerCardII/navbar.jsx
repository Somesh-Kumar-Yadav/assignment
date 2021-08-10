import styles from "./navbar.module.css"
function Navbar() {
    return <nav>
    <div><h1>TipWallets</h1></div>
        <div>
            <li>Home</li>
            <li>Profile</li>
            <li>Settings</li>
            <li>About</li>
            <li>Contact</li>
            <li>Sign Out</li>
        </div>
    </nav>
}
export {Navbar}