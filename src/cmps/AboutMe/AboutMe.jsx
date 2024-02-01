import './AboutMe.css'

export const AboutMe = () => {
    return (
        <>
            <div className='aboutMeWrapper'>
                <div className='aboutMePhoto'> </div>
                <div className='aboutMeDescription'>
                    <div>
                        <h2>I am Lucia</h2>
                        <p>Your drawing teacher</p>
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