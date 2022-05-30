function substituirPares(list){
    if(!list) return -1;
    if(!list.length) return -1;



    for(let i = 0; i < list.length; i++){
        if(list[i] === 0){
            console.log("Você ja é zero!!")
        }else if (list[i] % 2 ===0){
            console.log(list[i]);
            list[i] = 0;

        }
    }

    return list;
}

 let arr = [1,3,4,6,80,33,23,90,62];
 console.log(substituirPares(true));