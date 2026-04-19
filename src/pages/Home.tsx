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
                        <a href="https://github.com/kotakbulat" className="btn">Check my Github</a>
                        <a href="https://kotakbulat.github.io" className="btn">My About</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home