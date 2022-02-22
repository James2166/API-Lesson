const data = "https://iskarr.github.io/austindonovan.github.io/api/business.json";

fetch('https://iskarr.github.io/austindonovan.github.io/api/business.json').then((response) => response.json()).then((jsObject) => {
    console.log(jsObject);
});