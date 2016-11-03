function random(num) {
    console.log(num);
    return 1+Math.floor(num * Math.random());
}

function max(n1, n2) {
    if(n1 > n2) {
        console.log(n1);
        return n1
    } else {
        console.log(n2);
        return n2
    }
}

function lastChar(arr) {
    console.log(arr);
    return arr[arr.length-1];
}

function squares(a, b) {
    console.log(a);
    console.log(b);
    return a*a+b*b
}

function leapYear(y) {
    console.log(y);
    if(y%4 === 0 && y%100 > 0) {
        return "yes"
    } else if(y%400 === 0) {
        return "yes"
    } else {
        return "no"
    }   
}