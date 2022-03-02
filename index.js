// Code your solution in this file!
function distanceFromHqInBlocks(someBlocks) {
    return Math.abs(42 - someBlocks);
}

function distanceFromHqInFeet(someFeet) {
    return Math.abs(42 - someFeet) * 264;
}

function distanceTravelledInFeet(startFeet, endFeet) {
    return Math.abs(startFeet - endFeet) * 264;
}

function calculatesFarePrice(startFare, endFare) {
    if (Math.abs(startFare - endFare) * 264 <= 400)
        {
             return 0;
        }
    else if (Math.abs(startFare - endFare) * 264 > 400 && Math.abs(startFare - endFare) * 264 <= 2000)
        {
            return ((Math.abs(startFare - endFare) * 264) -400)* 0.02;
        }
    else if (Math.abs(startFare - endFare) * 264 > 2000 && Math.abs(startFare - endFare) * 264 <= 2500)
        {
            return 25;
        }
    else if (Math.abs(startFare - endFare) * 264 > 2500)
        {
            return "cannot travel that far";
        }
}