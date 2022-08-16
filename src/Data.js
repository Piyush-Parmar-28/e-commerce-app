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

var sliderData = [
    {
        id: 1,
        src: "img/slider/1.png",
        altText: "img1",
    },

    {
        id: 2,
        src: "img/slider/2.png",
        altText: "img2",
    },

    {
        id: 3,
        src: "img/slider/3.png",
        altText: "img3",
    }, 

    {
        id: 4,
        src: "img/slider/4.png",
        altText: "img4",
    }, 

    {
        id: 5,
        src: "img/slider/5.png",
        altText: "img5",
    },

    {
        id: 6,
        src: "img/slider/6.png",
        altText: "img6",
    },

    {
        id: 7,
        src: "img/slider/7.png",
        altText: "img7",
    }
]

var productsData = [
    {
        id: 1,
        src: "img/nature/image1.jpg",
        altText: "img1",
        label: "First label",
        desc: "Some representative placeholder content for the first slide."
    },

    {
        id: 2,
        src: "img/nature/image2.jpg",
        altText: "img2",
        label: "First label",
        desc: "Some representative placeholder content for the first slide."
    },

    {
        id: 3,
        src: "img/nature/image3.jpg",
        altText: "img3",
        label: "First label",
        desc: "Some representative placeholder content for the first slide."
    },

    {
        id: 4,
        src: "img/nature/image4.jpg",
        altText: "img4",
        label: "First label",
        desc: "Some representative placeholder content for the first slide."
    },

    {
        id: 5,
        src: "img/nature/image5.jpg",
        altText: "img5",
        label: "First label",
        desc: "Some representative placeholder content for the first slide."
    },

    {
        id: 6,
        src: "img/nature/image6.jpg",
        altText: "img6",
        label: "First label",
        desc: "Some representative placeholder content for the first slide."
    },
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

var categoryData = [
    {
        id: 1,
        src: "img/categories/electronics.jpg",
        altText: "Image Loading...",
        label: "Electronics",
        category: "electronics"
    },

    {
        id: 2,
        src: "img/categories/study.jpg",
        altText: "Image Loading...",
        label: "Study",
        category: "study"
    },

    {
        id: 3,
        src: "img/categories/fashion.jpg",
        altText: "Image Loading...",
        label: "Fashion",
        category: "fashion"
    },

    {
        id: 4,
        src: "img/categories/kitchen.jpg",
        altText: "Image Loading...",
        label: "Kitchen",
        category: "kithen"
    },

    {
        id: 5,
        src: "img/categories/beauty.jpg",
        altText: "Image Loading...",
        label: "Beauty",
        category: "beauty"
    },

    {
        id: 6,
        src: "img/categories/sports.jpg",
        altText: "Image Loading...",
        label: "Sports",
        category: "soprts"
    },

    {
        id: 7,
        src: "img/categories/toys.jpg",
        altText: "Image Loading...",
        label: "Toys",
        category: "toys"
    },

    {
        id: 8,
        src: "img/categories/homeDecor.jpg",
        altText: "Image Loading...",
        label: "Home Decor",
        category: "home"
    },
]

export { sliderData, productsData, profileAvatar, categoryData }