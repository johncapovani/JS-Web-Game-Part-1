//Background Image Function

//THIS CODE WAS PROVIDED IN THE SOLUTION NEED TO STUDY THIS
function tile(url, left, bottom, width, height) {
    for (let h = 0; h < height; h++) {
        for (let w = 0; w < width; w++) {
            newImage(url, left + w * 100, bottom + h * 100)
        }
    }
}

function newImage(url, left, bottom) {
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight - horizon
let heightOfGrass = horizon

tile('assets/sky.png', 0, horizon, window.innerWidth / 100, heightOfSky / 100)
tile('assets/grass.png', 0, 0, window.innerWidth / 100, heightOfGrass / 100)

//THIS CODE WAS PROVIDED IN THE SOLUTION NEED TO STUDY THIS



//Create Image Function

// Declare Function

function createImage(link, leftPosistion, bottomPosistion) {

    let newImg = document.createElement('img')

    //We are appending the below settings to the above created newImg element

    newImg.src = link
    newImg.style.position = 'fixed'
    newImg.style.left = leftPosistion
    newImg.style.bottom = bottomPosistion
    document.body.append(newImg);

    //Need to return the result so this can be passed to the next function that being newItem()!!!

    return newImg

    //Need to return the result so this can be passed to the next function!!!

    //To make the sword clickable a conditional statment was added to determine 
    // whether or not a eventlistener should be added. Another method but will go object route per suggestion

    // if (link.includes('sword')) {

    //     newImg.addEventListener('click', function () {
    //         newImg.remove()
    //     })

    // }

}




//Add Little Guy
createImage('assets/green-character.gif', '100px', '100px')

//Add pine tree
createImage('assets/pine-tree.png', '450px', '200px')

//Add tree img

createImage('assets/tree.png', '200px', '300px')

//Add pillar image

createImage('assets/pillar.png', '350px', '100px')

//Add crate image

createImage('assets/crate.png', '150px', '200px')

//Add well image

createImage('assets/well.png', '500px', '425px')

//Create interactive Item
function newItem(link, leftPosistion, bottomPosistion) {

    //The output of this will equal the newImg result from createImage
    let newImg = createImage(link, leftPosistion, bottomPosistion)

    //Changed click to double click

    newImg.addEventListener('dblclick', function () {
        newImg.remove()
    })
}

//Add sword item
newItem('assets/sword.png', '500px', '405px')

//Add shield item
newItem('assets/sheild.png', '165px', '185px')

//Add staff item
newItem('assets/staff.png', '165px', '185px')



