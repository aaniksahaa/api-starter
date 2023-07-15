const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getDemo = async (payload) => {
    //const data = await // database calls or other api calls here
    data = { 'data' : payload.data }
    console.log(data)
    return data  
}

module.exports = {getDemo}
