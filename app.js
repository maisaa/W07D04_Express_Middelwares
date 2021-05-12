const express = require("express");
const app = express();
const port = 3000;
const usersRouter = express.Router();
const productsRouter = express.Router();

const users = ["John","Mark"];//"John","Mark"

const logUsers = (req, res, next)=>{
    console.log(users);
    next();
}

const logMethod = (req, res, next)=>{
    console.log("......",req.method);
    next();
}



//parse application/json
app.use(express.json());
// app.use(logUsers);
// app.use(logMethod);




usersRouter.get("/",logMethod,(req, res, next) => {
    console.log("...........usersRouter.get");
    if(users.length <= 0){
        const err = new Error("no users");
        err.status = 404;
        next(err);
    }
    res.json(users);
})

usersRouter.post('/create',(req,res,next) =>{
    const newUser = req.body.user;
    users.push(newUser)
    console.log("user.......",newUser);
    console.log(".........users.......",users);
    res.json(users)
    // res.send("done..........")

})

app.use("/users", usersRouter);

app.use((err, req, res, next) =>{
    res.status(err.status);
    res.json({
        error:{
            status:err.status,
            message: err.message,
        },
    });
});


app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})













// const express = require("express");
// const app = express();
// const port = 3000;
// // insatiate router object
// const authRouter = express.Router();

// // a middleware function that logs the type of the HTTP method
// const methodType = (req, res, next) => {
//   console.log(req.method);
//   next();
// };

// // a middleware function that will be executed for every request made to the auth router
// authRouter.use((req, res, next) => {
//   console.log("Test Router");
//   next();
// });

// // a middleware that will be executed for every type of HTTP request made to the / endpoint
// authRouter.use("/", (req, res, next) => {
//   console.log("Another middleware");
//   next();
// });

// // a middleware that will be executed for every POST requests to the /login endpoint
// authRouter.post("/login", methodType, (req, res) => {
//     console.log("..........")
//   res.send("Login successful");
// });

// // use the authentication router as an application-level middleware
// // this authRouter will be called on the routes that match /auth, and in order to invoke the login, the
// // endpoint must be /auth/login, and if we request that route both of the middlewares will be invoked before the login handler
// app.use("/auth", authRouter);

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });