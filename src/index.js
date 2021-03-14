module.exports = function towelSort (matrix) {
var array = [].concat.apply([], matrix);
    for (let j=0; j<array.length; j++){
        for (let i=0; i<array.length - 1; i++){
            if (array[i] > array[i+1]) {
                const buff = array[i]
                array[i] = array[i+1]
                array[i+1] = buff
            }
        }
    }

    matrix=array;
    
}

