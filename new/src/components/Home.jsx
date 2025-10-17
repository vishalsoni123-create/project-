import "./navbar.css"
import img from "../image/new-app-development-desktop_23-2148684987.png"
export function Home(props) {
    return (
        <div id="home" style={{paddingTop:"30px",paddingBottom:"40px"}}>
            <div className="main" >
                <div className="left">
                    <div>
                        <h1>SOFTWARE DEVELOPMENT</h1>
                        <h1>AND TRANNING </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia obcaecati consectetur laborum
                            temporibus soluta neque corporis optio consequatur? Officia mollitia repudiandae minima totam!
                            Rerum in perspiciatis, velit odio voluptates repellat.</p>
                             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia obcaecati consectetur laborum
                            temporibus soluta neque corporis optio consequatur? Officia mollitia repudiandae minima totam!
                            Rerum in perspiciatis, velit odio voluptates repellat.</p>
                        <div className="home-btn">
                          <button>About</button>
                          <button style={{marginLeft:"10px"}}>Contact Us</button>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img src={img} className="fade-scale-img"/>
                </div>
            </div>
        </div>
    )
}