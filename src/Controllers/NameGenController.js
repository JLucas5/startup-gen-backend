const nameList = require("../../assets/names.json")


module.exports = {
    generateName( ){

    names = nameList.names
    
    let firstName = ''
    let secondName = ''

    while(firstName == secondName){
        firstName = names[Math.floor(Math.random()*items.length)]
        secondName = names[Math.floor(Math.random()*items.length)]
    }

    return firstName.concat(secondName)
}


}
