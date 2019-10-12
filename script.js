// var btn = document.getElementById('btn');
// var para = document.getElementById('para');


// btn.addEventListener('click', function() {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', 'http://localhost:3000/country', true);

//     xhr.onload = function() {
//         var myData = JSON.parse(xhr.responseText);
//         renderHTML(myData)
//     }
//     xhr.send();
// })

// function renderHTML(data) {
//     var htmlString = '';
//     for (i = 0; i < data.length; i++) {
//         // htmlString += "<p>" + data[i].name + " is a " + data[i].species + "</p>"
//         htmlString += "<p>" + "My Country Name is :" + "<b>" + data[i].name + "</b>" + " and Capital :" + data[i].capital + "</p>"
//     }
//     // para.insertAdjacentHTML('beforeend', htmlString)
//     para.innerHTML = htmlString
}





// function Router(path, name) {
//     this.path = path;
//     this.name = name;
// }

// var myFirstRouter = new Router('myFirstRouter', [{
//         path: '/',
//         name: 'Root'
//     },
//     {
//         path: '/about',
//         name: 'About'
//     },
//     {
//         path: '/contact',
//         name: 'Contact'
//     }
// ])

// console.log(myFirstRouter)