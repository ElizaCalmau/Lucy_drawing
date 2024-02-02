import './AboutMe.css'

export const AboutMe = () => {
    return (
        <>
            <div className='aboutMeWrapper'>
                {/* <div className='aboutMePhoto'> </div> */}
                <img src='src\assets\Lucy-26.jpg'/>
                <div className='aboutMeDescription'>
                    <div>
                        <h2>I am Lucia</h2>
                        <span>Your drawing teacher</span>
                    </div>
                    <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa.
                    </p>
                    <button>Join</button>
                </div>
            </div>
        </>
    )
}