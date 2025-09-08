var fun1 = function (x) {

//   x();

};




let fun2 = (xyz) => {

    let internalFun = function (){
        console.log("I am nternal function")
    }

  xyz(internalFun);

};


fun2(fun1);
