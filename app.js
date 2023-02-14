import express from "express"
import mongoose from "mongoose"
import router from "./routes/user-route";
import blogRouter from './routes/blog-routes';
const app = express();

app.use(express.json());
app.use("/api/user", router)
app.use("/api/blog", blogRouter)

mongoose.connect("mongodb+srv://3abilal3:rajuraju@cluster0.7ixyt.mongodb.net/Blog?retryWrites=true&w=majority")
.then(() => app.listen(5000))
    .then(() => { console.log("app is listen on port 5000") })
    .catch((err) => { console.log(err) });

