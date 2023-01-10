//Valor inicial de contagem
let count = 0;

//Seleção de valores e botões

const values = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn){
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        } else if (styles.contains('incrase')){
            count++;
        } else {
            count = 0;
        }
        if (count > 0){
            values.style.color = "green"
        } 
        if (count < 0){
            values.style.color = "red"
        }
        if (count == 0){
            values.style.color = "black"
        }
        values.textContent = count;
        })
    });
git 