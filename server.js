// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// const app = express();
// const PORT = process.env.PORT || 5000;
// const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/cruddb";

// // Middlewares
// app.use(cors());
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect(MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "MongoDB connection error:"));
// db.once("open", () => console.log("Connected to MongoDB"));

// // Mongoose Schema & Model
// const ItemSchema = new mongoose.Schema({
//   name: String,
//   price: Number,
// });
// const Item = mongoose.model("Item", ItemSchema);

// // ROUTES

// // Get all items
// app.get("/api/items", async (req, res) => {
//   const items = await Item.find();
//   res.json(items);
// });

// // Create item
// app.post("/api/items", async (req, res) => {
//   const { name, price } = req.body;
//   const newItem = new Item({ name, price });
//   await newItem.save();
//   res.status(201).json(newItem);
// });

// // Get single item
// app.get("/api/items/:id", async (req, res) => {
//   const item = await Item.findById(req.params.id);
//   if (!item) return res.status(404).json({ message: "Item not found" });
//   res.json(item);
// });

// // Update item
// app.put("/api/items/:id", async (req, res) => {
//   const { name, price } = req.body;
//   const updatedItem = await Item.findByIdAndUpdate(
//     req.params.id,
//     { name, price },
//     { new: true }
//   );
//   if (!updatedItem) return res.status(404).json({ message: "Item not found" });
//   res.json(updatedItem);
// });

// // Delete item
// app.delete("/api/items/:id", async (req, res) => {
//   const deletedItem = await Item.findByIdAndDelete(req.params.id);
//   if (!deletedItem) return res.status(404).json({ message: "Item not found" });
//   res.json({ message: "Item deleted successfully" });
// });

// // Start server
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));



// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const swaggerJsdoc = require("swagger-jsdoc");
// const swaggerUi = require("swagger-ui-express");

// const app = express();
// const PORT = process.env.PORT || 5000;
// const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/cruddb";

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB Connection
// // mongoose.connect(MONGO_URI, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // });

// mongoose
//   .connect("mongodb+srv://zeshig01:Zeeshan%4012311@cluster0.ftfisvo.mongodb.net/simplecrud?retryWrites=true&w=majority&appName=Cluster0")
//   .then(() => console.log("✅ MongoDB Atlas connected"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "MongoDB connection error:"));
// db.once("open", () => console.log("Connected to MongoDB"));

// // Mongoose Schema & Model
// const ItemSchema = new mongoose.Schema({
//   name: String,
//   price: Number,
// });
// const Item = mongoose.model("Item", ItemSchema);

// // Swagger Setup
// const swaggerOptions = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "Simple CRUD API",
//       version: "1.0.0",
//       description: "A simple CRUD API with MongoDB, Express, and Swagger",
//     },
//     servers: [
//       {
//         url: "http://localhost:5000",
//       },
//     ],
//   },
//   apis: ["./server.js"], // Same file
// };

// const swaggerDocs = swaggerJsdoc(swaggerOptions);
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// /**
//  * @swagger
//  * components:
//  *   schemas:
//  *     Item:
//  *       type: object
//  *       required:
//  *         - name
//  *         - price
//  *       properties:
//  *         id:
//  *           type: string
//  *           description: Auto-generated ID
//  *         name:
//  *           type: string
//  *           description: Item name
//  *         price:
//  *           type: number
//  *           description: Item price
//  *       example:
//  *         name: Laptop
//  *         price: 999.99
//  */

// /**
//  * @swagger
//  * tags:
//  *   name: Items
//  *   description: API for managing items
//  */

// /**
//  * @swagger
//  * /api/items:
//  *   get:
//  *     summary: Get all items
//  *     tags: [Items]
//  *     responses:
//  *       200:
//  *         description: List of all items
//  */
// app.get("/api/items", async (req, res) => {
//   const items = await Item.find();
//   res.json(items);
// });

// /**
//  * @swagger
//  * /api/items:
//  *   post:
//  *     summary: Create a new item
//  *     tags: [Items]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/Item'
//  *     responses:
//  *       201:
//  *         description: Item created successfully
//  */
// app.post("/api/items", async (req, res) => {
//   const { name, price } = req.body;
//   const newItem = new Item({ name, price });
//   await newItem.save();
//   res.status(201).json(newItem);
// });

// /**
//  * @swagger
//  * /api/items/{id}:
//  *   get:
//  *     summary: Get a single item by ID
//  *     tags: [Items]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: string
//  *         description: Item ID
//  *     responses:
//  *       200:
//  *         description: Found item
//  *       404:
//  *         description: Item not found
//  */
// app.get("/api/items/:id", async (req, res) => {
//   const item = await Item.findById(req.params.id);
//   if (!item) return res.status(404).json({ message: "Item not found" });
//   res.json(item);
// });

// /**
//  * @swagger
//  * /api/items/{id}:
//  *   put:
//  *     summary: Update an item by ID
//  *     tags: [Items]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: string
//  *         description: Item ID
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/Item'
//  *     responses:
//  *       200:
//  *         description: Item updated successfully
//  *       404:
//  *         description: Item not found
//  */
// app.put("/api/items/:id", async (req, res) => {
//   const { name, price } = req.body;
//   const updatedItem = await Item.findByIdAndUpdate(
//     req.params.id,
//     { name, price },
//     { new: true }
//   );
//   if (!updatedItem) return res.status(404).json({ message: "Item not found" });
//   res.json(updatedItem);
// });

// /**
//  * @swagger
//  * /api/items/{id}:
//  *   delete:
//  *     summary: Delete an item by ID
//  *     tags: [Items]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: string
//  *         description: Item ID
//  *     responses:
//  *       200:
//  *         description: Item deleted
//  *       404:
//  *         description: Item not found
//  */
// app.delete("/api/items/:id", async (req, res) => {
//   const deletedItem = await Item.findByIdAndDelete(req.params.id);
//   if (!deletedItem) return res.status(404).json({ message: "Item not found" });
//   res.json({ message: "Item deleted successfully" });
// });

// // Start server
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}/api-docs`));

const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
app.use(cors({
  origin: '*',  // ❗ For development only
}));

app.use(bodyParser.json());

// Replace with your own MongoDB Atlas connection string
const MONGO_URI = 'mongodb+srv://zeshig01:Zeeshan%4012311@cluster0.ftfisvo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB Atlas
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Schema and model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});
const User = mongoose.model('User', userSchema);

// CRUD Routes

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: List of users
 */
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: User created
 */
app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  const newUser = new User({ name, email });
  await newUser.save();
  res.json(newUser);
});

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update a user by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated
 */
app.put('/users/:id', async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedUser);
});

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted
 */
app.delete('/users/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User deleted' });
});

// Swagger setup
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Simple CRUD API',
      version: '1.0.0',
      description: 'A simple CRUD API with Express, MongoDB and Swagger',
    },
    servers: [
      {
        url: 'https://simplecrud.up.railway.app', // Update with your Railway domain
      },
    ],
  },
  apis: ['./server.js'], // This file only
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/api-docs`);
});
