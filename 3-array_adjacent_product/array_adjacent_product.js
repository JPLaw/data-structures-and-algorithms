function largestProduct(twoDArray){
    let maxValue = 0;
    for (i = 0; i <= twoDArray.length; i++){
        for (j = 0; j <= twoDArray[0].length; j++){
            let n = twoDArray[i][j]
            maxValue = Math.max (
                num * (twoDArray[i-1][j-1] || 0),
                num * (twoDArray[i-1][j] || 0),
                num * (twoDArray[i-1][j+1] || 0),
                num * (twoDArray[i][j+1] || 0),
                num * (twoDArray[i][j-1] || 0),
                num * (twoDArray[i+1][j-1] || 0),
                num * (twoDArray[i+1][j] || 0),
                num * (twoDArray[i+1][j+1] || 0),
                maxValue)
        }
    }
    return maxValue;
};
