const express=require('express')
const app=express()
var cors = require('cors')
app.use(cors())
app.use(express.json());
const port=process.env.PORT || 5000
require('dotenv').config()

//database connection here
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://DB_Blog:m36HuPfgvnEWvSco@cluster0.yekoygf.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    const database = client.db("DBBlog");
    const blogCollection = database.collection("blog");

    //here routes
    app.get("/",(req,res)=>{
      res.send("Server running")
    })
    //get all post 
    app.get('/allPost',async(req,res)=>{
      const result=await blogCollection.find().toArray()
      res.send(result)
      console.log(result)
    })
    //post read here
    app.get('/myPost',async(req,res)=>{
      const result=await blogCollection.find().toArray()
      res.send(result)
    })
    //post create here
    app.post('/addPost',async(req,res)=>{
      const body=req.body
      const result=await blogCollection.insertOne(body)
      console.log(result)
      res.send(result)
    })
    //post update
    app.get('/getSinglePost/:id',async(req,res)=>{
      const id=req.params.id
      const filter={
        _id:new ObjectId(id)
      }
      const result=await blogCollection.findOne(filter)
      res.send(result)
      console.log(result)
    })
    //update post
    app.patch('/updatePost/:id',async(req,res)=>{
      const id=req.params.id
      const filter={
        _id:new ObjectId(id)
      }
      const body=req.body
      const updateDoc={
        $set:{
          userName:body.userName,
          postDate:body.postDate,
          postTitle:body.postTitle,
          authorEmail:body.authorEmail,
          postCategory:body.postCategory,
          rating:body.rating,
          tags:body.tags,
          postBody:body.postBody,
          PictureURL:body.PictureURL,
          person:body.person
        }
      }
      const result=await blogCollection.updateOne(filter,updateDoc)
      res.send(result)
      console.log(result)
    })
    //post delete 
    app.delete("/postDelete/:id",async(req,res)=>{
      const id=req.params.id
      const filter={
        _id:new ObjectId(id)
      }
      const result=await blogCollection.deleteOne(filter)
      res.send(result)
    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})