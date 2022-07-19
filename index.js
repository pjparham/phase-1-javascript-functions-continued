// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
function mondayWork(job = "go to the office"){
    return `This Monday, I will ${job}.`;
}
function wrapAdjective(highlight = "*"){
    return function(person = "special"){
        return `You are ${highlight}${person}${highlight}!`
    }
}