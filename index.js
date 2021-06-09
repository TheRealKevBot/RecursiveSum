//  Digital root is the recursive sum of all the digits in a number.

//  DigitalGiven n, take the sum of the digits of n. 
//  If that value has more than one digit, continue reducing in this way until a single-digit number is produced. 
//  The input will be a non-negative integer.

function digital_root(n) {
    count = 0
    numbers = n.toString().split('')
    numbers.forEach(number => {
        num = parseInt(number)
        count += num
    })
    count > 9 ? digital_root(count) : null
    return count
}

console.log(digital_root(16))
console.log(digital_root(456))
console.log(digital_root(132189))
console.log(digital_root(493193))
console.log(digital_root(45263452345234523))
console.log(digital_root(4563634563456))
console.log(digital_root(523459081423456))
console.log(digital_root(4123412356))
console.log(digital_root(4512346))
console.log(digital_root(423498734982734982756))
console.log(digital_root(4534568467576))
console.log(digital_root(9834234456))
console.log(digital_root(99999999999999999999))
console.log(digital_root(9999999999999999999999999999999999999999999999999999n))
console.log(digital_root(6451412465779879846542132468798954651321321635496879879876546513216598795465463216574987954654n))