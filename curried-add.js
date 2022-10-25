function curriedAdd() {
    let total = 0;

    return function adder(num){
        if(!num) return total;
            total = total+num;
            return function(c){
                return adder(c);
            };
       

    }

}


module.exports = { curriedAdd };
