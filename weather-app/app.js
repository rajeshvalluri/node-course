const request = require('request')
const chalk = require ('chalk')
const geocode = require('./utils/geocode')
const weather = require('./utils/weather')
const iptogeo = require('./utils/iptogeo')
const getlocation = require('./utils/getlocation')

const ipaddr = process.argv[2]
// experimenting with using IP address instead of location
//const location = process.argv[2] 

let location = '';

// iptogeo(ipaddr).then(data  => {
//     this.location = data.city + ' ' + data.countryCode;
//     })

// getlocation(ipaddr).then(data => {
//     console.log('getlocation',data);
//   });

// console.log('Printing first')
// // const location = 'Sydney, AU'

iptogeo(ipaddr,(error,{city,country_code}) => {
    location = city + ' ' + country_code
    console.log(location)
    geocode(location,(error,{latitude,longitude})  => {
        weather(latitude + ','+ longitude,(error,weatherdata) => {
        console.log(weatherdata.city,weatherdata.currTemp,weatherdata.feelsLike,error)
    })
})
})
