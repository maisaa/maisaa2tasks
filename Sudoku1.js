var arr=[
    [5,3,4,6,7,8,9,1,2],
    [6,7,2,1,9,5,3,4,8],
    [1,9,8,3,4,2,5,6,7],
    [8,5,9,7,6,1,4,2,3],
    [4,2,6,8,5,3,7,9,1],
    [7,1,3,9,2,4,8,5,6],
    [9,6,1,5,3,7,2,8,4],
    [2,8,7,4,1,9,6,3,5],
    [3,4,5,2,8,6,1,7,9]
    ];

var arr2 = transpose(arr);

/*.......................................................*/
function transpose(arr) {
    
      var i, j, t = []; 

      for(i=0; i<9; i++) {
        t[i] = [];
        for(j=0; j<9; j++) {
          t[i][j] = arr[j][i];
        }
      }    
      return t;
    }
/*.......................................................*/
function isSudoku(arr){
   // var arr2 = transpose(arr);
    result = true;
    for(var i = 0; i < 9; i++) {
        var grid = arr[i];
        //console.log("..grid...>",grid);
        grid.sort();
        // console.log("..grid...>",grid);
        for(var j=0 ; j< 9 ;j++) {
          if(grid[j] !== j+1){
           result = false
           console.log("fulse",grid[j]);
           }
       }
     }
    return result;
    
}
/*.......................................................*/
function  f(arr , arr2){
    if( isSudoku(arr) === true && isSudoku(arr2)=== true)
       return true;
    return false;
}
/*.......................................................*/








