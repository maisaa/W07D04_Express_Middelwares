const express = require("express");
const app = express();
const port = 3000;

const users = ["John","Mark"];

const logUsers = (req, res, next)=>{
    console.log(users);
    next();
}

app.use(logUsers);

app.get("/users",(req, res, next) => {
    res.json(users);
})

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