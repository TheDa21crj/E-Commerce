const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const WishList = require("./../Schema/WishList");
const UserAuth = require("./../middleware/UserAuth");
const Product = require("./../Schema/Products");

// Private || Add WishList || api/Wishlist/add
router.post(
    "/add", [
        UserAuth,
        check("id", "id is Required").not().isEmpty(),
        check("name", "name is Required").not().isEmpty(),
        check("imgSrc", "imgSrc is Required").not().isEmpty(),
        check("price", "price is Required").not().isEmpty(),
    ],
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { id, name, imgSrc, price } = req.body;
        let userID = req.userId;

        try {
            let userCheck = await WishList.findOne({ user: userID });
            if (userCheck) {
                let products = {};
                products.id = id;
                products.name = name;
                products.imgSrc = imgSrc;
                products.price = price;
                for (let i = 0; i < userCheck.Product.length; i++) {
                    if (userCheck.Product[i].id == id) {
                        return res.status(400).json({ message: "same" });
                    }
                }

                // add product
                let add = await WishList.findOneAndUpdate({ user: userID }, {
                    $push: {
                        Product: products,
                    },
                });
                return res.status(200).json("Added to Wishlist");
            } else {
                let Wish = {};
                Wish.user = userID;
                Wish.Product = {};
                Wish.Product.id = id;
                Wish.Product.name = name;
                Wish.Product.imgSrc = imgSrc;
                Wish.Product.price = price;
                let newWish = new WishList(Wish);
                await newWish.save();
                return res.status(200).json("Added to Wishlist");
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error });
        }
    }
);

router.get("/", UserAuth, async(req, res) => {
    let userID = req.userId;
    try {
        let userCheck = await WishList.findOne({ user: userID });
        return res.status(200).json({ message: userCheck.Product });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
});

module.exports = router;