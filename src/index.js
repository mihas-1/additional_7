module.exports = function solveSudoku(matrix) {
  // your solution
  
  function funcForxy(matrix, y, x, nmbr) {
		for (var k = 0; k < matrix[y].length; k++) 
			if (matrix[y][k] == nmbr || matrix[k][x] == nmbr) return 0;
		return 1;
	}

	
    function quaddro(ind_y, ind_x, matrix, nmbr) {
		quad_y = 0;
		if(ind_y>=3 && ind_y<=5) quad_y = 3;
		if(ind_y>=6 && ind_y<=8) quad_y = 6;
		quad_x = 0;
		if(ind_x>=3 && ind_x<=5) quad_x = 3;
		if(ind_x>=6 && ind_x<=8) quad_x = 6;
		
        for (var y = 0; y < 3; y++) {
            for (var x = 0; x < 3; x++) {
                if ( y!=ind_y && x!=ind_x && matrix [y + quad_y] [x + quad_x] === nmbr) return 0;  
            }
        }
        return 1;
    }
	
	
	 function ElementX(matrix) {
		for (var y = 0; y < 9;  y++) {
			for (var x = 0; x < 9; x++) {
				if (matrix[y][x] === 0)  return x;
			}
		}
	}
	
	
	function ElementY(matrix) {
		for (var y = 0; y < 9;  y++) {
			for (var x = 0; x < 9; x++) {
				if (matrix[y][x] === 0)  return y;
			}	
		}
	}

	
	function existElement(matrix) {
		for(var y = 0; y < 9; y++) {
			for(var x = 0; x < 9; x++) {
				if(matrix[y][x] === 0) return 1;
			}
		}
    return 0;
  }
	
	var nmbr = 1;
    if (!existElement(matrix)) return matrix;
	
	while (nmbr < 10) {
		var ind_x = ElementX(matrix);
		var ind_y = ElementY(matrix);
        if (quaddro(ind_y, ind_x, matrix, nmbr)) {
			if (funcForxy(matrix, ind_y, ind_x, nmbr)){
				//console.log(ind_y, ind_x, nmbr);
				matrix[ind_y][ind_x] = nmbr;
				if (!existElement(matrix)) return matrix;
				if (solveSudoku(matrix)) return matrix; 
				else matrix[ind_y][ind_x] = 0;
			}
		}
		nmbr++;
    }
   
}
