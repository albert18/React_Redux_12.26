import Contact from '../ContactPages/Contact';

const FavoriteContacts = (props) => {
    return (
        <div className='col-12 py-2'>
            <div className='text-center text-white-50'>Favorites</div>
            {props.contacts.map((contact, index) => (
                <Contact contact={contact} key={index} favoriteClick={props.favoriteClick} deleteContact={props.deleteContact} updateClick={props.updateClick} />
            ))}
        </div>
    );
}

export default FavoriteContacts;