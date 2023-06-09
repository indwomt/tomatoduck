export const getMe = (token) => {
    return fetch(`/api/users/me`, {
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
        }
    })
}

export const createUser = (userData) => {
    return fetch(`/api/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
}

export const loginUser = (userData) => {
    return fetch(`/api/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
}

export const editUser = (userData, token) => {
    return fetch(`/api/users/${userData}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify(userData)
    })
}

export const saveTodo = (todoData, token) => {
    return fetch(`/api/users/todos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify(todoData)
    })
}

export const deleteTodo = (todoData, token) => {
    return fetch(`/api/users/todos/${todoData}`, {
        method: 'DELETE',
        headers: {
            authorization: `Bearer ${token}`
        }
    })
}

export const editTodo = (todo, token) => {
    return fetch(`/api/users/todos/${todo}`, {
        method: `PUT`,
        headers: {
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify(todo)

    })
}
export const askChatBot = (prompt) => {
    const requestOptions = {
        method: "POST",
        headers: { 
            "Content-Type": "application/json"
            },
        body: JSON.stringify({ prompt }),
      }
      return fetch(`/api/chatbot`, requestOptions)
}
