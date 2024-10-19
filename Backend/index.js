require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const HoldingsModel = require("./model/HoldingsModel");
const PositionsModel = require("./model/PositionsModel");
const OrdersModel = require("./model/OrdersModel");
const { Signup ,Login} = require("./Controller/AuthController");
const { userVerification } = require("./Middlewares/AuthMiddleware");

const port = process.env.PORT || 8080;
const url = process.env.MONGO_URL;


const bodyParser=require("body-parser");
const cors=require("cors");
const cookieParser = require("cookie-parser");


app.use(cors());
// app.use(cors({ origin: 'http://localhost:5173/' }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

async function main() {
  await mongoose.connect(url);
}

main()
.then(() => {
  console.log("Connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

  app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
  });
  
  app.get("/", (req, res) => {
    res.send("Working....");
  });

  app.post("/newOrder", async (req, res) => {
    console.log("Post requested");
    console.log(req.body);
  
    try {
      let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
      });
  
      await newOrder.save();
      res.status(201).send("Order Saved");
    } catch (error) {
      console.error("Error saving the order:", error);
      res.status(500).send("Error saving order");
    }
  });
  
app.post("/signup", Signup);
app.post("/login", Login);
app.post("/",userVerification)


app.get("/allHoldings",async(req,res)=>{
  const allholdings=await HoldingsModel.find({});
  res.json(allholdings);
})

app.get("/allPositions",async(req,res)=>{
  const allpositions=await PositionsModel.find({});
  res.json(allpositions);
})
