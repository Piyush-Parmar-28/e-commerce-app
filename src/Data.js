import axios from 'axios';

//  SINCE THE AXIOS CODE IS ASYNCHRONOUS, HENCE IT WILL SEND categoriesData before it has been loaded with res.data
// var categoriesData= [];

// const url = "https://free-store-api.herokuapp.com/categories"

// axios.get(url).then(res => {
//     categoriesData= res.data
//     console.log(res.data);
//     return categoriesData
// })

// console.log("categoriesData: "+ categoriesData);

var categoryData = [
    {
        id: 1,
        src: "img/categories/electronics.jpg",
        altText: "Image Loading...",
        label: "Electronics"

    },

    {
        id: 2,
        src: "img/categories/study.jpg",
        altText: "Image Loading...",
        label: "Study"

    },

    {
        id: 3,
        src: "img/categories/fashion.jpg",
        altText: "Image Loading...",
        label: "Fashion"

    },

    {
        id: 4,
        src: "img/categories/kitchen.jpg",
        altText: "Image Loading...",
        label: "Kitchen"

    },

    {
        id: 5,
        src: "img/categories/beauty.jpg",
        altText: "Image Loading...",
        label: "Beauty"

    },

    {
        id: 6,
        src: "img/categories/sports.jpg",
        altText: "Image Loading...",
        label: "Sports"
    },

    {
        id: 7,
        src: "img/categories/toys.jpg",
        altText: "Image Loading...",
        label: "Toys"
    },

    {
        id: 8,
        src: "img/categories/homeDecor.jpg",
        altText: "Image Loading...",
        label: "Home Decor"
    },
]

var sliderData = [
    {
        id: 1,
        src: "img/slider/slide-1.jpg",
        altText: "img1",
    },

    {
        id: 2,
        src: "img/slider/slide-2.jpg",
        altText: "img2",
    },

    {
        id: 3,
        src: "img/slider/slide-3.jpg",
        altText: "img3",
    }, 

    {
        id: 4,
        src: "img/slider/slide-4.jpg",
        altText: "img4",
    }, 

    {
        id: 6,
        src: "img/slider/slide-6.png",
        altText: "img5",
    },

    {
        id: 7,
        src: "img/slider/slide-7.png",
        altText: "img5",
    },

    {
        id: 8,
        src: "img/slider/slide-8.png",
        altText: "img5",
    },

    {
        id: 9,
        src: "img/slider/slide-9.png",
        altText: "img5",
    }
]

var profileAvatar = [
    {
        id: 1,
        src: "https://api.multiavatar.com/" + Math.floor(Math.random() * 1000000) + ".svg",
        altText: "Image Loading...",

    },

    {
        id: 2,
        src: "https://api.multiavatar.com/" + Math.floor(Math.random() * 1000000) + ".svg",
        altText: "Image Loading...",

    },

    {
        id: 3,
        src: "https://api.multiavatar.com/" + Math.floor(Math.random() * 1000000) + ".svg",
        altText: "Image Loading...",

    },

    {
        id: 4,
        src: "https://api.multiavatar.com/" + Math.floor(Math.random() * 1000000) + ".svg",
        altText: "Image Loading...",

    },

    {
        id: 5,
        src: "https://api.multiavatar.com/" + Math.floor(Math.random() * 1000000) + ".svg",
        altText: "Image Loading...",

    },

    {
        id: 6,
        src: "https://api.multiavatar.com/" + Math.floor(Math.random() * 1000000) + ".svg",
        altText: "Image Loading...",
    },
]



export { sliderData, profileAvatar, categoryData }