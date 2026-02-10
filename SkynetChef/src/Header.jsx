import Skynet from "./assets/headbot.jpg"

function Header(){
    return(
        <header>
            <img src={Skynet} />
            <h1>Chef AI</h1>
        </header>
    )
}
export default Header