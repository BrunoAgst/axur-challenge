module.exports = (list) => {
    
    const listFormatted = []
    
    Object.keys(list).forEach(element => {
        listFormatted.push({
            "domain": element,
            "quantity": list[element]
        })        
    })

    return listFormatted
}