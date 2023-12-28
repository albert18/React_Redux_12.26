import React from "react";
import Header from "../Layout/Header";
import AddRandomContact from '../ContactPages/AddRandomContact';
import RemoveAllContact from '../ContactPages/RemoveAllContact';
import AddContact from '../ContactPages/AddContact';
import FavoriteContacts from '../ContactPages/FavoriteContacts';
import GeneralContacts from '../ContactPages/GeneralComponent';
import Footer from '../Layout/Footer';

class ContactIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            ContactList: [
                {
                    id: 1,
                    name: "Ben Parker",
                    phone: "666-666-7770",
                    email: "ben@sample.com",
                    isFavorite: true,
                },
                {
                    id: 2,
                    name: "Jen Parker",
                    phone: "999-666-7770",
                    email: "Jen@sample.com",
                    isFavorite: false,
                },
            ]
        }
    }

    render() {
        return (
            <div>
                <Header></Header>   
                <div className="container" style={{minHeight:"85vh"}}>
                    <div className="row py-3">
                        <div className="col-4 offset-2">
                            <AddRandomContact />
                        </div>
                        <div className="col-4">
                            <RemoveAllContact />
                        </div>
                        <div className="row py-2">
                            <div className="col-8 offset-2 row">
                                <AddContact />
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col-8 offset-2 row">
                                <FavoriteContacts contacts={this.state.ContactList.filter((u)=> u.isFavorite==true)} />
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col-8 offset-2 row">
                                <GeneralContacts contacts={this.state.ContactList.filter((u)=> u.isFavorite==false)} />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}

export default ContactIndex;