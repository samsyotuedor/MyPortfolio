import "./works.scss"

export default function Work() {
    return (
        <div className="works" id="works">
            <div className="slider">
                <div className="container">                
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="assets/mobile.png" alt="" />
                                </div>
                                <h2>Title</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aspernatur quod non, 
                                    quos ullam nulla repellendus sint cumque , 
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="assets/laptop.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <img src="assets/small-arrow.png"  className="arrow left" alt="" />
            <img src="assets/small-arrow.png"  className="arrow right" alt="" />
        </div>
    )
}
