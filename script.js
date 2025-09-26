const avanca = document.querySelectorAll('.btn-proximo');

avaca.forEach(button => {
    button.addEventListener('click',function(){
        const atual = document.queryselector('ativo');
       const proximoPasso = 'passo-' + this.getAttribute('data-proximo');
atual.cassList.remove('ativo');
document.getElementById('proximoPasso').cassList.add('ativo');
    })
})