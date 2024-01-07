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

    handleAddContact = (newContact) => {
        if (newContact.name == "") {
            return {status: "failure", msg: "Please Enter A Valid Name"}
        } else if (newContact.phone == "") {
            return {status: "failure", msg: "Please Enter A Valid Phone Number"}
        }

        const duplicateRecord = this.state.ContactList.filter((x) => {
            if (x.name == newContact.name && x.phone == newContact.phone) {
                return true;
            }
        });
        
        if(duplicateRecord.length > 0) {
            return {status: "failure", msg: "Duplicate Record"}
        } else {
            const newFinalContact = {
                ...newContact, 
                id: this.state.ContactList[this.state.ContactList.length-1].id + 1, 
                isFavorite: false,
            };
            this.setState((prevState) => {
                return {
                    ContactList: prevState.ContactList.concat([newFinalContact]),
                }
            });
            return {status: "success", msg: "Contact was added successfully!"}
        }
    };

    handleToggleFavorite = (contact) => {
        this.setState((prevState) => {
            return {
                ContactList: prevState.ContactList.map((obj) => {
                    if (obj.id == contact.id) {
                        return {...obj, isFavorite: !obj.isFavorite};
                    }
                    return obj;
                })
            }
        })
    };

    handleDeleteContact = (contactId) => {
        this.setState((prevState) => {
            return {
                ContactList: prevState.ContactList.filter((obj) => {
                    return obj.id!==contactId;
                })
            }
        })
    };

    handleRemoveAllContact = () => {
        this.setState((prevState) => {
            return {
                ContactList: [],
            }
        });
    };

    handleAddRandomContact = (newContact) => {
        const newFinalContact = {
            ...newContact, 
            id: this.state.ContactList[this.state.ContactList.length-1].id + 1, 
            isFavorite: false,
        };
        this.setState((prevState) => {
            return {
                ContactList: prevState.ContactList.concat([newFinalContact]),
            }
        });
    };

    render() {
        return (
            <div>
                <Header></Header>   
                <div className="container" style={{minHeight:"85vh"}}>
                    <div className="row py-3">
                        <div className="col-4 offset-2 row">
                            <AddRandomContact 
                            handleAddRandomContact = {this.handleAddRandomContact}
                            />
                        </div>
                        <div className="col-4 row">
                            <RemoveAllContact handleRemoveAllContact={this.handleRemoveAllContact} />
                        </div>
                        <div className="row py-2">
                            <div className="col-8 offset-2 row">
                                <AddContact handleAddContact={this.handleAddContact}/>
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col-8 offset-2 row">
                                <FavoriteContacts contacts={this.state.ContactList.filter((u)=> u.isFavorite==true)} 
                                favoriteClick={this.handleToggleFavorite}
                                deleteContact={this.handleDeleteContact}
                                />
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col-8 offset-2 row">
                                <GeneralContacts contacts={this.state.ContactList.filter((u)=> u.isFavorite==false)} 
                                favoriteClick={this.handleToggleFavorite}
                                deleteContact={this.handleDeleteContact}
                                />
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