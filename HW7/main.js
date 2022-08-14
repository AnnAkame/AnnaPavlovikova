const btn = document.querySelector(".btn");
const cardWrapper =document.querySelector('.card-wrapper');
const nft = [];

btn.addEventListener('click', ()=>{
    nft.push(getRandom())
    nftRender()
    console.log(nft)
})

function nftRender() {
    let result = "";
    for( let i = 0; i<nft.length; i++){
        result += `<div class="Cards">
        <p class = "card-name">Card Name</p>
        <p class = "card-descriptions"> Card Descriptions</p>
        <div class = "img"></div>
        <button class="btn-delete"> delete </button>
        </div>`}

    cardWrapper.innerHTML = result;
}

function getRandom() {
    return Math.floor(Math.round()*220)

}