const _ = {
	// 1 of 10 
  clamp(number,lower,upper) {
  	const lowerClampedValue = Math.max(number,lower);
   	const clampedValue = Math.min(lowerClampedValue,upper);	
    return clampedValue
  },
  // 2 of 10
  inRange(number,start,end) {
    if (typeof end === 'undefined') {
      end = start;
      start = 0;
    }
    if (start > end) {
      const tempStart = start;
      start = end;
      end = tempStart;
    }
    let isInRange = true
    if (number > end || number < start) {
      isInRange = false
    }
    return isInRange
	},
  // 3 of 10
  words(string){
  	const wordArray = string.split(' ')
		return wordArray	
  },
  // 4 of 10
  pad(string,length) {
    if (length <= string.length) {
      return string
    } else {
      const stringDiff = length - string.length	
      const startPadding = Math.floor(stringDiff / 2);
      const endPadding = length - (string.length + startPadding);
      	const space = ' '
		   	const paddedString = space.repeat(startPadding) + string + space.repeat(endPadding);
      	return paddedString
    }
  },
	
	// 5 of 10
	has(object,key) {
    console.log('key is: ' + key)
    console.log('value is: ' + object[key])
    return (typeof object[key] !== 'undefined')
  },
	
	// 6 of 10 
  invert(object){
  	// swaps value and key, crickey!
    const invertedObject = {};
    // iterate on each key
    for (property in object) {
      const originalValue = object[property]
      invertedObject[originalValue] = property;
    } 
    return invertedObject
	},

	// 7 of 10
	findKey(object,predicate) {
    for (property in object) {
      const isTruthy = predicate(object[property]);
      if (isTruthy === true) {
        return property
      } else {
      	return undefined
      }
    }
  },

	// 8 of 10
  drop(array,drop=1) {
    // make a copy of the old array
  	const newArray = array.slice();
    for (i = 0; i < drop; i++) {
      newArray.shift()
    }
    return newArray
  },
  
	// 9 of 10
	dropWhile(array,predicate) {
    // predicate takes 3 arguments: value, index, array
    const dropNumber = array.findIndex((element,index) => !predicate(element,index,array));
    const droppedArray = this.drop(array,dropNumber)
    return droppedArray
  },
  
	// 10 of 10
  chunk(array,size) {
    if (size.typeof === 'undefined') {
      size = 1
    }
  	arrayChunks = [];
    for (i = 0; i < array.length; i = i+size) {
    	arrayChunk = array.slice(i,i+size);
      arrayChunks.push(arrayChunk);
    };
    return arrayChunks
	}
} 

// Do not write or modify code below this line.
module.exports = _;