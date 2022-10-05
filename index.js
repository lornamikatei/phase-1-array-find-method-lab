// code your solution here
const record = [
    
]
function superbowlWin(teamRecord){
    const winElement =teamRecord.find(compareWin)

    if(winElement !== undefined){
        return winElement.year
    }
    else {
        return winElement
    }

}

function compareWin(element){
    return element.result === "W"
}
