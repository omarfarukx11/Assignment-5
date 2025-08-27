const historySection = [];


const loveIcons = document.getElementsByClassName('love')
const loveQuantityElement = document.getElementById('love-quantity')
let loveQuantity = parseInt(loveQuantityElement.innerText)
for (const love of loveIcons){
    love.addEventListener('click', function(){
        const newQuantity = loveQuantity++;
        loveQuantityElement.innerText = newQuantity
    })
}




// const callButton = document.getElementsByClassName('call-button')
// const serviceNames = document.getElementsByClassName('service-name')
// const serviceNumbers = document.getElementsByClassName('service-number')

// function toggleHandle (id){
//     for(const button of callButton){
//     button.addEventListener('click', function(){
//         for(const serviceName of serviceNames){
//             return serviceName.innerText
//         }
//         for(const serviceNumber of serviceNumbers){
//             return serviceNumber.innerText
//         }
//          const onlyText = document.getElementById(id).innerText
//     })
// }
// }

function getInnerText (id){
    const innerTextIs = document.getElementById(id).innerText
    return innerTextIs
}
function getInnerTextValue (id){
    const innerTextValueIs = parseInt(document.getElementById(id).innerText)
    return innerTextValueIs
}
function setInnerText (value){
    const newValue = document.getElementById("coin").innerText = value
    return newValue
}

document.getElementById('national-e-button').addEventListener('click', function(){
const serviceName = getInnerText('national-emergency')
const serviceNumber = getInnerText('national-e-Number')
const coin = getInnerTextValue('coin')
const newCoin = coin - 20;
if(coin < 20){
    alert("You Do Not Have Enough Balance. You Will Need At least 20 Coins To Make A Call")
    return
}
const result = "calling " + serviceName + " " + serviceNumber+'...'
alert(result)  
setInnerText(newCoin)

const history = {
    serviceName: serviceName,
    serviceNumber:serviceNumber,
    date:new Date().toLocaleTimeString()
}
historySection.push(history)
historyOfCall()
})


document.getElementById('police-button').addEventListener('click', function(){
const serviceName = getInnerText('police')
const serviceNumber = getInnerText('police-Number')
const coin = getInnerTextValue('coin')
const newCoin = coin - 20;
if(coin < 20){
    alert("You Do Not Have Enough Balance. You Will Need At least 20 Coins To Make A Call")
    return
}
const result = "calling " + serviceName + " " + serviceNumber+'...'
alert(result)  
setInnerText(newCoin)

const history = {
    serviceName: serviceName,
    serviceNumber:serviceNumber,
    date:new Date().toLocaleTimeString()
}
historySection.push(history)
historyOfCall()
})






function historyOfCall (){
const historyContainer = document.getElementById
('history-container')
historyContainer.innerText = ''
for(const history of historySection){
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="p-3 text-[18px] rounded-2xl flex justify-between items-center bg-[#fafafa] my-4">
        <div class="text-[14px] sm:text-[18px]">
            <h1 class=" font-semibold text-[#111111]">${history.serviceName}</h1>
            <p>${history.serviceNumber}</p>
        </div>
        <div class="text-[14px sm:text-[18px]">
            <p>${history.date}</p>
        </div>
      </div>   
    `
    historyContainer.appendChild(div)
}
}


// for(const button of callButton){
//     button.addEventListener('click', function(){
//         for(const serviceName of serviceNames){
//             alert(serviceName.innerText)
//         }
//         for(const serviceNumber of serviceNumbers){
//             console.log(serviceNumber.innerText)
//         }
//     })
// }

