console.log("2" > 1)  // true // true because "2" is converted to number 2 and then compared
console.log("01" == 1) // true // true because "01" is converted to number 1 and then compared
console.log(true == 1) // true // true because true is converted to number 1 and then compared

// but
console.log(undefined == 0) // false // false because undefined is converted to NaN in number conversion so undefined remains undefined and 0 remains 0 and then compared   
console.log(null == 0) // false // false because null is converted to 0 only in boolean conversion not in number conversion so null remains null and 0 remains 0 and then compared
console.log(null > 0) // false // false because null is converted to 0 only in boolean conversion not in number conversion so null remains null and 0 remains 0 and then compared
console.log(null >= 0) // true // because null is converted to 0 and then compared so 0 >= 0 is true
console.log(NaN == NaN) // false // false because NaN is not equal to anything including itself

// always remember to do comparisons between same datatypes to avoid confusions
