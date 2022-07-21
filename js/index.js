// Iteration 1: Names and Input
//
const hacker1 = 'Robert'
// console.log(`The driver's name is ${hacker1}`)

const hacker2 = 'Aníbal'
// console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

// if(hacker1.length > hacker2.length){
//     console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
// }else if(hacker2.length>hacker1.length){
//     console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
// }else{
//     console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
// }

// Iteration 3: Loops

let driverName =""

for(let i = 0; i < hacker1.length; i++){
    driverName = driverName+' '+hacker1[i]
//    console.log(hacker1[i])
}


console.log(driverName.toUpperCase())

let navigatorDriver = ()=>{
    let nameReverse = hacker2.split("").reverse().join("")
    console.log(nameReverse)
    
}

navigatorDriver()


let driverSort = () =>{
    // if(hacker1<hacker2){
    //     console.log("The driver's name goes first.")
    // }else if(hacker1>hacker2){
    //     console.log("The driver's name goes first.")
    // } else{
    //     console.log("What?! You both have the same name?")
    // }

    let arraySort = [hacker1, hacker2].sort()
    
   if (hacker1 === arraySort[0]){
    console.log("The driver's name goes first.")
    } else if (hacker2 === arraySort[0]){
        console.log("Yo, the navigator goes first definitely.")
    } else{
        console.log("What?! You both have the same name?")
    }

    
}

driverSort()


// Bonus

const paragraph = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis nunc rutrum sapien interdum, quis luctus risus maximus. Maecenas suscipit, nunc id eleifend vestibulum, mauris eros fringilla dui, quis convallis metus mi ut velit. Fusce a sem ut elit fermentum molestie. Nulla fringilla, lorem nec ornare semper, augue dolor feugiat ipsum, quis efficitur diam nisl non ligula. Fusce imperdiet, augue quis ultrices mollis, ipsum nibh auctor tellus, at posuere libero purus eu purus. Aliquam faucibus justo facilisis tristique tempus. Sed rutrum eleifend ligula. Praesent pellentesque urna in nulla dictum, eu tincidunt elit aliquet. Mauris feugiat, nibh eget laoreet faucibus, quam risus posuere neque, id varius tellus nulla id nunc.

Pellentesque ut nunc ornare, finibus sapien vitae, posuere diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sollicitudin pharetra maximus. Curabitur placerat pretium bibendum. Aliquam dignissim aliquet eros condimentum tristique. Aliquam rutrum blandit nisl, id dignissim arcu feugiat vel. Pellentesque ullamcorper diam ut sapien euismod vestibulum. Aliquam bibendum suscipit elit a gravida. Fusce congue eget ligula a bibendum. Nam pretium rhoncus magna, vel ultrices justo tempor sed. Vestibulum in vulputate erat. Donec pulvinar facilisis quam, ut pellentesque mauris molestie at. Nam id finibus sapien. Suspendisse tristique nisi nisi, ac suscipit lacus luctus at. Etiam viverra tortor at tempor vestibulum. Praesent sed dapibus libero.

Sed ultrices ante non augue pharetra, id aliquam nisi mattis. Nunc ultrices urna magna, ac tincidunt dui condimentum id. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer viverra orci urna, nec pellentesque risus maximus bibendum. Sed luctus lobortis sem sed faucibus. Suspendisse aliquet pharetra orci sit amet lacinia. Pellentesque tincidunt elit tortor, quis condimentum elit dictum sit amet. Fusce ac aliquet risus, ut tempor magna.`

let words = 1

let etAppears = 0

let countingWords = ()=>{
    for (let i = 0; i < paragraph.length; i++){
        if(paragraph[i] === " "){
            words++
        } 

        if(paragraph[i] === " " && paragraph[i+1] === "e" && paragraph[i+2]=== "t" && paragraph[i+3] ===" " ){
            etAppears++
        }

    }



    console.log(`This paragraph has ${words} words`)

    console.log(`This paragraph has ${etAppears} et appears`)
}

countingWords()