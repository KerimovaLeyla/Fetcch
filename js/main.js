//  Task 1. Ən bahalı məhsul 

// const productDiv = document.getElementById('product');

// fetch('https://northwind.vercel.app/api/products')
//   .then(res => res.json())
//   .then(data => {
//     if (data.length > 0) {
//       let enbahalimehsul = data[0];

//       data.forEach(mehsul => {
//         if (mehsul.unitPrice > enbahalimehsul.unitPrice) {
//           enbahalimehsul = mehsul;
//         }
//       });
//       const mehsulElement = document.createElement('div');
//       mehsulElement.textContent = `Ən bahalı məhsul: ${enbahalimehsul.name}, Qiymət: ${enbahalimehsul.unitPrice}`;

//       productDiv.appendChild(mehsulElement);
//     } else {
//       console.log("Mehsul tapilmadi.");
//     }
//   });



// Task 2. Ortalama stok miqdarı


// const productDiv = document.getElementById('product');

// fetch('https://northwind.vercel.app/api/products')
//   .then(res => res.json())
//   .then(data => {
//     if (data.length > 0) {
//       let ümumiStock = 0;
//       data.forEach(mehsul => {
//         ümumiStock += mehsul.unitsInStock;
//       });
//       const ortalamaStock = ümumiStock / data.length;
//       const ortalamaStockElement = document.createElement('div');
//       ortalamaStockElement.textContent = `Ortalama stok miqdarı: ${ortalamaStock.toFixed(2)}`;
//       productDiv.appendChild(ortalamaStockElement);
//     } else {
//       console.log("Mehsul tapilmadi.");
//     }
//   })




// Task 3. “C” ilə başlayan məhsullar 

// const names = document.getElementById('name');

// fetch('https://northwind.vercel.app/api/products')
//   .then(res => res.json())
//   .then(data => {
//     const adlar = data.map(product => product.name);
//     const Cilebaslayanadlar = adlar.filter(name => name.startsWith('C'));

//     Cilebaslayanadlar.forEach(name => {
//       const nameElement = document.createElement('div');
//       nameElement.textContent = name;
//       names.appendChild(nameElement);
//     })
//   })
 



// // Task 4.“London” şəhərindəki müştəriləri console a yaz 

// fetch('https://northwind.vercel.app/api/customers')
//     .then(res => res.json())
//     .then(data => {
//         let a = data.filter(item => item.address.city == "London")
//         console.log(a);
//     });
// const consumer=document.getElementById('consumer')
// fetch('https://northwind.vercel.app/api/customers')
//     .then(res => res.json())
//     .then(data => {
//        const london = data.filter(item => item.address.city === "London");
//        london.forEach(item => {
//             console.log(item.contactName);
//        });
//     });



// Task 5.Region NULL olan nə qədər customer var?

// const say = document.getElementById('say');

// fetch('https://northwind.vercel.app/api/customers')
//   .then(res => res.json())
//   .then(data => {
//     const sayi = data.filter(item => item.address.region === "NULL");
//     say.textContent = `umumi sayı: ${sayi.length}`;
//   })




//  Task 6.Id-si 1 olan userin nə qədər postu var?
// const posts = document.getElementById('posts');
// const say=document.getElementById('say')

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(res => res.json())
//   .then(data => {
//     const sayi = data.filter(item => item.userId === 1);
//     say.textContent = `umumi sayı: ${sayi.length}`;
//   })




// Task 7.1 nömrəli albümdə nə qədər fotoqraf var?

// fetch('https://jsonplaceholder.typicode.com/albums')
//     .then(res => res.json())
//     .then(data => {
//         let a = data.filter(item => item.userId == 1)
//         console.log(a.length);
//     });

