const repeatNumbers = function(arrOfData) {
    str = '';

    for(i = 0; i < arrOfData.length; i++) {
        for(j = 0; j < arrOfData[i][1]; j++) {
          str += arrOfData[i][0];
        }
          str += "\n"
    }
    
    return str;

  };

//console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 4], [1, 1]]));