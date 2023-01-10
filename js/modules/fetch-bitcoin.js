export default function fetchBitcoin(url, element) {
  fetch(url)
    .then((response) => response.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector(element);
      btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
    })
    .catch((erro) => console.log(Error(erro)));
}
