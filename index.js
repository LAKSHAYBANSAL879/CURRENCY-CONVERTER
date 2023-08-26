
const populate= async (value,currency)=>{
    let mystr=" ";
    let url="https://api.currencyapi.com/v3/latest?apikey=cur_live_wC4Vpemietv5rZ1EgaQqwblsWy1Gin46OQUv0tiV&base_currency="+currency;
    let response=await fetch(url);
    let rJson=await response.json()
    document.querySelector(".output").style.display="block";
    for(let key of Object.keys(rJson["data"])){
        mystr+=
        `
<tr>
<td>${key}</td>
<td>${rJson["data"][key]["code"]}</td>
<td>${rJson["data"][key]["value"]*value}</td>
</tr>
`
key,rJson["data"][key]["code"],rJson["data"][key]["value"];
    }

    const tablebody=document.querySelector("tbody");
    tablebody.innerHTML=mystr;

}
const btn=document.getElementById("sumbit")
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    const value=parseInt(document.querySelector("input[name='number']").value);
    const currency=(document.querySelector("select[name='currency']").value);

    populate(value,currency)
})
const tablebody=document.querySelector("tbody");
