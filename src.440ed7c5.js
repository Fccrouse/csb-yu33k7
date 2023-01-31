parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"D9Nj":[function(require,module,exports) {

},{}],"H99C":[function(require,module,exports) {
"use strict";require("./styles.css"),document.getElementById("app").innerHTML='\n<header class="header">\n  <div class="row">\n    <div class="header__logo">\n     <h2><a href="#">Aesthetic Weather App</h2>\n    </div>\n    <p class="header__date">\n    </p>\n    <div class="header__search">\n     <a title="geolocate" href="#" class="header__geolocate" ><svg class="icon icon-target"><use xlink:href="#icon-target"></use></svg></a>\n     <form class="header__form">\n     <input type="search" placeholder="Type city name" class="header__search">\n     <button class="btn btn-primary" role="search"><svg class="icon icon-search"><use xlink:href="#icon-search"></use></svg></button>\n     </div>\n    </div>\n  </div>\n</header>\n<main class="weather">\n   <h1 class="weather__message">Please enter the name of the city or click on the  \n     <a title="geolocate" href="#" class="header__geolocate"><svg  class="icon icon-target"><use xlink:href="#icon-target"></use></svg></a> to get your location\n  </h1>\n</main>\n\n<section class="forecast">\n <div class="row">\n </div>\n</section>\n<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n<defs>\n<symbol id="icon-search" viewBox="0 0 32 32">\n<title>search</title>\n<path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>\n</symbol>\n<symbol id="icon-target" viewBox="0 0 32 32">\n<title>target</title>\n<path d="M32 14h-3.154c-0.864-5.57-5.276-9.982-10.846-10.846v-3.154h-4v3.154c-5.57 0.864-9.982 5.276-10.846 10.846h-3.154v4h3.154c0.864 5.57 5.276 9.982 10.846 10.846v3.154h4v-3.154c5.57-0.864 9.982-5.276 10.846-10.846h3.154v-4zM24.776 14h-3.118c-0.603-1.705-1.953-3.056-3.658-3.658v-3.118c3.36 0.765 6.010 3.416 6.776 6.776zM16 18c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2s-0.895 2-2 2zM14 7.224v3.118c-1.705 0.603-3.056 1.953-3.658 3.658h-3.118c0.765-3.36 3.416-6.010 6.776-6.776zM7.224 18h3.118c0.603 1.705 1.953 3.056 3.658 3.658v3.118c-3.36-0.765-6.010-3.416-6.776-6.776zM18 24.776v-3.118c1.705-0.603 3.056-1.953 3.658-3.658h3.118c-0.765 3.36-3.416 6.010-6.776 6.776z"></path>\n</symbol>\n</defs>\n</svg>\n';var e=document.querySelector(".weather"),n=document.querySelector('button[role="search"]'),t=document.querySelector('input[type="search"]'),a=document.querySelector(".forecast > .row"),c=document.querySelector(".header__date"),o=document.querySelectorAll(".header__geolocate"),i={"01d":"wi-day-sunny","02d":"wi-day-cloudy","03d":"wi-cloud","04d":"wi-cloudy","09d":"wi-showers","10d":"wi-rain","11d":"wi-thunderstorm","13d":"wi-snow","50d":"wi-fog","01n":"wi-night-clear","02n":"wi-night-alt-cloudy","03n":"wi-cloud","04n":"wi-night-cloudy","09n":"wi-night-showers","10n":"wi-night-rain","11n":"wi-night-thunderstorm","13n":"wi-night-alt-snow","50n":"wi-night-fog"};function s(){var e=new Date;c.insertAdjacentText("afterbegin",e.toLocaleString("en-us",{weekday:"long",year:"numeric",month:"long",day:"numeric"}))}function r(e){return e.toLocaleString("en-us",{weekday:"long"})}function l(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function h(e){l(a),e.forEach(function(e){var n='<div class="forecast__day">\n     <h3 class="forecast__date">'.concat(r(new Date(1e3*e.dt)),"</h3>\n     <i class='wi ").concat(i[e.weather[0].icon],' forecast__icon\'></i>\n     <p class="forecast__temp">').concat(Math.floor(e.main.temp),'°C</p>\n     <p class="forecast__desc">').concat(e.weather[0].main,"</p>\n   </div>");a.insertAdjacentHTML("beforeend",n)})}function d(e){fetch(e).then(function(e){return e.json()}).then(function(e){h(e.list.filter(function(e){return e.dt_txt.endsWith("06:00:00")}))})}function u(n){fetch(n).then(function(e){return e.json()}).then(function(n){var t='<h1 class="location">'.concat(n.name,", ").concat(n.sys.country,'</h1>\n <div class="weather__summary">\n    <p><i class="wi ').concat(i[n.weather[0].icon],' weather-icon"></i> <span class="weather__celsius-value">').concat(Math.floor(n.main.temp),"°C</span></p>\n    <p>").concat(n.weather[0].main,'</p>\n    <ul class="weather__miscellaneous">\n    <li><i class="wi wi-humidity"></i> Humidity  <span>').concat(n.main.humidity,'%</span></li>\n    <li><i class="wi wi-small-craft-advisory"></i> Wind Speed <span>').concat(n.wind.speed," m/s</span></li>\n    </ul>\n </div>\n ");l(e),e.insertAdjacentHTML("beforeend",t)}).catch(function(e){console.log(e)})}function f(e,n){u("https://api.openweathermap.org/data/2.5/weather?lat=".concat(e,"&lon=").concat(n,"&APPID=9cb72bec958f8fb02391985ed7b219d2\n&units=metric"))}function w(e,n){d("https://api.openweathermap.org/data/2.5/forecast?lat=".concat(e,"&lon=").concat(n,"&APPID=9cb72bec958f8fb02391985ed7b219d2\n&units=metric"))}function p(e){u("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&APPID=9cb72bec958f8fb02391985ed7b219d2\n&units=metric"))}function g(e){d("https://api.openweathermap.org/data/2.5/forecast?q=".concat(e,"&APPID=9cb72bec958f8fb02391985ed7b219d2\n&units=metric"))}function m(e){var n=e.coords,t=n.latitude,a=n.longitude;f(t,a),w(t,a)}s(),n.addEventListener("click",function(e){e.preventDefault(),p(t.value),g(t.value)}),o.forEach(function(e){e.addEventListener("click",function(e){navigator.geolocation?navigator.geolocation.getCurrentPosition(m):alert("Your browser does not support geolocation")})});
},{"./styles.css":"D9Nj"}]},{},["H99C"], null)
//# sourceMappingURL=/csb-yu33k7/src.440ed7c5.js.map