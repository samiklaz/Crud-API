import { v4 as uuidv4} from "uuid"
let users = [
]

const getUsers = (req, res) => {
    console.log(users)
    res.send(users)
}

const createUser = (req, res) => {
    const user = req.body
    const newUser = {...user, id: uuidv4() }

    users.push(newUser)
    res.json(newUser)
}

const getUser = (req, res) => {
    const {id} = req.params
    const foundUser = users.find((user) => user.id === id)
    res.send(foundUser)
}

const deleteUser = (req, res) => {
    const {id} = req.params
    users = users.filter((user) => user.id !== id)
    res.send(`User with the id ${id} deleted from the database`)
}

const updateUser = (req, res) => {
    const {id} = req.params
    const { firstName, lastName, age} = req.body

    const user = users.find((user) => user.id === id)

    if(firstName)  user.firstName = firstName
    if(lastName) user.lastName = lastName
    if (age)  user.age = age

    res.send(`User with the id ${id} has been updated`)
}


export { getUsers, createUser, getUser, deleteUser, updateUser };