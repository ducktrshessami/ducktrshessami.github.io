import "./Footer.css";

export default function Footer() {
    let now = new Date();
    return (
        <footer className="center middle">
            <span>© Copyright {now.getFullYear()} Josh Wee</span>
        </footer>
    );
}
