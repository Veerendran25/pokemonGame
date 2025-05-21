const selectionSlide=document.getElementById("selectSlide")
const mode2=document.getElementById("mode2")
const mainContent=document.getElementById("mainContainer")
let pointForPlayer=0
let pointForComputer=0
const playerPoint=document.getElementById("playerPoint")
const compPoint=document.getElementById("compPoint")
const text=document.getElementById("playertext")


function switchMode()
{
    selectionSlide.style.display="none"
    mode2.style.display="flex"
    pointForPlayer=0
    pointForComputer=0
    playerPoint.innerText=pointForPlayer
    compPoint.innerText=pointForComputer
}
function switchMode1()
{
    mode2.style.display="none"
    selectionSlide.style.display="flex"
    pointForPlayer=0
    pointForComputer=0
    playerPoint.innerText=pointForPlayer
    compPoint.innerText=pointForComputer
}

async function runMode()
{
    try
    {
    const randomIndex=Math.floor(Math.random()*1025 +1)
    console.log(randomIndex)
    const CompResponse= await fetch(`https://pokeapi.co/api/v2/pokemon/${randomIndex}/`)
    const inputText=document.getElementById("inputText").value.toLowerCase().trim()
    const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${inputText}`)
    if(!response.ok)
    {
        window.alert("Enter valid pokemon name")
        throw new Error("Enter correct pokemon name")
    }
    const data=await response.json()
    console.log(data)
    const compData=await CompResponse.json()
    console.log(compData)
    const playerSprite=data.sprites.front_default
    const compSprite=compData.sprites.front_default

    let dataForPlayer=`
                <h1>PLAYER</h1>
                <div class="c">
                    <div class="title">${data.name}</div>
                <div class="card">
                    <div class="left-side">
                        <p id="health">HP-${data.stats[0].base_stat}</p>
                        <p id="weight">W-${data.weight}</p>
                        <p id="height">H-${data.height}</p>
                    </div>
                    <div class="middle"><img src="${playerSprite}" alt="pokemon image" id="image"></div>
                    <div class="right-side">
                        <p id="attack">A-${data.stats[1].base_stat}</p>
                        <p id="speed">S-${data.stats[5].base_stat}</p>
                        <p id="Defence">D-${data.stats[2].base_stat}</p>
                    </div>
    `
    let dataForversus=`
    <h1>VS</h1>
    `
    let dataForComputer=`
    <h1>COMPUTER</h1>
                <div class="c">
                    <div class="title">${compData.name}</div>
                <div class="card">
                    <div class="left-side">
                    <p id="h">HP-${compData.stats[0].base_stat}</p>
                        <p id="w">W-${compData.weight}</p>
                        <p id="he">H-${compData.height}</p>
                    </div>
                    <div class="middle"><img src="${compSprite}" alt="pokemon image" id="image"></div>
                    <div class="right-side">
                        <p id="a">A-${compData.stats[1].base_stat}</p>
                        <p id="s">S-${compData.stats[5].base_stat}</p>
                        <p id="D">D-${compData.stats[2].base_stat}</p>
                    </div>
                </div>
            </div>
    `

    const body=document.getElementById("cardContainer") 
    const player=document.createElement("Div")
    const versus=document.createElement("Div")
    const computer=document.createElement("Div")
    player.classList.add("Playercard")
    versus.classList.add("vs")
    computer.classList.add("Computercard")
    computer.innerHTML=dataForComputer
    versus.innerHTML=dataForversus

    player.innerHTML=dataForPlayer
    body.appendChild(player)
    body.appendChild(versus)
    body.appendChild(computer)
    mainContent.style.display="flex"
    selectionSlide.style.display="none"
    mode2.style.display="none"

    const hp=document.getElementById("health")
    const weight=document.getElementById("weight")
    const height=document.getElementById("height")
    const attack=document.getElementById("attack")
    const defense=document.getElementById("Defence")
    const speed=document.getElementById("speed")
    const h=document.getElementById("h")
    const s=document.getElementById("s")
    const he=document.getElementById("he")
    const w=document.getElementById("w")
    const a=document.getElementById("a")
    const d=document.getElementById("D")
    const playerPoint=document.getElementById("playerPoint")
    const compPoint=document.getElementById("compPoint")


    const selected = document.querySelector('input[name="stat"]:checked');
    if (!selected) {
        alert("Please select a stat.");
        return;
    }

    switch (selected.value) {
        case "HP":
            console.log("Health selected");
            if(data.stats[0].base_stat > compData.stats[0].base_stat)
            {
            hp.classList.add("selectedItemWon")
            h.classList.add("selectedItemLoss")
            text.innerText="Player wins!!!"
            text.classList.add("playerwon")
            pointForPlayer+=1
            }
            else if (data.stats[0].base_stat < compData.stats[0].base_stat)
            {
                h.classList.add("selectedItemWon")
                hp.classList.add("selectedItemLoss")
                text.innerText="Computer wins!!!"
                text.classList.add("playerlost")
                pointForComputer+=1
            }
            else
            {
                text.innerText="Tied !!!"
                text.classList.add("playerties")
            }
            console.log(hp)
            break;
        case "W":
            console.log("Weight selected");
            if(data.weight > compData.weight)
            {
            weight.classList.add("selectedItemWon")
            w.classList.add("selectedItemLoss")
            text.innerText="Player wins!!!"
            text.classList.add("playerwon")
            pointForPlayer+=1
            }
            else if (data.weight < compData.weight)
            {
                w.classList.add("selectedItemWon")
                weight.classList.add("selectedItemLoss")
                text.innerText="Computer wins!!!"
                text.classList.add("playerlost")
                pointForComputer+=1
            }
            else
            {
                text.innerText="Tied !!!"
                text.classList.add("playerties")
            }
            console.log(weight)
            break;
        case "H":
            console.log("Height selected");
            if(data.height > compData.height)
            {
            height.classList.add("selectedItemWon")
            he.classList.add("selectedItemLoss")
            text.innerText="Player wins!!!"
            text.classList.add("playerwon")
            pointForPlayer+=1
            }
            else if (data.height < compData.height)
            {
                he.classList.add("selectedItemWon")
                height.classList.add("selectedItemLoss")
                text.innerText="Computer wins!!!"
                text.classList.add("playerlost")
                pointForComputer+=1
            }
            else
            {
                text.innerText="Tied !!!"
                text.classList.add("playerties")
            }
            console.log(height)
            break;
        case "A":
            console.log("Attack selected");
            if(data.stats[1].base_stat > compData.stats[1].base_stat)
            {
            attack.classList.add("selectedItemWon")
            a.classList.add("selectedItemLoss")
            text.innerText="Player wins!!!"
            text.classList.add("playerwon")
            pointForPlayer+=1
            }
            else if (data.stats[1].base_stat < compData.stats[1].base_stat)
            {
                a.classList.add("selectedItemWon")
                attack.classList.add("selectedItemLoss")
                text.innerText="Computer wins!!!"
                text.classList.add("playerlost")
                pointForComputer+=1
            }
            else
            {
                text.innerText="Tied !!!"
                text.classList.add("playerties")
            }
            console.log(attack)
            break;
        case "D":
            console.log("Defence selected");
            if(data.stats[2].base_stat > compData.stats[2].base_stat)
            {
            defense.classList.add("selectedItemWon")
            d.classList.add("selectedItemLoss")
            text.innerText="Player wins!!!"
            text.classList.add("playerwon")
            pointForPlayer+=1
            }
            else if (data.stats[2].base_stat < compData.stats[2].base_stat)
            {
                d.classList.add("selectedItemWon")
                defense.classList.add("selectedItemLoss")
                text.innerText="Computer wins!!!"
                text.classList.add("playerlost")
                pointForComputer+=1
            }
            else
            {
                text.innerText="Tied !!!"
                text.classList.add("playerties")
            }
            console.log(defence)
            break;
        case "S":
            console.log("Speed selected");
            if(data.stats[5].base_stat > compData.stats[5].base_stat)
            {
            speed.classList.add("selectedItemWon")
            s.classList.add("selectedItemLoss")
            text.innerText="Player wins!!!"
            text.classList.add("playerwon")
            pointForPlayer+=1
            }
            else if (data.stats[5].base_stat < compData.stats[5].base_stat)
            {
                s.classList.add("selectedItemWon")
                speed.classList.add("selectedItemLoss")
                text.innerText="Computer wins!!!"
                text.classList.add("playerlost")
                pointForComputer+=1
            }
            else
            {
                text.innerText="Tied !!!"
                text.classList.add("playerties")
            }
            console.log(speed)
            break;
        default:
            console.log("Unknown stat selected");
    }
    playerPoint.innerText=pointForPlayer
    compPoint.innerText=pointForComputer

    }
    catch(error)
    {
        console.error(error)
    }
}

function retryFunction() {
    mainContent.style.display = "none";
    selectionSlide.style.display = "flex";
    mode2.style.display = "none";
    
    document.getElementById("inputText").value=""
    document.querySelectorAll('input[name="stat"]').forEach(input => input.checked = false);
    document.querySelectorAll('.selectedItemWon, .selectedItemLoss').forEach(el => {
        el.classList.remove('selectedItemWon', 'selectedItemLoss');
    });
    document.querySelectorAll(".Playercard ,.vs,.Computercard").forEach(el=>el.remove())
    document.getElementById("inputText1").value=""
    pointForPlayer=pointForPlayer
    pointForComputer=pointForComputer
    text.innerText = "";
    text.classList.remove('playerwon', 'playerlost', 'playerties');
}



















//mode 2 


//for playing with all stats of the pokemon

async function runMode1()
{
    try
    {
    const randomIndex=Math.floor(Math.random()*1025 +1)
    console.log(randomIndex)
    const CompResponse= await fetch(`https://pokeapi.co/api/v2/pokemon/${randomIndex}/`)
    const inputText=document.getElementById("inputText1").value.toLowerCase().trim()
    const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${inputText}`)
    if(!response.ok)
    {
        window.alert("Enter valid pokemon name")
        throw new Error("Enter correct pokemon name")
    }
    const data=await response.json()
    console.log(data)
    const compData=await CompResponse.json()
    console.log(compData)
    const playerSprite=data.sprites.front_default
    const compSprite=compData.sprites.front_default

    let dataForPlayer=`
                <h1>PLAYER</h1>
                <div class="c">
                    <div class="title">${data.name}</div>
                <div class="card">
                    <div class="left-side">
                        <p id="health">HP-${data.stats[0].base_stat}</p>
                        <p id="weight">W-${data.weight}</p>
                        <p id="height">H-${data.height}</p>
                    </div>
                    <div class="middle"><img src="${playerSprite}" alt="pokemon image" id="image"></div>
                    <div class="right-side">
                        <p id="attack">A-${data.stats[1].base_stat}</p>
                        <p id="speed">S-${data.stats[5].base_stat}</p>
                        <p id="Defence">D-${data.stats[2].base_stat}</p>
                    </div>
    `
    let dataForversus=`
    <h1>VS</h1>
    `
    let dataForComputer=`
    <h1>COMPUTER</h1>
                <div class="c">
                    <div class="title">${compData.name}</div>
                <div class="card">
                    <div class="left-side">
                    <p id="h">HP-${compData.stats[0].base_stat}</p>
                        <p id="w">W-${compData.weight}</p>
                        <p id="he">H-${compData.height}</p>
                    </div>
                    <div class="middle"><img src="${compSprite}" alt="pokemon image" id="image"></div>
                    <div class="right-side">
                        <p id="a">A-${compData.stats[1].base_stat}</p>
                        <p id="s">S-${compData.stats[5].base_stat}</p>
                        <p id="D">D-${compData.stats[2].base_stat}</p>
                    </div>
                </div>
            </div>
    `

    const body=document.getElementById("cardContainer") 
    const player=document.createElement("Div")
    const versus=document.createElement("Div")
    const computer=document.createElement("Div")
    player.classList.add("Playercard")
    versus.classList.add("vs")
    computer.classList.add("Computercard")
    computer.innerHTML=dataForComputer
    versus.innerHTML=dataForversus

    player.innerHTML=dataForPlayer
    body.appendChild(player)
    body.appendChild(versus)
    body.appendChild(computer)
    mainContent.style.display="flex"
    selectionSlide.style.display="none"
    mode2.style.display="none"

    const hp=document.getElementById("health")
    const weight=document.getElementById("weight")
    const height=document.getElementById("height")
    const attack=document.getElementById("attack")
    const defense=document.getElementById("Defence")
    const speed=document.getElementById("speed")
    const h=document.getElementById("h")
    const s=document.getElementById("s")
    const he=document.getElementById("he")
    const w=document.getElementById("w")
    const a=document.getElementById("a")
    const d=document.getElementById("D")
    const text=document.getElementById("playertext")
    const playerPoint=document.getElementById("playerPoint")
    const compPoint=document.getElementById("compPoint")


    
            if(data.stats[0].base_stat > compData.stats[0].base_stat)
            {
            hp.classList.add("selectedItemWon")
            h.classList.add("selectedItemLoss")
            pointForPlayer+=1
            }
            else if (data.stats[0].base_stat < compData.stats[0].base_stat)
            {
                h.classList.add("selectedItemWon")
                hp.classList.add("selectedItemLoss")
                pointForComputer+=1
            }
            else
            {
                h.classList.add("selectedItemTies")
                hp.classList.add("selectedItemTies")
            }
            if(data.weight > compData.weight)
            {
            weight.classList.add("selectedItemWon")
            w.classList.add("selectedItemLoss")
            pointForPlayer+=1
            }
            else if (data.weight < compData.weight)
            {
                w.classList.add("selectedItemWon")
                weight.classList.add("selectedItemLoss")
                pointForComputer+=1
            }
            else
            {
                w.classList.add("selectedItemTies")
                weight.classList.add("selectedItemTies")
            }
            if(data.height > compData.height)
            {
            height.classList.add("selectedItemWon")
            he.classList.add("selectedItemLoss")
            pointForPlayer+=1
            }
            else if (data.height < compData.height)
            {
                he.classList.add("selectedItemWon")
                height.classList.add("selectedItemLoss")
                pointForComputer+=1
            }
            else
            {
                he.classList.add("selectedItemTies")
                height.classList.add("selectedItemTies")
            }
            if(data.stats[1].base_stat > compData.stats[1].base_stat)
            {
            attack.classList.add("selectedItemWon")
            a.classList.add("selectedItemLoss")
            pointForPlayer+=1
            }
            else if (data.stats[1].base_stat < compData.stats[1].base_stat)
            {
                a.classList.add("selectedItemWon")
                attack.classList.add("selectedItemLoss")
                pointForComputer+=1
            }
            else
            {
                a.classList.add("selectedItemTies")
                attack.classList.add("selectedItemTies")
            }
            if(data.stats[2].base_stat > compData.stats[2].base_stat)
            {
            defense.classList.add("selectedItemWon")
            d.classList.add("selectedItemLoss")
            pointForPlayer+=1
            }
            else if (data.stats[2].base_stat < compData.stats[2].base_stat)
            {
                d.classList.add("selectedItemWon")
                defense.classList.add("selectedItemLoss")
                pointForComputer+=1
            }
            else
            {
                d.classList.add("selectedItemTies")
                defense.classList.add("selectedItemTies")
            }
            if(data.stats[5].base_stat > compData.stats[5].base_stat)
            {
            speed.classList.add("selectedItemWon")
            s.classList.add("selectedItemLoss")
            pointForPlayer+=1
            }
            else if (data.stats[5].base_stat < compData.stats[5].base_stat)
            {
                s.classList.add("selectedItemWon")
                speed.classList.add("selectedItemLoss")
                pointForComputer+=1
            }
            else
            {
                s.classList.add("selectedItemTies")
                speed.classList.add("selectedItemTies")
            }
    playerPoint.innerText=pointForPlayer
    compPoint.innerText=pointForComputer


    if(pointForPlayer>pointForComputer)
    {
        text.innerText="Player wins!!!"
        text.classList.add("playerwon")
    }
    else if(pointForComputer>pointForPlayer)
    {
        text.innerText="Computer wins!!!"
        text.classList.add("playerlost")
    }
    else
    {
        text.innerText="Tied !!!"
        text.classList.add("playerties")
    }
    }
    catch(error)
    {
        console.log(error)
    }
}











