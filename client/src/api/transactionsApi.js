import axios from 'axios';


const transactionAPI = axios.create({
    baseURL: 'http://localhost:3001/transactions',
})

export const getAllTransactions = () => {
    return transactionAPI.get('/')
}

export const createTransaction = (transaction) => {
    return transactionAPI.post('/', transaction)
}