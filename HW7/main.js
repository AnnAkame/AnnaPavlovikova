const btn = document.querySelector(".btn");
    const cardWrapper =document.querySelector('.card-wrapper');
    let nft = [{
    }];

    btn.addEventListener('click', ()=>{
        nftRender(nft.push(getRandomId()))
        console.log(nft)

    })
const btnDelete = document.querySelector('.delete');
function deleteCard(cardId) {
        nftRender(nft = nft.filter(el => el.id !==cardId));

}

    function nftRender() {
        let result = "";
        for( let i = 0; i<nft.length; i++){
            result += `<div class="Cards">
        <p class = "card-name">Card Name</p>
        <p class = "card-descriptions"> Card Descriptions</p>
        <div class = "img"></div>
        <button class="btn-delete" onclick="deleteCard(${nft[i].id})"></button>
        </div>`}

        cardWrapper.innerHTML = result;
    }

    function getRandomId() {
        return{
            id: Math.floor( Math.random()*1000 )}}
