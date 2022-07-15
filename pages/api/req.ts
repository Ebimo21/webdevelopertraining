import prisma from '../../lib/prisma'
const {Prisma} = require('@prisma/client');




  export default async function handler(req, res) {
    const datas = req.body;
    var result;
    try {

      result =   await prisma.userreg.create({
            data: {
                firstName: datas.firstName,
                lastName: datas.lastName,
                email: datas.email,
                phone: datas.phone
            }
        });
        
    }catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            // The .code property can be accessed in a type-safe manner
            if (e.code === 'P2024') {
            console.log(
              'Timed out fetching a new connection from the connection pool.'
              )
            //   result = 'Timed out fetching a new connection from the connection pool.'
            }
        }
        throw e
    }
    res.status(200).json(result)
}
  