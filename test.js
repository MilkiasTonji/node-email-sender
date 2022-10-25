function solution(array) {
 
//    sort the array

   var sorted_array = array.sort();

    let uniqueNumbers = sorted_array.filter((num, index) => {
        return sorted_array.indexOf(num) === index;
    });

    var smallest = uniqueNumbers[0];
    

    for (let i = 1; i < uniqueNumbers.length; i++){
       if(uniqueNumbers[i] < smallest){
           smallest = array[i]
           console.log("Something:", smallest)
           if (uniqueNumbers.includes(smallest)) {
            smallest = array[i+1]
           }
       }else{
           smallest = uniqueNumbers[i+1]
       }
    }

    return smallest;
}




console.log(solution([1, 3, 6, 4, 1, 2]))