const products = {
    1: {
        name: "Vestido Verde",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: ["https://secretocloset.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/o/foto-16-04-2021-14-37-17.jpg-tt.jpg",
        "https://cf.shopee.com.br/file/5bdb2eb98a50d00b0c127fc85c4b528e",
        "https://secretocloset.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/o/foto-16-04-2021-14-37-17.jpg-tt.jpg"
    ],
        price: 450.00,
        promo_price: 300.00,
        percent: 10,
        categories: [1],
    },
    2: {
        name: "Vestido Coral",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: ["https://i.pinimg.com/736x/cd/ff/c0/cdffc0d0ffbe1925b55865ab327f2157.jpg",
        "https://www.prontaprafesta.com/wp-content/uploads/2019/05/vestido-coral-para-madrinha-2.jpg",
        "https://i.pinimg.com/736x/4e/e6/d1/4ee6d1e7e1dba9d940ee30574cf8c20c.jpg"
    ],
        price: 300.00,
        categories:[1,3],
    },
    3: {
        name: "Vestido Rosê",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: ["https://i.pinimg.com/564x/5e/5e/b4/5e5eb495e04a72d098f6b5be1d5c48d8.jpg",
        "https://i.pinimg.com/564x/e0/bd/d0/e0bdd064a5e660cc2a1adf5dc0b400e4.jpg",
        "https://i.pinimg.com/736x/7f/8c/1d/7f8c1d02b0dcef811a6afd72342ba8c7.jpg"
    ],
        price: 500.00,
        promo_price: 300.00,
        percent:10,
        categories:[2,3],
    },
    4: {
        name: "Vestido Amarelo",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: [
        "https://images.tcdn.com.br/img/img_prod/791282/vestido_multiformas_amarelo_461_6_c68af2e23b3bc0852e00dd933c11014b_20220606105716.jpg",
        "https://images.tcdn.com.br/img/img_prod/791282/vestido_multiformas_amarelo_2_567_1_be58ec3a97be79df45e770340d34a8ee_20220606105721.jpg",
        "https://images.tcdn.com.br/img/img_prod/791282/vestido_multiformas_amarelo_laser_lemon_469_7_1408ac9bdd08d31a1da7e08afc47b848_20220606105716.jpg"
    ],
        price: 400.00,
        categories:[3],
    },
   5: {
        name: "Vestido Preto",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: [
        "https://img.elo7.com.br/product/zoom/2D5BAD5/vestido-preto-longo-vestido.jpg",
        "https://img.elo7.com.br/product/zoom/2D599E8/vestido-preto-longo-vestido-festa.jpg",
        "https://img.elo7.com.br/product/zoom/2D5BA60/vestido-preto-longo-vestido-longo.jpg"
    ],
        price: 500.00,
        categories:[2,3],
    },
    6: {
        name: "Vestido Rosa",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: [
        "https://26985.cdn.simplo7.net/static/26985/sku/vestido-longo-vestido-de-festa-palace-rosa--p-1631366615751.jpg",
        "https://www.prontaprafesta.com/wp-content/uploads/2018/11/vestido-longo-rosa-3.jpg",
        "https://i.shafacdn.net/images/322279-65-310-430-a0VRZ30OZ4Q.jpg"
    ],
        price: 600.00,
        categories:[1,2],
    },
    7: {
        name: "vestido Gold",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: [
        "https://www.myclosett.com/upload/foto/produto_261_7fa29c82a52fb8b00559481ea6b6eefa_g.jpg",
        "https://www.myclosett.com/upload/foto/produto_261_ec2f1e404c118bedadd1db87ef7096b5_g.jpg",
        "https://www.myclosett.com/upload/foto/produto_261_2e85dc0b45aba07f0790b784dd98709c_g.jpg"
    ],
        price: 200.00,
        categories:[1,3],
    },
    8: {
        name: "Vestido bufante",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: [
        "https://www.prontaprafesta.com/wp-content/uploads/2020/01/vestido-longo-com-manga-bufante-de-organza.jpg",
        "https://bridefeed.com/wp-content/uploads/2020/11/1605443435_431_Party-dress-with-puff-sleeve-2020-trend.jpg",
        "https://img.bestdealplus.com/ae04/kf/H1b4fd935b19e4aa59b93c31798483649h.jpg"
    ],
        price: 400.00,
        categories:[1,3],
    },
    9: {
        name: "Vestido Cetim",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: ["https://i.pinimg.com/originals/79/82/53/798253e7d5a243d422ae1f301d74241b.jpg",
        "https://www.prontaprafesta.com/wp-content/uploads/2020/03/vestido-de-festa-pink-com-mangas-bufantes.jpg",
        "https://cdn.awsli.com.br/800x800/1049/1049366/produto/165593345/46ddcea097.jpg"
    ],
        price: 450.00,
        promo_price: 300.00,
        percent: 10,
        categories: [1],
    },
    10: {
        name: "Vestido Roxo",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: ["https://cdn.shopify.com/s/files/1/0020/7234/6670/products/VTCT0383V22-Vestido-Curto-Manga-Bufante-Zig-Zag-Lilas-Adriana-Degreas-Inverno-2022_3_2_2_cfb5dfdd-ac27-4394-8426-47f9a6122935_800x.jpg?v=1663855579",
        "https://cdn.shopify.com/s/files/1/0020/7234/6670/products/VTCT0383V22-Vestido-Curto-Manga-Bufante-Zig-Zag-Fucsia-Adriana-Degreas-Inverno-2022_2_800x.jpg?v=1663855579",
        "https://a-static.mlcdn.com.br/800x560/vestido-feminino-longo-ciganinha-com-lastex-dineia-cintra/dineiacintra/0101-va-un/35b86d9b7c6998b83ebf48f38186d7a2.jpg"
    ],
        price: 300.00,
        categories:[1,3],
    },
    11: {
        name: "Vestido Coral",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: ["https://i.pinimg.com/736x/cd/ff/c0/cdffc0d0ffbe1925b55865ab327f2157.jpg",
        "https://www.prontaprafesta.com/wp-content/uploads/2019/05/vestido-coral-para-madrinha-2.jpg",
        "https://i.pinimg.com/736x/4e/e6/d1/4ee6d1e7e1dba9d940ee30574cf8c20c.jpg"
    ],
        price: 500.00,
        promo_price: 300.00,
        percent:10,
        categories:[2,3],
    },
    12: {
        name: "Vestido Rosa",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: [
        "https://26985.cdn.simplo7.net/static/26985/sku/vestido-longo-vestido-de-festa-palace-rosa--p-1631366615751.jpg",
        "https://www.prontaprafesta.com/wp-content/uploads/2018/11/vestido-longo-rosa-3.jpg",
        "https://i.shafacdn.net/images/322279-65-310-430-a0VRZ30OZ4Q.jpg"
    ],
        price: 400.00,
        categories:[3],
    },
   13: {
    name: "Vestido Amarelo",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: [
    "https://images.tcdn.com.br/img/img_prod/791282/vestido_multiformas_amarelo_461_6_c68af2e23b3bc0852e00dd933c11014b_20220606105716.jpg",
    "https://images.tcdn.com.br/img/img_prod/791282/vestido_multiformas_amarelo_2_567_1_be58ec3a97be79df45e770340d34a8ee_20220606105721.jpg",
    "https://images.tcdn.com.br/img/img_prod/791282/vestido_multiformas_amarelo_laser_lemon_469_7_1408ac9bdd08d31a1da7e08afc47b848_20220606105716.jpg"
    ],
        price: 500.00,
        categories:[2,3],
    },
    14: {
        name: "Vestido Rosa",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: [
        "https://a-static.mlcdn.com.br/800x560/vestido-feminino-longo-ciganinha-com-lastex-dineia-cintra/dineiacintra/0101-va-un/35b86d9b7c6998b83ebf48f38186d7a2.jpg",
        "https://a-static.mlcdn.com.br/800x560/vestido-feminino-longo-ciganinha-com-lastex-dineia-cintra/dineiacintra/0101-va-un/35b86d9b7c6998b83ebf48f38186d7a2.jpg",
        "https://a-static.mlcdn.com.br/800x560/vestido-feminino-longo-ciganinha-com-lastex-dineia-cintra/dineiacintra/0101-va-un/35b86d9b7c6998b83ebf48f38186d7a2.jpg"
    ],
        price: 600.00,
        categories:[1,2],
    },
    15: {
        name: "vestido Amarelo",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: [
        "https://a-static.mlcdn.com.br/800x560/vestido-feminino-longo-ciganinha-com-lastex-dineia-cintra/dineiacintra/0101-va-un/35b86d9b7c6998b83ebf48f38186d7a2.jpg",
        "https://a-static.mlcdn.com.br/800x560/vestido-feminino-longo-ciganinha-com-lastex-dineia-cintra/dineiacintra/0101-va-un/35b86d9b7c6998b83ebf48f38186d7a2.jpg",
        "https://a-static.mlcdn.com.br/800x560/vestido-feminino-longo-ciganinha-com-lastex-dineia-cintra/dineiacintra/0101-va-un/35b86d9b7c6998b83ebf48f38186d7a2.jpg"
    ],
        price: 200.00,
        categories:[1,3],
    },
    16: {
        name: "Vestido Roxo",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: ["https://cdn.shopify.com/s/files/1/0020/7234/6670/products/VTCT0383V22-Vestido-Curto-Manga-Bufante-Zig-Zag-Lilas-Adriana-Degreas-Inverno-2022_3_2_2_cfb5dfdd-ac27-4394-8426-47f9a6122935_800x.jpg?v=1663855579",
        "https://cdn.shopify.com/s/files/1/0020/7234/6670/products/VTCT0383V22-Vestido-Curto-Manga-Bufante-Zig-Zag-Fucsia-Adriana-Degreas-Inverno-2022_2_800x.jpg?v=1663855579",
        "https://a-static.mlcdn.com.br/800x560/vestido-feminino-longo-ciganinha-com-lastex-dineia-cintra/dineiacintra/0101-va-un/35b86d9b7c6998b83ebf48f38186d7a2.jpg"
    ],
        price: 400.00,
        categories:[1,3],
    },
}
const categories = {
    1: {name:"Vestido longo"},
    2: {name:"Vestido midi"},
    3: {name:"Vestido curto"}
}
module.exports = {
    products,
    categories,
};