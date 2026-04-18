import "../style/hero.css"


function Home() {    
    return (
        <>
            <div id="hero">
                <div id="hero-content">
                    <p id="hero-top-note">Hoki's PROJECT PLAYGROUND & EXPERIMENTS</p>

                    <h1>What Ideas turn into How Projects</h1>

                    <p id="hero-desc">
                        experiment, build, break, learn. <br />
                        Mostly run with React and JavaScript.
                    </p>

                    <div id="hero-buttons">
                        <button className="project">Explore My Projects</button>
                        <button className="github">Check my Github</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home