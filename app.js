function sum(a, b) {
    return a + b;
  }

  console.log(sum(7,3))

  // one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen (dollar){
    let dolares = (dollar / oneEuroIs.USD) * oneEuroIs.JPY
    return dolares
}

function fromEuroToDollar (euro){
    let euros = euro * oneEuroIs.USD
    return euros
}

function fromYenToPound (yen){
    let yenes = (yen / oneEuroIs.JPY) * oneEuroIs.GBP
    return yenes
}

module.exports = {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound}