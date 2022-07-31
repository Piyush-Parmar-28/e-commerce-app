//  REQUIRING MODULES -------------------------------------------------------------------------------
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var ObjectId = require("mongodb").ObjectId;
var cors = require("cors");
const port = process.env.PORT || 8000;
const multer = require("multer");
const upload = multer();
const cookieParser = require("cookie-parser");
// Middleware Auth ----------------------------------
const auth = require("./Middleware/auth");
const loginCheck = require("./Middleware/loginCheck");

// Using Mongoose Models ---------------------------------------------------------------------------------
const UserObj = require("./models/user");
const ProductObj = require("./models/product");
const ImageObj = require("./models/images");

// CREATING SERVER ----------------------------------------------------------------------------------
var app = express();
app.use(cookieParser());

//  USING MODULES -----------------------------------------------------------------------------------
app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);

// CONNECTING SERVER TO MONGODB DATABASE ----------------------------------------------------------------
mongoose.connect("mongodb://127.0.0.1:27017/ECommerce");
var db = mongoose.connection;

db.on("error", console.log.bind(console, "Connection Error"));
db.once("open", () => {
    console.log("Connection Successful");
});

// ROUTES HERE ----------------------------------------------------------------------------------------------

//  1. Home Route
app.get("/", (req, res) => {
    res.json({ message: "Backend Here" });
});

//  2. Login Route
app.post("/login", async (req, res) => {
    try {
        const user = await UserObj.findByCredentials(
            req.body.Email,
            req.body.Password
        );
        const token = await user.generateAuthToken();
        res.cookie("jwt", token);
        res.redirect("/home");
    } catch (error) {
        res.send("Invalid Credentials");
    }
});

//  3. SignUp Route
app.post("/signUp", (req, res) => {
    console.log(req.body);

    // Saving data with Mongoose Model
    const user = new UserObj({
        Fname: req.body.first_name,
        Lname: req.body.last_name,
        Email: req.body.Email,
        Password: req.body.Password,
        Phone: req.body.Phone,
        City: req.body.City,
        Country: req.body.Country,
        Address: req.body.Address,
        ImageURL:
            "https://api.multiavatar.com/" +
            Math.floor(Math.random() * 1000000) +
            ".svg",
        ImageData: 0,
    });

    user
        .save()
        .then(() => {
            console.log(user);
            res.redirect("/");
        })
        .catch((e) => {
            console.log(e);
            res.send(e);
        });
});

//  4. Get Profile Route
app.get("/getProfile", auth, async (req, res) => {
    // Access-Control-Allow-Origin will allow response to be send b/w different ports, since our server is running on different port (8000) & our frontend is running on different port (3000).
    res.set({
        "Access-Control-Allow-Origin": "*",
    });

    console.log("\n\nIn getProfile Route");

    if (typeof localStorage === "undefined" || localStorage === null) {
        var LocalStorage = require("node-localstorage").LocalStorage;
        localStorage = new LocalStorage("./scratch");
    }

    var data = localStorage.getItem("userToken");
    // console.log("The token id of the user in different route is: " + data);

    db.collection("users")
        .find({ _id: ObjectId(data) })
        .toArray(function (err, result) {
            if (err) {
                throw err;
            } else {
                // console.log(result);
            }

            res.json(result);
        });
});

//  5. Update User Details Route
app.post("/updateDetails", auth, upload.single("image"), async (req, res) => {
    res.set({
        "Access-Control-Allow-Origin": "*",
    });

    // console.log(req.body);

    var fName = req.body.first_name;
    var lName = req.body.last_name;
    var email = req.body.Email;
    var password = req.body.Password;
    var phone = req.body.Phone;
    var city = req.body.city;
    var country = req.body.country;
    var address = req.body.address;

    console.log("req.file: " + req.file);
    var image = req.file.buffer;

    console.log("\n\nIn Update Details Route.");
    console.log("fName: " + fName);

    if (typeof localStorage === "undefined" || localStorage === null) {
        var LocalStorage = require("node-localstorage").LocalStorage;
        localStorage = new LocalStorage("./scratch");
    }

    var data = localStorage.getItem("userToken");
    console.log("The token id of the user in different route is: " + data);

    if (fName != "") {
        db.collection("users").updateOne(
            { _id: ObjectId(data) },
            { $set: { Fname: fName } }
        );
    }

    if (lName != "") {
        db.collection("users").updateOne(
            { _id: ObjectId(data) },
            { $set: { Lname: lName } }
        );
    }

    if (email != "") {
        db.collection("users").updateOne(
            { _id: ObjectId(data) },
            { $set: { Email: email } }
        );
    }

    if (password != "") {
        db.collection("users").updateOne(
            { _id: ObjectId(data) },
            { $set: { Password: password } }
        );
    }

    if (phone != "") {
        db.collection("users").updateOne(
            { _id: ObjectId(data) },
            { $set: { Phone: phone } }
        );
    }

    if (city != "") {
        db.collection("users").updateOne(
            { _id: ObjectId(data) },
            { $set: { City: city } }
        );
    }

    if (country != "") {
        db.collection("users").updateOne(
            { _id: ObjectId(data) },
            { $set: { Country: country } }
        );
    }

    if (address != "") {
        db.collection("users").updateOne(
            { _id: ObjectId(data) },
            { $set: { Address: address } }
        );
    }

    if (image != 0) {
        // If we have uploaded an image, then set avatar to be null
        db.collection("users").updateOne(
            { _id: ObjectId(data) },
            { $set: { ImageURL: "" } }
        );

        // Save the uploaded image in ImageData
        db.collection("users").updateOne(
            { _id: ObjectId(data) },
            { $set: { ImageData: image } }
        );
    }

    res.redirect("/profile");
});

//  6. Save Image Route
app.post("/saveImage", auth, (req, res) => {
    var myImageURL = req.body.mySelectedImage;

    if (typeof localStorage === "undefined" || localStorage === null) {
        var LocalStorage = require("node-localstorage").LocalStorage;
        localStorage = new LocalStorage("./scratch");
    }

    var data = localStorage.getItem("userToken");
    console.log("The token id of the user in different route is: " + data);

    // console.log(myImageURL);

    // Updating the Avatar
    db.collection("users").updateOne(
        { _id: ObjectId(data) },
        { $set: { ImageURL: myImageURL } }
    );

    //  If there is a previously uploaded profile image, then remove it.
    db.collection("users").updateOne(
        { _id: ObjectId(data) },
        { $set: { ImageData: 0 } }
    );

    res.redirect("/profile");
});

//  7. Add Products Route
app.post("/addProduct", upload.single("image"), (req, res) => {
    try {
        const id = new ObjectId();

        const products = new ProductObj({
            Product: req.body.product,
            Category: req.body.category,
            Brand: req.body.brand,
            Stock: req.body.stock,
            Price: req.body.price,
            Ratings: req.body.ratings,
            Tags: req.body.tags.split(","),
            Offers: req.body.offers,
            ImageID: id,
            Desc: req.body.desc,
        });

        console.log("product Added!");

        const imageData = new ImageObj({
            id,
            Image: req.file.buffer,
        });

        imageData.save();

        console.log("Image Added!");

        products
            .save()
            .then(() => {
                res.send("product Added!");
            })
            .catch((e) => {
                res.send(e);
            });
    } catch (error) {
        res.send('error: Add image!')
    }
});

//  8. Get Image Route
app.get("/add/:id/image", async (req, res) => {
    const id = req.params.id;
    // console.log(id);
    const product = await ImageObj.findOne({ id });
    // console.log("getting Image");
    res.set("Content-Type", "image/jpg");
    // console.log(product);
    res.send(product.Image);
});

//  9. Get Products Route
app.get("/get", async (req, res) => {
    res.set({
        "Access-Control-Allow-Origin": "*",
    });
    const products = await ProductObj.getAllproducts();
    console.log("getting products");
    res.json(products);
});

//  10. Search Products Route
app.get("/SearchProducts", async (req, res) => {
    res.set({
        "Access-Control-Allow-Origin": "*",
    });
    if (!req.query.item == '') {
        console.log(req.query.item.toLowerCase());
        const products = await ProductObj.getProduct(
            req.query.item.toLowerCase().split(" ")
        );
        console.log("getting products");
        res.json(products);
    } else {
        res.redirect('/');
    }
});

//  10. Get Particular Product
app.get("/selected/:data", async (req, res) => {
    var myData = req.params.data;
    // console.log("myData is: "+ myData);

    const product = await ProductObj.findOne({ _id: ObjectId(myData) });
    var productCategory = product.Category;

    db.collection("products")
        .find({ Category: productCategory })
        .toArray((req, result) => {
            // console.log("result is: "+ result);
            res.send(result);
        });
});

//  11. Add To Cart
app.post("/AddToCart", auth, (req, res) => {
    const myProductID = req.body.cartProduct;
    console.log("product ID: "+ myProductID);

    //  Getting the object corresponding to the product ID (if it is available)
    var object
    req.user.Cart.map( (cartItem) =>{
        // console.log("cartItem.productID is: "+ cartItem.productID);
        if(cartItem.productID === myProductID){
            object= cartItem
        }
    } )
    const index= req.user.Cart.indexOf(object)

    // If the item is present in the Cart
    if (index != -1) {
        req.user.Cart[index].Quantity++;
    }
    else{
        req.user.Cart = req.user.Cart.concat({ productID: myProductID, Quantity: 1 });
    }

    req.user.save();
    res.redirect("/cart");
});

//  12. Get Cart Data
app.get("/cart", auth, (req, res) => {
    // console.log('getting cart of length: ' + req.user.Cart.length)
    // console.log("Cart Data is: "+ req.user.Cart);
    res.send(req.user.Cart);
});

//  13. Get Particular Product in cart
app.get("/getProduct/:data", async (req, res) => {
    var myData = req.params.data;
    // console.log("myData is: " + myData);

    const product = await ProductObj.findOne({ _id: ObjectId(myData) });
    res.json(product);
});

//  14. Remove Product Route
app.post("/removeProduct", auth, async (req, res) => {
    const productID= req.body.product
    // console.log("Product ID is: "+ productID);

    req.user.Cart= req.user.Cart.filter( (cartItem) =>{
        // console.log("cartItem.productID is: "+ cartItem.productID);
        return cartItem.productID != productID

    } )
    await req.user.save()
    // console.log("cart Product after removal is: "+ req.user.Cart);
    res.redirect("/cart")
})

//  14. Logout Route
app.post("/logout", auth, async (req, res) => {
    req.user.tokens = req.user.tokens.filter(
        (token) => token.token != req.cookies.jwt
    );
    await req.user.save();
    res.clearCookie("jwt");
    res.redirect("/");
});

//  15. Status Route
app.get("/status", loginCheck, (req, res) => {
    res.send(req.status)
});

// ROUTES ENDS HERE ----------------------------------------------------------------------------------------

app.listen(port);
console.log("Server Listening on port: " + port);