const loveIcons = document.getElementsByClassName('love')
const loveQuantityElement = document.getElementById('love-quantity')
let loveQuantity = parseInt(loveQuantityElement.innerText)
for (const love of loveIcons){
    love.addEventListener('click', function(){
        const newQuantity = loveQuantity++;
        loveQuantityElement.innerText = newQuantity
    })
}


const historySection = [];

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

document.getElementById('fire-s-button').addEventListener('click', function(){
const serviceName = getInnerText('fire-service')
const serviceNumber = getInnerText('fire-s-Number')
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

document.getElementById('ambulance-button').addEventListener('click', function(){
const serviceName = getInnerText('ambulance-service')
const serviceNumber = getInnerText('ambulance-number')
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

document.getElementById('women-button').addEventListener('click', function(){
const serviceName = getInnerText('women-helpline')
const serviceNumber = getInnerText('women-helpline-Number')
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

document.getElementById('anti-corruption-button').addEventListener('click', function(){
const serviceName = getInnerText('anti-corruption')
const serviceNumber = getInnerText('anti-corruption-Number')
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

document.getElementById('electricity-h-button').addEventListener('click', function(){
const serviceName = getInnerText('electricity-helpline')
const serviceNumber = getInnerText('electricity-helpline-Number')
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

document.getElementById('brac-h-button').addEventListener('click', function(){
const serviceName = getInnerText('brac')
const serviceNumber = getInnerText('brac-Number')
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

document.getElementById('railway-button').addEventListener('click', function(){
const serviceName = getInnerText('bd-railway')
const serviceNumber = getInnerText('bd-railway-Number')
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

    document.getElementById('clear-button').addEventListener('click' , function(){
        historyContainer.innerText = ''
    })
}
}



// const copyElement = document.getElementById('copy')
// let copyQuantity = parseInt(copyElement.innerText)
// const policeServiceNumber = getInnerText('police-Number')
// document.getElementById('police-copy-btn').addEventListener('click',function(){
//     navigator.clipboard.writeText(policeServiceNumber)
//     alert('number copy')
//     copyQuantity++
//     copyElement.innerText = copyQuantity

// })



const copyElement = document.getElementById('copy-quantity')
let copyQuantity = parseInt(copyElement.innerText)

document.getElementById('national-copy-button').addEventListener('click',function(){
    navigator.clipboard.writeText(getInnerText('national-e-Number'))
    const result = 'number copied : '+ getInnerText('national-e-Number')
    alert(result)
    copyQuantity++;
    copyElement.innerText = copyQuantity;
})

document.getElementById('police-copy-btn').addEventListener('click',function(){
    navigator.clipboard.writeText(getInnerText('police-Number'))
    const result = 'number copied : '+ getInnerText('police-Number')
    alert(result)
    copyQuantity++;
    copyElement.innerText = copyQuantity;
})

document.getElementById('fire-service-copy-btn').addEventListener('click',function(){
    navigator.clipboard.writeText(getInnerText('fire-s-Number'))
    const result = 'number copied : '+ getInnerText('fire-s-Number')
    alert(result)
    copyQuantity++;
    copyElement.innerText = copyQuantity;
})

document.getElementById('ambulance-copy-btn').addEventListener('click',function(){
    navigator.clipboard.writeText(getInnerText('ambulance-number'))
    const result = 'number copied : '+ getInnerText('ambulance-number')
    alert(result)
    copyQuantity++;
    copyElement.innerText = copyQuantity;
})
document.getElementById('women-copy-btn').addEventListener('click',function(){
    navigator.clipboard.writeText(getInnerText('women-helpline-Number'))
    const result = 'number copied : '+ getInnerText('women-helpline-Number')
    alert(result)
    copyQuantity++;
    copyElement.innerText = copyQuantity;
})
document.getElementById('anti-copy-btn').addEventListener('click',function(){
    navigator.clipboard.writeText(getInnerText('anti-corruption-Number'))
    const result = 'number copied : '+ getInnerText('anti-corruption-Number')
    alert(result)
    copyQuantity++;
    copyElement.innerText = copyQuantity;
})
document.getElementById('brac-copy-btn').addEventListener('click',function(){
    navigator.clipboard.writeText(getInnerText('brac-Number'))
    const result = 'number copied : '+ getInnerText('brac-Number')
    alert(result)
    copyQuantity++;
    copyElement.innerText = copyQuantity;
})
document.getElementById('bd-rail-copy-btn').addEventListener('click',function(){
    navigator.clipboard.writeText(getInnerText('bd-railway-Number'))
    const result = 'number copied : '+ getInnerText('bd-railway-Number')
    alert(result)
    copyQuantity++;
    copyElement.innerText = copyQuantity;
})
