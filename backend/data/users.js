import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
     {
        name: 'Jawwad',
        email: 'jawwad@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
      {
        name: 'Ahmad',
        email: 'ahmad@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },

]
export default users;