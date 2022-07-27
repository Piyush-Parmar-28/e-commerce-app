//  REQUIRING MODULES -------------------------------------------------------------------------------
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
var ObjectId = require('mongodb').ObjectId;
var cors = require('cors');
const port = process.env.PORT || 8000
const multer = require('multer');
const upload = multer()

// Using Mongoose Models ---------------------------------------------------------------------------------
const UserObj = require('./models/user')
const ProductObj = require('./models/product')
const ImageObj = require('./models/images')

// CREATING SERVER ----------------------------------------------------------------------------------
var app = express()

//  USING MODULES -----------------------------------------------------------------------------------
app.use(express.static("public"))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

// CONNECTING SERVER TO MONGODB DATABASE ----------------------------------------------------------------
mongoose.connect("mongodb://127.0.0.1:27017/ECommerce")
var db = mongoose.connection

db.on('error', console.log.bind(console, "Connection Error"))
db.once("open", () => {
    console.log("Connection Successful");
})


// ROUTES HERE ----------------------------------------------------------------------------------------------

//  1. Home Route
app.get("/", (req, res) =>{
    res.json({"message" : "Backend Here"})
})

//  2. Login Route
app.post("/login", async function (req, res) {

    res.set({
        'Access-Control-Allow-Origin': '*'
    });

    // console.log(req.body);

    var email = req.body.Email
    var password = req.body.Password

    console.log("Entered data: ");
    console.log(email);
    console.log(password);

    db.collection("users").find({ Email: email, Password: password }).toArray((err, result) => {
        if (err) {
            throw err;
        }

        if (result.length == 0) {
            console.log("Invalid Credentials!");
            return res.redirect('/')
        }

        else {
            console.log("\n\n(Login Route) User login Successful");
            const userID = result[0]._id;

            if (typeof localStorage === "undefined" || localStorage === null) {
                var LocalStorage = require('node-localstorage').LocalStorage;
                localStorage = new LocalStorage('./scratch');
            }

            localStorage.setItem('userToken', userID);

            var data = localStorage.getItem('userToken')
            console.log("(Login Route) The token id of the user is: " + data);

            res.redirect("/home")
        }
    })

})

//  3. SignUp Route
app.post("/signUp", (req, res) => {
    console.log(req.body);

    // Saving data with Mongoose Model
    const user = new UserObj({
        Fname : req.body.first_name,
        Lname : req.body.last_name,
        Email : req.body.Email,
        Password : req.body.Password,
        Phone : req.body.Phone,
        City : req.body.City,
        Country : req.body.Country,
        Address : req.body.Address,
        ImageURL: "https://api.multiavatar.com/" + Math.floor(Math.random() * 1000000) + ".svg",
        ImageData: 0
    })

    user.save().then(()=>{
        console.log(user);
        res.redirect('/')
    }).catch((e)=>{
        console.log(e);
        res.send(e)
    })

})

//  4. Get Profile Route
app.get('/getProfile', async (req, res) => {

    // Access-Control-Allow-Origin will allow response to be send b/w different ports, since our server is running on different port (8000) & our frontend is running on different port (3000).
    res.set({
        'Access-Control-Allow-Origin': '*'
    });


    console.log("\n\nIn getProfile Route");

    if (typeof localStorage === "undefined" || localStorage === null) {
        var LocalStorage = require('node-localstorage').LocalStorage;
        localStorage = new LocalStorage('./scratch');
    }

    var data = localStorage.getItem('userToken')
    // console.log("The token id of the user in different route is: " + data);

    db.collection('users').find({ _id: ObjectId(data) }).toArray(function (err, result) {
        if (err) {
            throw err;
        }
        else {
            // console.log(result);
        }

        res.json(result)

    })

})

//  5. Update User Details Route
app.post("/updateDetails", upload.single("image"), async (req, res) => {
    res.set({
        "Access-Control-Allow-Origin": "*"
    })

    // console.log(req.body);

    var fName = req.body.first_name
    var lName = req.body.last_name
    var email = req.body.Email
    var password = req.body.Password
    var phone = req.body.Phone
    var city = req.body.city
    var country = req.body.country
    var address = req.body.address

    console.log("req.file: "+ req.file);
    var image= req.file.buffer

    console.log("\n\nIn Update Details Route.");
    console.log("fName: " + fName);

    if (typeof localStorage === "undefined" || localStorage === null) {
        var LocalStorage = require('node-localstorage').LocalStorage;
        localStorage = new LocalStorage('./scratch');
    }

    var data = localStorage.getItem('userToken')
    console.log("The token id of the user in different route is: " + data);

    if (fName != "") {
        db.collection("users").updateOne({ _id: ObjectId(data) }, { $set: { Fname: fName} })
    }

    if (lName != "") {
        db.collection("users").updateOne({ _id: ObjectId(data) }, { $set: { Lname: lName} })
    }

    if (email != "") {
        db.collection("users").updateOne({ _id: ObjectId(data) }, { $set: { Email: email} })
    }

    if (password != "") {
        db.collection("users").updateOne({ _id: ObjectId(data) }, { $set: { Password: password} })
    }

    if (phone != "") {
        db.collection("users").updateOne({ _id: ObjectId(data) }, { $set: { Phone: phone} })
    }

    if (city != "") {
        db.collection("users").updateOne({ _id: ObjectId(data) }, { $set: { City: city} })
    }

    if (country != "") {
        db.collection("users").updateOne({ _id: ObjectId(data) }, { $set: { Country: country} })
    }

    if (address != "") {
        db.collection("users").updateOne({ _id: ObjectId(data) }, { $set: { Address: address} })
    }

    if (image != 0) {

        // If we have uploaded an image, then set avatar to be null
        db.collection("users").updateOne({ _id: ObjectId(data) }, { $set: { ImageURL: ""} })

        // Save the uploaded image in ImageData
        db.collection("users").updateOne({ _id: ObjectId(data) }, { $set: { ImageData: image} })
    }
  
    res.redirect("/profile")

})

//  6. Save Image Route
app.post("/saveImage", (req, res) => {
    var myImageURL = req.body.mySelectedImage

    if (typeof localStorage === "undefined" || localStorage === null) {
        var LocalStorage = require('node-localstorage').LocalStorage;
        localStorage = new LocalStorage('./scratch');
    }

    var data = localStorage.getItem('userToken')
    console.log("The token id of the user in different route is: " + data);

    // console.log(myImageURL);

    // Updating the Avatar
    db.collection("users").updateOne({ _id: ObjectId(data) }, { $set: { ImageURL: myImageURL } })

    //  If there is a previously uploaded profile image, then remove it.
    db.collection("users").updateOne({ _id: ObjectId(data) }, { $set: { ImageData: 0 } })

    res.redirect("/profile")
})

//  7. Add Products Route
app.post('/addProduct',upload.single('image'),(req,res)=>{
    const id = new ObjectId()

    const products = new ProductObj({
        Product: req.body.product,
        Category: req.body.category,
        Price: req.body.price,
        Ratings: req.body.ratings,
        Offers: req.body.offers,
        ImageID: id,
        Desc: req.body.desc,
    })

    const imageData = new ImageObj({
        id,
        Image: req.file.buffer
    })

    imageData.save()

    products.save().then(()=>{
        res.send('product Added!')
    }).catch((e)=>{
        res.send(e)
    })
})

//  8. Get Image Route
app.get('/add/:id/image',async(req,res)=>{

    const id = req.params.id
    console.log(id)
    const product = await ImageObj.findOne({id})
    console.log('getting Image')
    res.set('Content-Type','image/jpg')
    // console.log(product);
    res.send(product.Image)
})

//  9. Get Products Route
app.get('/get',async(req,res)=>{
    res.set({
        'Access-Control-Allow-Origin': '*'
    });
    const products = await ProductObj.getAllproducts();
    console.log(products);
    res.json(products)
})

//  10. Get Particular Product
app.get("/selected/:data", async(req, res) =>{
    var myData= req.params.data;
    // console.log("myData is: "+ myData);

    const product= await ProductObj.findOne( {_id: ObjectId(myData) } )
    var productCategory= product.Category;

    var relatedProducts;
    db.collection("products").find( {Category: productCategory} ).toArray( (req, result) =>{
        relatedProducts= result;
        console.log("result is: "+ result);
        res.send(result)
    } )

    var productArray= [product]
    productArray= productArray.concat(relatedProducts)
    
    console.log("hello: "+ relatedProducts)
    // res.send(productArray)
})

// ROUTES ENDS HERE ----------------------------------------------------------------------------------------

app.listen(port)
console.log("Server Listening on port: " + port);