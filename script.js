const books = [
    {
      title: 'The Road Ahead',
      author: 'Bill Gates',
      libraryID: 1254,
    },
    {
      title: 'Walter Isaacson',
      author: 'Steve Jobs',
      libraryID: 4264,
    },
    {
      title: 'Mockingjay: The Final Book of The Hunger Games',
      author: 'Suzanne Collins',
      libraryID: 3245,
    },
    {
      title: '10X',
      author: 'Grant Cardone',
      libraryID: 3945,
    },
  ];


const merge = (left,right,key)=>{
    let someArray = []
    while(left.length && right.length){
        //on each branch of the tree, the elements are getting compared and pushed into a array
        if (left[0][key] < right[0][key]){
            someArray.push(left.shift())
        }else{
            someArray.push(right.shift())
        }
    }
    //moving left over elements into array after all the one compared
    return[...someArray,...left,...right]
}

const mergeSort = (array,key) =>{
    const mid = Math.floor(array.length/2)

    //base case
    if(array.length < 2){
        return array
    }

    const left = array.splice(0,mid)
    //this is merging the subarrays until it meets condition on line 43 above
    return merge(mergeSort(left,key),mergeSort(array,key),key)
}

console.log(mergeSort(books,'libraryID'))







