function one()
{
    console.log('Normal Funcion');
    
}
one();
function three(callBack)
{
    callBack();
}


let two=function()
{
   console.log('Two');
}
// two();
three(two);

