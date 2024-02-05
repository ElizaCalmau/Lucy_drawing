import './AboutMe.css'

export const AboutMe = () => {
    return (
        <>
            <div className='aboutMeWrapper'>
                <img src='public/images/Lucy-43.jpg' alt='Lucia photo'/>
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