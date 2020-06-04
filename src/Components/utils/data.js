export let contacts = [
  {
    id: "1",
    name: "Aqib",
    contact: "0312-0046554",
    email: "a@gmail.com",
    location: "Lahore",
    photo: require("../utils/Images/gallery1.jpg"),
  },
  {
    id: "2",
    name: "Ali",
    contact: "0301-7614142",
    email: "s@gmail.com",
    location: "RawalPindi",
    photo: require("../utils/Images/gallery1.jpg"),
  },
  {
    id: "3",
    name: "shehzad",
    contact: "0301-7614142",
    email: "d@gmail.com",
    location: "Multan",
    photo: require("../utils/Images/gallery1.jpg"),
  },
  {
    id: "4",
    name: "Usman",
    contact: "0301-7614142",
    email: "f@gmail.com",
    location: "Faisalabad",
    photo: require("../utils/Images/gallery1.jpg"),
  },
  {
    id: "5",
    name: "Shehroz",
    contact: "0301-7614142",
    email: "k@gmail.com",
    location: "Lahore",
    photo: require("../utils/Images/gallery1.jpg"),
  },
  {
    id: "6",
    name: "Shahid",
    contact: "0301-7614142",
    email: "z@gmail.com",
    location: "Lahore",
    photo: require("../utils/Images/gallery1.jpg"),
  },
]
export function getContact(id) {
  return contacts.find((m) => m.id === id)
}

export function addContacts(obj = {}) {
  contacts.push(obj)
  // console.log(obj);
}

export function addContact(obj = {}, id) {
  contacts = contacts.map((contact) => {
    if (contact.id === id) {
      // change
      return {
        ...contact,
        ...obj,
      }
    }
    return contact
  })
}
