import Contact from '../ContactPages/Contact'

const GeneralContacts = (props) => {
    return (
        <div>
            <div className='col-12 py-2'>
            <div className='text-center text-white-50'>Other Contacts</div>
                {props.contacts.map((contact, index) => (
                    <Contact contact={contact} key={index}/>
                ))}
            </div>
        </div>
    );
}

export default GeneralContacts;