import axios from 'axios';


const transactionAPI = axios.create({
    baseURL: 'http://localhost:3001/transactions',
})

export const getAllTransactions = () => {
    return transactionAPI.get('/')
}

export const getTransaction = (id) => {
    return transactionAPI.get(`/${id}/`)
}

export const createTransaction = (transaction) => {
    return transactionAPI.post('/', transaction)
}


export const deleteTransaction = (id) => {
    return transactionAPI.delete(`/${id}/`)
}


export const updateTransaction = (id, transaction) => {
    return transactionAPI.patch(`/${id}/`, transaction)
}