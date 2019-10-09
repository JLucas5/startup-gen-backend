const axios = require("axios")
const express = require('express')
const nameList = require("../assets/names.json")

function generateName( ){

    names = nameList.names
    
    let firstName = ''
    let secondName = ''

    while(firstName == secondName){
        firstName = names[Math.floor(Math.random()*items.length)]
        secondName = names[Math.floor(Math.random()*items.length)]
    }

    return firstName.concat(secondName)
}

async function validateDomain(domainName){

    await axios.get('https://api.jsonwhois.io/availability?key=fwAo7rPkK7HPnj3fuZHzFpKSzQNeQ0wO&domain=' + domainName.toLowerCase() + '.com')
    .then(res => {
        const isAvailable = res.data.is_available
    })
    .catch(err => {
        console.log(err);
    });
    
    return isAvailable
}

module.exports = {
    
    generateNameList(req, res){
        const names = []
        const { listSize } = req.headers

        for(i = 0, i < listSize, i++){
            const name = generateName()
            const availability = validateDomain(name)
            names.push({
                name,
                availability
            })
        }

        return names
    }
}
