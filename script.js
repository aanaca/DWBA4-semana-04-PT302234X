const template = document.createElement('template');

template.innerHTML = `
<div id= "menu" align="right"><a href="index.html" target="_top"> HOME /</a><a href="Contato.html" target="_top"> CONTATO /</a><a href="Sobre.html" target="_top"> SOBRE</a></div>
`;

document.body.appendChild(template.content);