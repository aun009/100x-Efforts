import { PrismaClient } from "@prisma/client";
import express from "express"

const client = new PrismaClient();
const app = express();


app.get("/users", async (req, res) => {
  const users = await client.user.findMany(); // it will have all the users there

  res.json({
    message : users
  })
})


app.get("/todos/:id", async (req, res) => {
  const id = req.params.id

  const user = await client.user.findFirst({
    where : {
      id : parseInt(id)
    }, 
    select : {
      todos : true,
      username : true,
      password : true
    }
  });
  
  res.json({
    user
  })
})

async function createUser() {
    
    // await client.user.create({
    //     data : {
    //         username : "Arun",
    //         password : "1212",
    //         age : 22,
    //         city : "Wagholi"
    //     }
    // })

    const user = await client.user.findFirst({
        where: {
            id : 1
        },

        include: {
            todos : true
        }
    })

    console.log(user);
    
}


createUser()


app.listen(3005)