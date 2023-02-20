
a={'+':1,'-':1,'*':1,'/':1}
function displayNum(num){
    b=result.innerText.length-1
    if(result.innerText[b] in a && num in a)
    {
        result.innerText=result.innerText.slice(0,-1)+num;

    }
    else{
    
    result.innerText+=num}
}

function displayEqual(){
    if(result.innerText.length==0)
    {
        return
    }
    result.innerText= eval(result.innerText)
    
}

function allClear(){
    result.innerText=""
}

function backSpace(){
    result.innerText=result.innerText.slice(0,-1)
}
