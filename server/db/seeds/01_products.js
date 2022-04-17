exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('products')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('products').insert([
        {
          id: 1,
          img: 'https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png',
          name: 'Guitar vintage crusher tee',
          price: 25,
        },
        {
          id: 2,
          img: 'https://www.pngarts.com/files/4/Polo-Shirt-Transparent-Background-PNG.png',
          name: 'Black polo',
          price: 10,
        },
        {
          id: 3,
          img: 'https://www.pngarts.com/files/1/Socks-Transparent-Image.png',
          name: 'Socks',
          price: 500,
        },
        {
          id: 4,
          img: 'https://www.pngarts.com/files/6/Jeans-PNG-Image-Transparent-Background.png',
          name: 'Jeans',
          price: 75,
        },
        {
          id: 5,
          img: 'https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png',
          name: 'Tote bag',
          price: 5.5,
        },
        {
          id: 6,
          img: 'https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png',
          name: 'Rocket vintage chill cap',
          price: 20.5,
        },
        {
          id: 7,
          img: 'https://www.pngarts.com/files/9/Black-Hoodie-Pullover-PNG-Transparent-Photo.png',
          name: 'Hoodie',
          price: 25,
        },
        {
          id: 8,
          img: 'https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png',
          name: 'Coat',
          price: 75,
        },
      ])
    })
}
