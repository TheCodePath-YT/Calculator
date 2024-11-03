let preview = document.getElementById("preview");
// Display Value
function displayValue(value){
    console.log(preview.value)
    preview.value += value;
}
// Reset Value
function resetValue(){
    preview.value = "";
}
// Clear Last Value
function clearValue(){
    preview.value = preview.value.slice(0,-1);
}
// Handle Parentheses
function handleParentheses(value){
    let openParentheses = (value.match(/\(/g) || []).length;
    let closeParentheses= (value.match(/\)/g) || []).length;
    return value+')'.repeat(openParentheses-closeParentheses);
}

// Evaluation all inputs

function evaluation(){
    try{
        // Check Pare
    preview.value = handleParentheses(preview.value) ;
    preview.value = eval(preview.value);
    }
    catch(err){
        preview.value = "Error";
    }
}