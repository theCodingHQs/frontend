var fun1 = function (x) {

  x();

};




let fun2 = (argFun) => {

    let internalFun = function (){
        console.log("I am nternal function")
    }

  argFun(internalFun);

};


fun2(fun1);
