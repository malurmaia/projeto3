const productsCart = {
    1: {
        name: "Vestido Verde",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: ["https://a-static.mlcdn.com.br/800x560/vestido-feminino-longo-ciganinha-com-lastex-dineia-cintra/dineiacintra/0101-va-un/35b86d9b7c6998b83ebf48f38186d7a2.jpg",
        "https://a-static.mlcdn.com.br/800x560/vestido-feminino-longo-ciganinha-com-lastex-dineia-cintra/dineiacintra/0101-va-un/35b86d9b7c6998b83ebf48f38186d7a2.jpg",
        "https://a-static.mlcdn.com.br/800x560/vestido-feminino-longo-ciganinha-com-lastex-dineia-cintra/dineiacintra/0101-va-un/35b86d9b7c6998b83ebf48f38186d7a2.jpg"
    ],
        price: 400.00,
        promo_price: 300.00,
        percent: 10,
        categories: [1],
        quantity: 3,
    },
    4: {
        name: "vestido Amarelo",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: [
        "https://a-static.mlcdn.com.br/800x560/vestido-feminino-longo-ciganinha-com-lastex-dineia-cintra/dineiacintra/0101-va-un/35b86d9b7c6998b83ebf48f38186d7a2.jpg",
        "https://a-static.mlcdn.com.br/800x560/vestido-feminino-longo-ciganinha-com-lastex-dineia-cintra/dineiacintra/0101-va-un/35b86d9b7c6998b83ebf48f38186d7a2.jpg",
        "https://a-static.mlcdn.com.br/800x560/vestido-feminino-longo-ciganinha-com-lastex-dineia-cintra/dineiacintra/0101-va-un/35b86d9b7c6998b83ebf48f38186d7a2.jpg"
    ],
        price: 400.00,
        categories:[1,3],
        quantity: 2,
    },
}
const categories = {
    1: {name:"Vestido longo"},
    2: {name:"Vestido midi"},
    3: {name:"Vestido curto"}
}
module.exports = {
    productsCart,
    categories,
};