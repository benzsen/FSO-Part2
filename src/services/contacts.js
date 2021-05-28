import axios from "axios"

const personsURL = "http://localhost:3001/persons/";

const create = ({name,number})=> axios.post(personsURL, {name,number})

const getAll = () => axios.get(personsURL);

const remove = (id) => axios.delete(personsURL+id);

const put = (id,updatedContact) => axios.put(personsURL+id, updatedContact);

export default {create, getAll, remove, put}
