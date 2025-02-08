class ContactManager {
    constructor() {
        this.contacts = [];
    }

    addContact(name, phone, email) {
        const contact = { id: Date.now(), name, phone, email };
        this.contacts.push(contact);
        return contact;
    }

    viewContacts() {
        return this.contacts.map(contact => ({ id: contact.id, name: contact.name, phone: contact.phone }));
    }

    editContact(id, updatedInfo) {
        const contact = this.contacts.find(contact => contact.id === id);
        if (contact) {
            Object.assign(contact, updatedInfo);
            return contact;
        }
        return null;
    }

    deleteContact(id) {
        const index = this.contacts.findIndex(contact => contact.id === id);
        if (index !== -1) {
            return this.contacts.splice(index, 1)[0];
        }
        return null;
    }
}

const contactManager = new ContactManager();

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
    const contactList = document.getElementById("contact-list");

    function renderContacts() {
        contactList.innerHTML = "";
        contactManager.viewContacts().forEach(contact => {
            const li = document.createElement("li");
            li.textContent = `${contact.name} - ${contact.phone}`;
            contactList.appendChild(li);
        });
    }

    contactForm.addEventListener("submit", event => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        contactManager.addContact(name, phone, email);
        renderContacts();
        contactForm.reset();
    });
});
