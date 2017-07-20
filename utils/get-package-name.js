module.exports = function(packcageName = ""){

    const nameHasScope = packcageName.indexOf('@') !== -1;
    if(nameHasScope){
        packcageName = packcageName.split('/')[1];
    }

    return packcageName.split('-').map(function(piece, index){
        if(index > 0) {
            return piece.substr(0,1).toUpperCase() + piece.substr(1);
        }
        return piece;
    }).join('')
}