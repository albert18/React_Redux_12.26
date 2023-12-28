import Contact from '../ContactPages/Contact'

const GeneralContacts = (props) => {
    return (
        <div>
            <div>
                {props.contacts.map((contact, index) => (
                    <Contact contact={contact} key={index}/>
                ))}
            </div>
        </div>
    );
}

export default GeneralContacts;