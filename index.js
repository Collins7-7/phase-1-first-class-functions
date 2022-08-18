function receivesAFunction (cb){
    cb();
}
function returnsANamedFunction(){
    return function pointback(){}
}
function returnsAnAnonymousFunction(){
    return function (){}
}