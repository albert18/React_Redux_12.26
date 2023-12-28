import React from "react";
import Header from "../Layout/Header";
import AddRandomContact from '../ContactPages/AddRandomContact';
import RemoveAllContact from '../ContactPages/RemoveAllContact';
import AddContact from '../ContactPages/AddContact';
import FavoriteContacts from '../ContactPages/FavoriteContacts';
import GeneralContacts from '../ContactPages/GeneralComponent';
import Footer from '../Layout/Footer';

class ContactIndex extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>   
                <div className="container" style={{minHeight:"85vh"}}>
                    <div className="row py-3">
                        <div className="col-4 offset-2">
                            <AddRandomContact></AddRandomContact>
                        </div>
                        <div className="col-4">
                            <RemoveAllContact></RemoveAllContact>
                        </div>
                        <div className="row py-2">
                            <AddContact></AddContact>
                        </div>
                        <div className="row py-2">
                            <FavoriteContacts></FavoriteContacts>
                        </div>
                        <div className="row py-2">
                            <GeneralContacts></GeneralContacts>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}

export default ContactIndex;