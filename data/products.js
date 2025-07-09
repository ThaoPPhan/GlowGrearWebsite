/*
import {formatCurrency} from '../scripts/utils/money.js';

export function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  return matchingProduct;
}
class Product {
  id;
  image;
  name;
  rating;
  priceCents;

  constructor(productDetails) {
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.rating = productDetails.rating;
    this.priceCents = productDetails.priceCents;
  }

  getStarsUrl() {
    return `images/ratings/rating-${this.rating.stars * 10}.png`;
  }

  getPrice() {
    return `$${formatCurrency(this.priceCents)}`;
  }

  extraInfoHTML() {
    return '';
  }
}

export let products = [];

export function loadProductsFetch() {
  const promise = fetch(
    'https://supersimplebackend.dev/products'
  ).then((response) => {
    return response.json();
  }).then((productsData) => {
    products = productsData.map((productDetails) => {
      return new Product(productDetails);
    });

    console.log('load products');
  }).catch((error) => {
    console.log('Unexpected error. Please try again later.');
  });

  return promise;
}

export function loadProducts(fun) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    products = JSON.parse(xhr.response).map((productDetails) => {
      return new Product(productDetails);
    });

    console.log('load products');

    fun();
  });

  xhr.addEventListener('error', (error) => {
    console.log('Unexpected error. Please try again later.');
  });

  xhr.open('GET', 'https://supersimplebackend.dev/products');
  xhr.send();
}

*/
export function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  return matchingProduct;
}

export const products = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/1.jpg",
    name: "Gentle Foaming Cleanser",
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 1090,
    keywords: [
      "cleansers"
    ]
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/products/2.jpg",
    name: "Gel Cleanser for Oily Skin",
    rating: {
      stars: 4,
      count: 127
    },
    priceCents: 2095,
    keywords: [
      "cleansers"
    ]
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "images/products/3.jpg",
    name: "Cream Cleanser for Dry Skin",
    rating: {
      stars: 4.5,
      count: 56
    },
    priceCents: 799,
    keywords: [
      "cleansers"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "images/products/4.jpg",
    name: "Micellar Water",
    rating: {
      stars: 5,
      count: 2197
    },
    priceCents: 1899,
    keywords: [
      "cleansers"
    ]
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: "images/products/5.jpg",
    name: "Oil-Based Cleanser (for double cleansing)",
    rating: {
      stars: 4,
      count: 37
    },
    priceCents: 2067,
    keywords: [
      "cleansers"
    ]
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: "images/products/6.jpg",
    name: "Exfoliating Cleanser (with AHA/BHA)",
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      "cleansers"
    ]
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: "images/products/7.jpg",
    name: "Hydrating Toner (with hyaluronic acid)",
    rating: {
      stars: 4.5,
      count: 317
    },
    priceCents: 2400,
    keywords: [
      "toners",
      "mists"
    ]
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: "images/products/8.jpg",
    name: "Balancing Toner (with witch hazel)",
    rating: {
      stars: 4.5,
      count: 144
    },
    priceCents: 3599,
    keywords: [
      "toners",
      "mists"
    ]
  },
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    image: "images/products/9.jpg",
    name: "Exfoliating Toner (with glycolic acid)",
    rating: {
      stars: 4.5,
      count: 305
    },
    priceCents: 2899,
    keywords: [
      "toners",
      "mists"
    ]
  },
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    image: "images/products/10.jpg",
    name: "Calming Facial Mist (with rose water)",
    rating: {
      stars: 4,
      count: 89
    },
    priceCents: 3390,
    keywords: [
      "toners",
      "mists"
    ]
  },
  {
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    image: "images/products/11.jpg",
    name: "Vitamin C Mist",
    rating: {
      stars: 4.5,
      count: 235
    },
    priceCents: 5999,
    keywords: [
      "toners",
      "mists"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    image: "images/products/12.jpg",
    name: "Vitamin C Brightening Serum",
    rating: {
      stars: 4.5,
      count: 30
    },
    priceCents: 1560,
    keywords: [
      "serums",
      "boosters"
    ]
  },
  {
    id: "04701903-bc79-49c6-bc11-1af7e3651358",
    image: "images/products/13.jpg",
    name: "Niacinamide Serum (for pores and oil)",
    rating: {
      stars: 4.5,
      count: 562
    },
    priceCents: 2499,
    keywords: [
      "serums",
      "boosters"
    ]
  },
  {
    id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    image: "images/products/14.jpg",
    name: "Hyaluronic Acid Hydration Booster",
    rating: {
      stars: 4.5,
      count: 232
    },
    priceCents: 4599,
    keywords: [
      "serums",
      "boosters"
    ]
  },
  {
    id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    image: "images/products/15.jpg",
    name: "Retinol Serum (anti-aging)",
    rating: {
      stars: 4,
      count: 160
    },
    priceCents: 1699,
    keywords: [
      "serums",
      "boosters"
    ]
  },
  {
    id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    image: "images/products/16.jpg",
    name: "Peptide Firming Serum",
    rating: {
      stars: 5,
      count: 846
    },
    priceCents: 3074,
    keywords: [
      "serums",
      "boosters"
    ]
  },
  {
    id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
    image: "images/products/17.jpg",
    name: "Salicylic Acid Serum (acne control)",
    rating: {
      stars: 4,
      count: 99
    },
    priceCents: 2374,
    keywords: [
      "serums",
      "boosters"
    ]
  },
  {
    id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    image: "images/products/18.jpg",
    name: "Centella Asiatica (Cica) Repair Serum",
    rating: {
      stars: 4,
      count: 215
    },
    priceCents: 2200,
    keywords: [
      "serums",
      "boosters"
    ]
  },
  {
    id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
    image: "images/products/19.jpg",
    name: "Sugar Face Scrub",
    rating: {
      stars: 4.5,
      count: 52
    },
    priceCents: 1799,
    keywords: [
      "exfoliators"
    ]
  },
  {
    id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
    image: "images/products/20.jpg",
    name: "Clay-Based Exfoliant Mask",
    rating: {
      stars: 4.5,
      count: 2465
    },
    priceCents: 1374,
    keywords: [
      "exfoliators"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
    image: "images/products/21.jpg",
    name: "Enzyme Exfoliant",
    rating: {
      stars: 4.5,
      count: 119
    },
    priceCents: 1250,
    keywords: [
      "exfoliators"
    ]
  },
  {
    id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
    image: "images/products/22.jpg",
    name: "AHA/BHA Liquid Exfoliant",
    rating: {
      stars: 4,
      count: 326
    },
    priceCents: 2640,
    keywords: [
      "exfoliators"
    ]
  },
  {
    id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    image: "images/products/23.jpg",
    name: "Charcoal Detox Mask",
    rating: {
      stars: 4.5,
      count: 2556
    },
    priceCents: 1599,
    keywords: [
      "face", 
      "massk"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
    image: "images/products/24.jpg",
    name: "Clay Purifying Mask",
    rating: {
      stars: 4.5,
      count: 2286
    },
    priceCents: 8300,
    keywords: [
      "face", 
      "massk"
    ]
  },
  {
    id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
    image: "images/products/25.jpg",
    name: "Hydrating Sheet Mask",
    rating: {
      stars: 4,
      count: 456
    },
    priceCents: 2399,
    keywords: [
      "face", 
      "massk"
    ]
  },
  {
    id: "d2785924-743d-49b3-8f03-ec258e640503",
    image: "images/products/26.jpg",
    name: "Overnight Sleeping Mask",
    rating: {
      stars: 5,
      count: 83
    },
    priceCents: 1250,
    keywords: [
      "face", 
      "massk"
    ]
  },
  {
    id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
    image: "images/products/27.jpg",
    name: "Peel-Off Mask",
    rating: {
      stars: 4.5,
      count: 9017
    },
    priceCents: 2290,
    keywords: [
      "face", 
      "massk"
    ]
  },
  {
    id: "1c079479-8586-494f-ab53-219325432536",
    image: "images/products/28.jpg",
    name: "Lightweight Gel Moisturizer",
    rating: {
      stars: 4,
      count: 229
    },
    priceCents: 3890,
    keywords: [
      "moisturizers"
    ]
  },
  {
    id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
    image: "images/products/29.jpg",
    name: "Deep Hydration Cream",
    rating: {
      stars: 3.5,
      count: 42
    },
    priceCents: 1690,
    keywords: [
      "moisturizers"
    ]
  },
  {
    id: "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
    image: "images/products/30.jpg",
    name: "Anti-Aging Night Cream",
    rating: {
      stars: 4.5,
      count: 511
    },
    priceCents: 6797,
    keywords: [
      "moisturizers"
    ]
  },
  {
    id: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
    image: "images/products/31.jpg",
    name: "Soothing Aloe Vera Moisturizer",
    rating: {
      stars: 4.5,
      count: 130
    },
    priceCents: 1649,
    keywords: [
      "moisturizers"
    ]
  },
  {
    id: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
    image: "images/products/32.jpg",
    name: "Water-Based Moisturizer",
    rating: {
      stars: 4.5,
      count: 248
    },
    priceCents: 2400,
    keywords: [
      "moisturizers"
    ]
  },
  {
    id: "d339adf3-e004-4c20-a120-40e8874c66cb",
    image: "images/products/33.jpg",
    name: "Ceramide Barrier Repair Cream",
    rating: {
      stars: 4.5,
      count: 117
    },
    priceCents: 2400,
    keywords: [
      "moisturizers"
    ]
  },
  {
    id: "d37a651a-d501-483b-aae6-a9659b0757a0",
    image: "images/products/34.jpg",
    name: "Mineral Sunscreen SPF 30",
    rating: {
      stars: 4,
      count: 126
    },
    priceCents: 2899,
    keywords: [
      "sun creme",
      "sun protection"
    ]
  },
  {
    id: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
    image: "images/products/35.jpg",
    name: "Lightweight Daily SPF 50",
    rating: {
      stars: 4.5,
      count: 1211
    },
    priceCents: 2250,
    keywords: [
      "sun creme",
      "sun protection"
    ]
  },
  {
    id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
    image: "images/products/36.jpg",
    name: "Tinted Sunscreen",
    rating: {
      stars: 4.5,
      count: 363
    },
    priceCents: 3099,
    keywords: [
      "sun creme",
      "sun protection"
    ]
  },
  {
    id: "8a53b080-6d40-4a65-ab26-b24ecf700bce",
    image: "images/products/37.jpg",
    name: "Rosehip Facial Oil",
    rating: {
      stars: 4.5,
      count: 93
    },
    priceCents: 2110,
    keywords: [
      "oils",
      "balms"
    ]
  },
  {
    id: "10ed8504-57db-433c-b0a3-fc71a35c88a1",
    image: "images/products/38.jpg",
    name: "Squalane Oil",
    rating: {
      stars: 4,
      count: 89
    },
    priceCents: 3390,
    keywords: [
      "oils",
      "balms"
    ]
  },
  {
    id: "77a845b1-16ed-4eac-bdf9-5b591882113d",
    image: "images/products/39.jpg",
    name: "Cleansing Balm",
    rating: {
      stars: 4,
      count: 3
    },
    priceCents: 10747,
    keywords: [
      "oils",
      "balms"
    ]
  },
  {
    id: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
    image: "images/products/40.jpg",
    name: "Lip Scrub (Sugar or Coffee)",
    rating: {
      stars: 5,
      count: 679
    },
    priceCents: 3899,
    keywords: [
      "lip care",
      "lip"
    ]
  },
  {
    id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
    image: "images/products/41.jpg",
    name: "Lip Balm with SPF",
    rating: {
      stars: 4.5,
      count: 1045
    },
    priceCents: 5799,
    keywords: [
      "lip care",
      "lip"
    ]
  },
  {
    id: "bc2847e9-5323-403f-b7cf-57fde044a955",
    image: "images/products/42.jpg",
    name: "Overnight Lip Mask",
    rating: {
      stars: 4.5,
      count: 3157
    },
    priceCents: 2400,
    keywords: [
      "lip care",
      "lip"
    ]
  }
];
