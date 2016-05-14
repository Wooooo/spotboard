for(var i = 1 ; i <= 107 ; i++) {
    var str = '';
    //
    //if( i < 10 ) str = '00'+i;
    //else if( i < 100 ) str = '0'+i;
    //else str = ''+i;

    str = ''+i;
    console.log(`{"id": "${str}", "name": "ajou${str}"},`);
}