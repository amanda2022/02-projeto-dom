let titulo = document.createElement("h1")

Titulo.id="Titulo";
Titulo.innerText="loja de cosmeticos"

let body = document.querySelector("body")

body.appendChild(titulo);

let produto = document.createElement("div")
produto.innerHTML = `
<div>
<p> Descrição: </P>
<P>O Protetor Hidratante Uniform&Matte, possui FPS 30 e o antioxidante natural Vitamina C, que controla a oleosidade,</P>
<P> uniformiza e reduz imperfeições da pele em um semana. 
<p>Nossa pele é exposta diariamente a diversas agressões e merece um cuidado especial.</P>
<p id="preco"> R$ 22.39</p>
</div>


`