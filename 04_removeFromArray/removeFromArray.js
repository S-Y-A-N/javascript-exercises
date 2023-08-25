const removeFromArray = function(array, ...removeElements) {
    
    // for(let i = 0; i < array.length; i++) {
    //     for(let j = 0; j < removeElements.length; j++) {
    //         if(array[i] === removeElements[j]) {
    //             array.splice(i, 1);
                
    //         }
    //     }
    // }

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
