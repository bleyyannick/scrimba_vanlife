import Header from "../components/Header";
import background_main from "/images/background_main.png";

Header

export default function Home() {
    return (
        <>
        <Header />
        <main>
        <img className="backgroundImg" src={background_main}  />
      </main>
      <footer>
        <p>© 2022 #VANLIFE</p>
      </footer>
        </>
    );
}
