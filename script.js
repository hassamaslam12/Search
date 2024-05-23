var mobiles = {
    Samsung: {
        SamsungA10: {
            name: "Samsung A10",
            ram: "4gb",
            rom: "64gb",
            camera: "13",
            price: "22,000 PKR"
        },
        SamsungA20: {
            name: "Samsung A20",
            ram: "4gb",
            rom: "64gb",
            camera: "18",
            price: "28,000"
        },
        SamsungA30: {
            name: "Samsung A30",
            ram: "4gb",
            rom: "64gb",
            camera: "25",
            price: "29,000"
        }
    },
    IPhone: {
        IPhone11: {
            name: "IPhone11",
            ram: "4gb",
            rom: "64gb",
            camera: "12",
            price: "100,000"
        },
        IPhone12: {
            name: "IPhone12",
            ram: "4gb",
            rom: "64gb",
            camera: "12",
            price: "150,000"
        },
        IPhone13: {
            name: "IPhone13",
            ram: "6gb",
            rom: "128gb",
            camera: "24",
            price: "200,000"
        }
    },
    Oppo: {
        OppoV20: {
            name: "OppoV20",
            ram: "8gb",
            rom: "128gb",
            camera: "64",
            price: "54,999"
        },
        OppoF19: {
            name: "OppoF19",
            ram: "6gb",
            rom: "128gb",
            camera: "48",
            price: "36,999"
        },
        OppoF11: {
            name: "OppoF11",
            ram: "4gb",
            rom: "64gb",
            camera: "48",
            price: "35,999"
        }
    },
    Vivo: {
        VivoY20: {
            name: "VivoY20",
            ram: "4gb",
            rom: "64gb",
            camera: "13",
            price: "26,999"
        },
        VivoY21: {
            name: "VivoY21",
            ram: "4gb",
            rom: "64gb",
            camera: "13",
            price: "43,999"
        },
        VivoY55: {
            name: "VivoY55",
            ram: "8gb",
            rom: "128gb",
            camera: "50",
            price: "64,999"
        }
    }
}
var brand = document.getElementById("brand");
var model = document.getElementById("model");
var container = document.getElementById("container");
var allBrands = Object.keys(mobiles);

for (var i = 0; i < allBrands.length; i++) {
    brand.innerHTML += `<option>${allBrands[i]}</option>`;
}

function selectBrand() {
    var selectedBrand = brand.value;
    var allModels = Object.keys(mobiles[selectedBrand]);
    model.innerHTML = "";
    for (var i = 0; i < allModels.length; i++) {
        model.innerHTML += `<option value="${allModels[i]}">${allModels[i]}</option>`;
    }
}

function selectModel() {
    let SelectedBrand = brand.value
    let SelectedModel = model.value
    
    var sbtn = document.createElement("P")
    sbtn.setAttribute('id','title')
    var txt = document.createTextNode(SelectedBrand +": "+SelectedModel)  
    sbtn.appendChild(txt)
    container.appendChild(sbtn)
    
    var specs = document.createElement("H2")
    var txt = document.createTextNode("Specifications:")  
    specs.appendChild(txt)
    container.appendChild(specs)
    let result = document.getElementById("result");
    result.innerHTML=`<p> ${displaySpecs(SelectedBrand,SelectedModel)} </p>`
//    var resultP = document.createElement("p");
//     // var resultTxt = document.createTextNode(displaySpecs(SelectedBrand,SelectedModel))
//     resultP.textContent("displaySpecs(SelectedBrand,SelectedModel)");
//     result.appendChild(resultP)
}

function displaySpecs(selectedBrand, selectedModel){

    let Okeys = Object.keys(mobiles[selectedBrand][selectedModel]);
    let ret="";
    for(let i = 0; i < Okeys.length; i++){
        let a = Okeys[i];
        ret+=`${a}: ${mobiles[selectedBrand][selectedModel][a]} <br/>`;
    }
        return ret;
}