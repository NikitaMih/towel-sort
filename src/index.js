module.exports = function towelSort (matrix) {
    for (let j=0; j<matrix.length; j++){
        for (let i=0; i<matrix.length - 1; i++){
            if (matrix[i] > matrix[i+1]) {
                const buff = matrix[i]
                matrix[i] = matrix[i+1]
                matrix[i+1] = buff
            }
        }
    }
}
