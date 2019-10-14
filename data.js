//import axios from "axios";

window.onload = function() {

    //console.log('DOM Has Loaded')
    var initialState = null;




    // Create Router Constructor

    var view = document.getElementById('view');

    // grab all active attribute routes
    var activeRoutes = Array.from(document.querySelectorAll('[route]'));

    function navigate(event) {
        var route = event.target.attributes[0].value;
        var routeInfo = myFirstRouter.routes.filter(function(r) {
            return r.path === route;
        })[0];
        if (!routeInfo) {
            //console.log('No routes')
            window.history.pushState({}, '', 'error')
            view.innerHTML = 'No route exists with this path'
        } else {
            window.history.pushState({}, '', routeInfo.path);
            //console.log(window.history);
            console.log(initialState);
            view.innerHTML = 'You have clicked the ' + routeInfo.name + ' route'
        }
    };


    // Add event listeners
    activeRoutes.forEach(function(route) {
        route.addEventListener('click', navigate, false);
    })

    var Router = function(name, routes) {
        return {
            name: name,
            routes: routes
        }
    };

    var myFirstRouter = new Router('myFirstRouter', [{
        path: '/',
        name: 'Root'
    }, {
        path: '/about',
        name: 'About'
    }, {
        path: '/contact',
        name: 'Contact'
    }, {
        path: '/country',
        name: 'Country'
    }, {
        path: '/country/?code',
        name: 'Country_code'
    }]);
    // console.log(myFirstRouter)
    var currentPath = window.location.pathname;
    var param = window.location.search.slice(1);
    //var paramOne = window.location.pathname.split("?")
    console.log(param);
    //console.log("paramOne", paramOne);
    if (currentPath === '/') {

        view.innerHTML = 'You are on the root page';
    } else if (param) {
        if (initialState) {
            var newData = initialState.filter(item => {
                return item.code === param
            })
            console.log(newData)
        } else {
            getData();
        }

        console.log(initialState);
    } else {
        var route = myFirstRouter.routes.filter(function(r) {
            return r.path === currentPath
        })[0];
        if (route) {
            view.innerHTML = 'You are on the ' + route.name + ' path'
        } else {
            view.innerHTML = '404!';
        }
    }

    //Fetch API
    var btn = document.getElementById('country');
    btn.addEventListener('click', function() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:3000/country', true);

        xhr.onload = function() {
            var myData = JSON.parse(xhr.responseText);
            renderHTML(myData)

        }

        xhr.send();


        //console.log(initialState)
    })




    function renderHTML(data) {
        console.log("My Data", data)
        var htmlString = '';
        for (i = 0; i < data.length; i++) {
            // htmlString += "<p>" + data[i].name + " is a " + data[i].species + "</p>"
            htmlString += "<p>" + "My Country Name is :" + "<b>" + data[i].name + "</b>" + "</p>"
        }
        para.insertAdjacentHTML('beforeend', htmlString)
        para.innerHTML = htmlString;
    }
}