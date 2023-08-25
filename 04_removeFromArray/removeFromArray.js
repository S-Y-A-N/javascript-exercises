const removeFromArray = function(array, ...removeElements) {

    for(let i = 0; i < removeElements.length; i++) {
        for(let j = 0; j < array.length; j++) {
            if(removeElements[i] === array[j]) {
                array.splice(j, 1);
                
            }
        }
    }
    
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
