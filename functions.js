const { data } = require("./data");


function getPopulation(array) {
    return array.filter(item => item.population > 100000)
}
function getPopulation2(array) {
    return array.filter(item => item.population < 100000)
}
module.exports = {
    getPopulation,
    getPopulation2
}
