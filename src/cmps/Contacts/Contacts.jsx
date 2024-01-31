import './Contacts.css'

export const Contacts = () => {
    return (
        <div className="contactsWrapper">
            <div className="contactsTel">
                <div className="telIcon"></div>
                <span>+123 456 789</span>
            </div>
            <div className="contactsLoc">
                <div className="locIcon"></div>
                <span> Madrid, Spain</span>
            </div>
        </div>
    )
}