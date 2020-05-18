class Contacts {

    constructor() {

        this.contacts = [];

    }
    getAllContacts() {

        return this.contacts;
    }
    getContactsById(id) {
        return this.contacts.find(contacts => contacts.id == id);

    }
    createContact(contact) {
        contact.id = this.contacts.length + 1;
        this.contacts.push(contact);
        return contact;

    }
    updateContactById(id, updateContact) {

        let index = this.contacts.findIndex(contact => contact.id == id);
        this.contacts[index].name = updateContact.name || this.contacts[index].name;
        this.contacts[index].phone = updateContact.phone || this.contacts[index].phone;
        this.contacts[index].email = updateContact.email || this.contacts[index].email;
        return this.contacts[index];
    }
    deleteContactById(id) {
        let index = this.contacts.findIndex(contact => contact.id == id);
        let deleteObj = this.contacts[index];
        this.contacts = this.contacts.filter(contact => contact.id !== id);
        return deleteObj;

    }


}

//const contacts = new Contacts();

//exports.contact;

module.exports = new Contacts();