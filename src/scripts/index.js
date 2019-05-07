//////////////////////////////////////////////////
//FizzBuzz Algorithm
function fizzBuzz(num){
    for(let i =1; i<=num; i++){
    // if((i % 3 === 0) && (i % 5 === 0)){
    //     console.log('FizzBuzz');
    // }
    if(i % 15 === 0){
        console.log('FizzBuzz');
    }
    else if(i % 3 === 0){
        console.log('Fizz');
    }else if(i % 5 === 0){
        console.log('Buzz')
    }
    //this will not work because, is only one elseif statement that can be executed, not 2. and for the condition, it is already captured in the above if-else.
    // else if((i % 3 === 0) && (i % 5 === 0)){
    //     console.log('FizzBuzz');
    // }
    else{
        console.log(i)
    }
    }
}
fizzBuzz(30);


/////////////////////////////////////////////////
//Harmless Ransom Note Algorithm:

//Big O notation, determines how long it takes an algorithm to complete, it determines how performant a fxn or an algorithm is

// E.g1
//constant runtime
//Big O Notation "0 (1)"
    //the runtime of the below will be const, which we write as:
    //this is because, as we increase the size of the array, the number of operations performed, never changes
    //ie, we still only log out the first two elements of the array
// function log(array){
//     console.log(array[0]);
//     console.log(array[1]);
// }
// log([1,2,3,4]);
// log([1,2,3,4,5,6,7,8,9,10]);

//E.g2
// Linear runtime
//Big O Notation: "0 (n)"
//'0' stands for the function we are evaluating and 'n' stands for the size of the input
//As the input size increases, our runtime, will also increase proportionally
// function logAll(array){
//     for(var i=0; i<array.length; i++){
//         console.log(array[i]);
//     }
// }
// logAll([1,2,3]);
// logAll([1,2,3,4]);
// logAll([1,2,3,4,5]);

//E.g3
//Exponential runtime
//Big O Notation: "O (n^2)"
//we run though every pair of the array
// function addAndLog(array){
//     for(var i=0; i<array.length; i++){
//         for(var j=0; j<array.length; j++){
//             console.log(array[i] + array[j]);
//         }
//     }
// }
// //As we add one element to the input, the runtime makes an exponential jump

// addAndLog(['A', 'B', 'C']); //9 pairs logged out
// addAndLog(['A', 'B', 'C', 'D']); //16 pairs logged out
// addAndLog(['A', 'B', 'C', 'D', 'E']); //25 pairs logged out


//E.g4
//Logarithmic runtime
//Big O Notation: O (log n)
//here, for every operation we perform, we are cutting the input in half
//ie, even if we have a huge input, we are only looking at a fraction of the element, to find the one we are looking for

// function binarySearch(array, key){
//     var low = 0;
//     var high = array.length-1;
//     var mid;
//     var element;

//     while(low <= high){
//         mid = Math.floor((low + high)/2, 10);
//         element = array[mid];
//         if(element < key){
//             low = mid + 1;
//         }else if(element > key){
//             high = mid - 1;
//         }else {
//             return mid;
//         }
//     }
//     return -1;
// }

//Building the harmlessRansomNote algorithm
function harmlessRansomNote(noteText, magazineText){
    // lets convert both parameter elements to array
    let noteArr = noteText.split(' ');
    let magazineArr = magazineText.split(' ');
    //building a hash table
    //here, we the magazine object to have every word in the magazine array as a property on it
    //we want the magazine obj to have every word in the magazine array as a property on it
    //for each word we want the number of times it is present in the magazine array
    var magazineObj = {};
    
    magazineArr.forEach(word => {
        //if the word is not a property in the magazine object, we put it and set it to zero
        if(!magazineObj[word]) magazineObj[word] = 0;
        //each time we see the word, we increment it
        magazineObj[word]++;
    });
    console.log(magazineObj);

    //we loop through our noteArr, each need to be present, so that we can write our magazine words, else, we cant 
    //if the word is in our magazine obj, we want to reduce it by one.
    var noteIsPossible = true;
    noteArr.forEach(word => {
        if(magazineObj[word]){
            magazineObj[word]--;
            //lets also make sure that even if need more than once of the same word for our note, we can get it:
            if(magazineObj[word] < 0) noteIsPossible = false;
        }else{
            noteIsPossible = false;
        }
    });

    // console.log(noteIsPossible);
    return noteIsPossible;

}
//the algorithm, runs on "linear" complexity ( ie: it has an  O(n) runtime). This is because we have two loops and they are not nested.
//the time complecity of the algorithm is 
// O(n) + O(m) ie O(n+m)

console.log(harmlessRansomNote('love all in the cart', 'this is all the magazine text in the magazine This magazine was found in that cart you carried The cart is worth $11 hence a magazine in it Also all items inside it people tend to love them'));



////////////////////////////////////////////////
//Is Palindrome algorithm

//words spelled the same both backward and forward.
// E.g "race car", spell from the right will still give "race car" 
//E.g 2: "Madam I'm Adam"
//determining palindrome, we ignore commas, apostrope, spaces.
function isPalindrome(string){
    string = string.toLowerCase();
    //this array includes spaces, punchtuation and everyother stuff that the string may have
    var charactersArr = string.split('');
    //this is strickly alphamets arrays 
    var validCharactersArr = 'abcdefghijklmnopqrstuvwxyz'.split(''); 

    var lettersArr = [];
    charactersArr.forEach(char => {
        //if that character is valid in the validCharactersArr
        if(validCharactersArr.indexOf(char) > -1) lettersArr.push(char);
    });
    if(lettersArr.join('') === lettersArr.reverse().join('')){
         return true;
    }
    else{
        return false;
    } 
}
console.log(isPalindrome("Madam I'm Adam"));



//////////////////////////////////////////////////
// Ceaser Cipher Algorithm
//the whole concept is to flip an alphabet ("str") either forward or backwards, based on the digit number that was provided in the "num"

function caesarCipher(str, num){
    // the length of an alphabet is 26 characters
    // the index is from 0 to 25
    //if a "num" like 300 is passed, we dont need to loop the "str" 300 times, we will use modulus operator like:
    //e.g -27 % 26 will give -1. so, shifting a number -27 places or -1 places wont give us any error
    //this line is very important, because, without it, we will get values longer than what we inputed, but with it, is like we are telling our code to that if num given is more than 26(either positive or negative), divide by the length of our alphabet(26) and lets work with the remainder

    num = num % 26; 

    //ie, we only make use of the remainder we divide by 26

    //next, lets convert our string to lowercase
    var lowerCaseString = str.toLowerCase();
    // next, lets get our alphabet sample in array format
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    //next, lets define our new string:
    var newString = '';
    //next, lets loop through our original string:
    for(var i=0; i<lowerCaseString.length; i++){
        //lets store each letter:
        var currentLetter = lowerCaseString[i];
        //if the current letter is a space, put it like that in newString and continue to other letters in the string:
        if(currentLetter === ' '){
            newString += currentLetter;
            continue;
        }
        // lets know our current index: 
        let currentIndex = alphabet.indexOf(currentLetter);
        //when a new index is applied based on the 'num' given, lets know it:
        var newIndex = currentIndex + num;
        //if the new index is more than the 'z' index, which is 25, then, the "newIndex" plus the starting alphabet length which (-26)
        if(newIndex > 25) newIndex = newIndex - 26;
        //if we pass in a negative number, our new index is less than zero, it means we are shifting the letters backwards
        if(newIndex < 0) newIndex = 26 + newIndex;

        //if one or more letters in our original string is uppercase, then we want the new shifted letter to be uppercase as well
        if(str[i] === str[i].toUpperCase()){
            newString += alphabet[newIndex].toUpperCase();
        }else{
            newString += alphabet[newIndex];
        }
    }
    return newString;
}
//Note, if we pass "-26", is same as "0" so nothing happens. Because, -26 is the starting index of the alphabet(from the left) and 0 is also the starting index of the alphabet(from the right)

console.log(caesarCipher('Zoo KeEper', 2));
console.log(caesarCipher('Zoo KeEper', 2));
console.log(caesarCipher('mana from the Sky', -2));
console.log(caesarCipher('Javascript', -27));




//////////////////////////////////////////////////////
//Reverse Words Algorithm
 
function revereseWords(string){

    var stringArr = string.split(' ');
    var stringReverseArr = [];

    stringArr.forEach(word => {
        //lets define a variable to hold the reversed word:
        var reversedWord = '';
        //we start from the end of each word to loop
        for(var i = word.length-1; i>=0; i--){
            //we flip one word at a time, storing each in the reverseWord string
            reversedWord += word[i];
        }
        stringReverseArr.push(reversedWord);
    })
    //return the reversed array when it is converted to string
    return stringReverseArr.join(' ');
    
    }

console.log(revereseWords('this is a string of words'));
console.log(revereseWords('money and power'));


//////////////////////////////////////////////////
//Reverse array in place algorithm
function reverseArrayInPlace(arr){

    //as we go through the first half of the array, we are correctly reassigning each element, as we continue to the second half of the array, we are switching the elements back again, which means, we will still get the same array.
    //to fix this, we will only loop through the first half of the array
    for(var i =0; i < arr.length / 2; i++){
        //for the first element in the array, i=0
        var tempVar = arr[i];
        //now lets switch the first element and the last element:
        //how it works: if i=0, it will be:
        // [first_element] = [last_element]
        //if i=1, it will be:
        // [second_element] = [second_to_last_element]
        arr[i] = arr[arr.length -1 - i];
        //next, we put the tempVar array into the array on the right hand side
        arr[arr.length - 1 - i] = tempVar;
    }
    return arr;
}

console.log(reverseArrayInPlace([1,2,3,4,5,6]));



//////////////////////////////////////////////////
//Mean Median, Mode Algorithm
function meanMedianMode(array){
    return  {
        mean: getMean(array),
        median: getMedian(array),
        mode: getMode(array)
    }
}

function getMean(array){
    var sum = 0;
    array.forEach(num => {
        sum += num;
    });
    var mean = sum/array.length

    return mean;
}

function getMedian(array){
   //first we need to sort our array:
   array.sort((a, b) => a - b);

   var median;
   //for odd number case, where, when we divide the array by two, there is a remainder
   if(array.length % 2 !== 0){
       //getting the array where the index is at half of the array
       median = array[Math.floor(array.length/2)];
   }else{
       //if we have two numbers at the middle:
    //lets get the two elements:
    var mid1 = array[(array.length/2) -1];
    var mid2 = array[array.length/2];
    median = (mid1 + mid2)/2
   }
   return median;
}

function getMode(array){
     //we are going to define a hash table
    //  for instance, if we have this array:
    // [2,3,3,6] then our hash table is:
    // {
        // '2': 1,
        // '3': 2,
        // '6': 1
    // }
    //defining our hash table:
    var modeObj = {};
    //lets put the numbers as properties to our hash table
    array.forEach(num => {
        //if we dont have that property before, lets put it. but if we have it, lets increment it:
        if(!modeObj[num])
        {
            modeObj[num] = 0;
        }
        modeObj[num]++;
        
    });
    //let have access to every number property on our mode Object:
    //we will track how often a number occurs 
    var maxFrequency = 0;
    //lets define a new array:
    var modes = [];
    for(var num in modeObj){
        //if the value of a property is greater than maxFrequency, put that property in our modes array, also put it maxfrequency to be its value in the modeObj
        if(modeObj[num] > maxFrequency){
            modes = [num];
            maxFrequency = modeObj[num];
        }
        //if the current number have the same frequency as the max frequency
        else if(modeObj[num] === maxFrequency){
            //put it in the mode array
            modes.push(num);
        }
    }
    //if all the numbers appear at the same frequency
    //ie, if the number of modes in our mode array is equal to the number of keys in our mode obj
    //Object.keys(modeObj) gives us the values of the properties on the mode obj
    if(modes.length === Object.keys(modeObj).length){
        modes = [];
    }
    return modes;
}

console.log(meanMedianMode([1,1,1,1,2,3,2,2,2]));




////////////////////////////////////////////////////
// Two Sum Algorithm
//Guidelines: 
// 1. Result should be an array of arrays
//2. Any number in the 'numArray' can be used in multiple pairs
//We can accomplish the result using:
//1. O (n^2) time complexity
//2. O (n) time complexity

function twoSum(numArray, sum){
    //lets define an array pair that will hold our two numbers:
    var pairs = [];
    //lets define an array hashtable
    var hashtable = [];

    //lets loop through the numArray and get the current number:
    for(let i =0; i<numArray.length; i++){
        //save the current number into the currNum
        var currNum = numArray[i];
        //find his counterpart:
        var counterpart = sum - currNum;
        //now we have both, let push them in the pairs array, but first lets check if it exists in the hashtable:
        //note without this check, if we pass a sum like "-3", then values outside the numArray will be generated to match that currNum, but we dont want that, we only want to match within the values we provide
        if(hashtable.indexOf(counterpart) !== -1){
            pairs.push([currNum, counterpart])
        }
        //lets push the current to the hashtable no matter what:
        hashtable.push(currNum);
    }
    // console.log(hashtable)

    return pairs
}

console.log('Hello', twoSum([1,2,1,3,6,4,2,4,2,1,3,2], 2));
console.log(twoSum([40, 11, 19, 17, -12], 28));



///////////////////////////////////////////////////////
//BINARY SEARCH ALGORITHM
//It allows:
//Searching for a given value(key) inside of a list(numArray)
//It Runs in O (log n) run time 
//Can be written as a recursive function

 //Recursive fxns:
//  All Recursive function have two cases:
// 1. A base case
//2. A recursive case, where the function calls itself
// syntax
// function func(){
//     if(/*base case */){
//         return something;
//     }else{
//         func()
//     }
// }
// E.g1
// recursive function will continue to call itself until the base case is satisfied
function factorial(num){
    //we can check only <=2 for large numbers
    if(num === 0 || num === 1){
        // return num;
        return 1;
    }else{
        //this else block is executed until num ===1
        return num * factorial(num -1);
    }
}

console.log(factorial(5))


//Binary Search Algorithm
function binarySearch(numArray, key){ 
    //let get the middle element index in the array
    let middleIndex = Math.floor(numArray.length/2);
    //let get its element
    let middleElem = numArray[middleIndex];

    //Lets write our base case:
    if(middleElem === key) return true;
    //Now lets write some recursion if we dont see it:
    //lets first consider when the middleElem is less than the key and the array has more than one element, else the middle element will be that one element
    //we want to pass the second half of the array
    //the splice function starts the array from the index of the middleElem then to the end of the array
    //note splice removes elements from the first index specified to the last index specified.
    else if(middleElem < key && numArray.length > 1){
        return binarySearch(numArray.splice(middleIndex, numArray.length), key);
    }
    //Now lets pass the first half of our array into the binarySearch, ie starting from 0 to middleIndex:
    else if(middleElem > key && numArray.length > 1){
        return binarySearch(numArray.splice(0, middleIndex), key);
    }

    //when the key is not present in our num array return false, we can meet this case when the middle element is not the one we are looking for and numArray has zero or one element
    else return false;
}   

console.log(binarySearch([5,7,12,16,36,39,42,56,71], 26));
console.log(binarySearch([5,7,12,16,36,39,42,56,71], 36));




//////////////////////////////////////////////////
// FIBONACCI ALGORITHM
//Every number is the sum of the previous two numbers
// Fibonacci Sequence: 1,1,2,3,5,8,13,21,34...

function fibonacci(position){
    // if(position === 1 || position === 2){
    //     return 1;
    //or
    if(position < 3){
        return 1;
    }else{
        //now lets get the sum of the two previous numbers, beacause, two numbers need to be sum before we can get the third position, fourth position, etc
        //since we want to get the number in the current "position", the first previous number is "position-2" and the second one is "position-1"
        //this results to an exponential time complexity(O (n^2)) which is very in-efficient
        //this calculates all fibonacci numbers from the first to the number we passed as position
        return fibonacci(position - 1) + fibonacci(position - 2);
    }
}
//passing a big number like 50 can freeze our browser, so to fix this, we will use "Memoized Fibonacci"
console.log(fibonacci(20));



/////////////////////////////////////////////////////////
//MEMOIZED FIBONACCI
//syntax:
// function fibMemo(index, cache){
//     //index: index of number in fibonacci sequence
//     //cache: an array used as memory
// }
//Using Memoization:
//check to see if number already exists in cache
//if number is in cache, use that number 
//if number is not in cache, calculate it and put it in cache so it can be used multiple times in future
//This will have Runtime: O(n) - linear

function fibMemo(index, cache){
    //our cache is equal to the one passed in or an empty array
    cache = cache || []
    //base case
    //the index we are looking for, is it already calculated and inside our cache?
    if(cache[index]) return cache[index];
    else {
        //if the index is 1 or 2 return 1
        if(index < 3) return 1;
        else{
            cache[index] = fibMemo(index-1, cache) + fibMemo(index - 2, cache);
        }
    }
    return cache[index];
}

console.log(fibMemo(20));



///////////////////////////////////////////////////////
//SIEVE OF ERATOSTHENES
//syntax:
// function sieveOfEratosthenes(num){
//     //return all prime numbers up to 'num' in an array
// }

//Note a prime number's multitple is not a prime number
//E.g the multiples of 2 are:
//[4,6,8,10,12........] all are not prime numbers
//multiple of 3 are:
//[6,9,12,15,18,21.....] all are not prime numbers
//Optimization: Stop looping through the square root of "num". So we loop through our list of numbers stopping at the square root of n 

function sieveOfEratosthenes(n){
    var primes = [];
    for(var i=0; i<=n; i++){
        primes[i] = true; //this means we have an array of 0 to n and we have marked every element in the array as prime
    }
    //now since zero and one are not prime numbers, lets mark them as false:
    primes[0] = false;
    primes[1] = false;

    //normally we would have looped through n, but we should not, because for optimization purposes
    //all non-prime numbers after the square root of n will be marked as false by the time we get to the square root of n
    //so, we loop through our list of numbers stopping at the square root of n
    for(var i = 2; i<=Math.sqrt(n); i++){
        //i*j is the multiple of the current index
        //we want the multiple to be less than the number passed, else, we dont care about it
        for(var j=2; j*i <= n; j++){
            //now mark those multiples as false:
            primes[i*j] = false;
        }
    }

    var result = [];
    for(var i =0; i< primes.length; i++){
        //if i is a prime number put it in the result array
        if(primes[i]){
            result.push(i)
        }
    }
    return result;
}
console.log(sieveOfEratosthenes(20))




//////////////////////////////////////////////////////
//BUBBLE SORT
//it takes the length of the array minus 1 passes to get what we want:
// # of passes: array.length -1 
function bubbleSort(array){
    //this will create array.length-1 loop for us
    //the outer says: do array.length - 1 times
    for(var i = array.length; i>0; i--){
        //the inner loop: loop through the whole array, and in each loop, stop at one element earlier than the previous element, at each pass of the array, the largest element bubble to the top
        for(var j=0; j<i; j++){
            //lets check if it is neccessary to switch two elements
            if(array[j] > array[j+1]){
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }for(var j=0; j<i; j++){
            //lets check if it is neccessary to switch two elements
            if(array[j] > array[j+1]){
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}
console.log(bubbleSort([5,3,8,2,1,4]));

console.log([2,3,1,5,7,2,3,5].sort()); //without algorithm



///////////////////////////////////////////////////
//MERGE SORT ALGORITHM
 function mergeSort(arr){
     //if our initial array passed in only have 0 or one element, then, it is already sorted:
     if(arr.length < 2) return arr;
     //note, if the if statement above is satisfied, then we will never reach the code below it, if it not, an implicit else statement is used for the code below
     //our recursive case:
     var middleIndex = Math.floor(arr.length / 2);
     var firstHalf = arr.slice(0, middleIndex);
     var secondHalf = arr.slice(middleIndex);

     return merge(mergeSort(firstHalf), mergeSort(secondHalf));
 }

 function merge(array1, array2){
     var result = [];
     //while these arrays are not empty
     while(array1.length && array2.length){
         var minElem;
         if(array1[0] < array2[0]){
             //remove that element from array1 and put it in the minElem variable
             minElem = array1.shift();
         }else{
             minElem = array2.shift();
         }
         result.push(minElem);
     }
      //since we are comparing two arrays, we should have atleast one element left in one of the arrays, especially the one that have higher numbers
      //lets check both arrays and add the elements left:
      if(array1.length) result = result.concat(array1);
      else result = result.concat(array2)

      return result;
 }

 console.log(mergeSort([200, 12, 400, 22, 55, 11, 1, 800]));
 console.log(mergeSort([-200, 12, 400, 22, -55, 11, 1, 800]));



 /////////////////////////////////////////////////////
 //MAX STOCK PROFIT

function maxStockProfit(priceArr){
    var maxProfit = -1;
    var buyPrice = 0;
    var sellPrice = 0;

    var changeBuyPrice = true;
    for(var i =0; i<priceArr.length; i++){
        if(changeBuyPrice) buyPrice = priceArr[i];
        sellPrice = priceArr[i+1];

        if(sellPrice < buyPrice){ 
            changeBuyPrice = true;
        }else{
            var tempProfit = sellPrice - buyPrice;
            if(tempProfit > maxProfit) maxProfit = tempProfit;
            changeBuyPrice = false;
        }
    }
    return maxProfit;
}


console.log(maxStockProfit([32,46,38,40,48,42, 58]));



