//NAV
        botoes = document.querySelectorAll('.btn_nav');
        botaonav1 = document.getElementById('btn_principal');
        botaonav2 = document.getElementById('btnnav2');
        botaonav3 = document.getElementById('btnnav3');
        botaonav4 = document.getElementById('btnnav4');


        botoes.forEach(botao => {
        botao.addEventListener('click', () => {

            const divs = [document.getElementById('div_principal'), document.getElementById('div2'), document.getElementById('div3'), document.getElementById('div4')];

            divs.forEach(div => div.style.display = 'none');

            if (botao.textContent === 'Porcentagem de um valor') {
                document.getElementById('div_principal').style.display = 'flex';
                botaonav1.id = '';
                botaonav2.id = '';
                botaonav3.id = '';
                botaonav4.id = '';
                botao.id = 'btn_principal';
            } else if (botao.textContent === 'Aumento em %') {
                document.getElementById('div2').style.display = 'flex';
                botaonav1.id = '';
                botaonav2.id = '';
                botaonav3.id = '';
                botaonav4.id = '';
                botao.id = 'btn_principal';
            } else if (botao.textContent === 'Diminuição em %') {
                document.getElementById('div3').style.display = 'flex';
                botaonav1.id = '';
                botaonav2.id = '';
                botaonav3.id = '';
                botaonav4.id = '';
                botao.id = 'btn_principal';
            }
            else if (botao.textContent === 'Valor x é quanto % de valor y?') {
                document.getElementById('div4').style.display = 'flex';
                botaonav1.id = '';
                botaonav2.id = '';
                botaonav3.id = '';
                botaonav4.id = '';
                botao.id = 'btn_principal';
            }
        });
        });

        //DIV 1
        document.getElementById('btn_calcular1').addEventListener('click', function() {
            
            var porcentagem = parseFloat(document.getElementById('porcentagem1').value);
            var valor = parseFloat(document.getElementById('valor1').value);
            var input_resultado = document.getElementById('resultado1');
            
            var resultado = (porcentagem / 100) * valor;

            if (!isNaN(porcentagem) && !isNaN(valor)) {
                input_resultado.value = resultado.toFixed(2);
                
            } 
            else {
                alert("Por favor, insira valores válidos.");
            }
        });

        document.getElementById('btn_limpar1').addEventListener('click', function() {
            document.getElementById('porcentagem1').value = '';
            document.getElementById('valor1').value = '';
            document.getElementById('resultado1').value = '';
        });

        //DIV 2
        document.getElementById('btn_calcular2').addEventListener('click', function() {
            
            var porcentagem = parseFloat(document.getElementById('porcentagem2').value);
            var valor = parseFloat(document.getElementById('valor2').value);
            var input_resultado = document.getElementById('resultado2');
            
            var resultado = (valor - porcentagem) / porcentagem * 100;

            if (!isNaN(porcentagem) && !isNaN(valor)) {
                input_resultado.value = "Aumento de " + resultado.toFixed(2) + "%";
            } 
            else {
                alert("Por favor, insira valores válidos.");
            }
        });

        document.getElementById('btn_limpar2').addEventListener('click', function() {
            document.getElementById('porcentagem2').value = '';
            document.getElementById('valor2').value = '';
            document.getElementById('resultado2').value = '';
        });

        //DIV 3
        document.getElementById('btn_calcular3').addEventListener('click', function() {
            
            var porcentagem = parseFloat(document.getElementById('porcentagem3').value);
            var valor = parseFloat(document.getElementById('valor3').value);
            var input_resultado = document.getElementById('resultado3');
            
            var resultado = (porcentagem - valor) / porcentagem * 100;

            if (!isNaN(porcentagem) && !isNaN(valor)) {
                input_resultado.value = "Diminuição de " + resultado.toFixed(2) + "%";
            } 
            else {
                alert("Por favor, insira valores válidos.");
            }
        });
        document.getElementById('btn_limpar3').addEventListener('click', function() {
            document.getElementById('porcentagem3').value = '';
            document.getElementById('valor3').value = '';
            document.getElementById('resultado3').value = '';
        });
        //DIV 4
        document.getElementById('btn_calcular4').addEventListener('click', function() {
            
            var valor1 = parseFloat(document.getElementById('porcentagem4').value);
            var valor2 = parseFloat(document.getElementById('valor4').value);
            var input_resultado = document.getElementById('resultado4');
            
            var resultado = (valor1 / valor2) * 100;

            if (!isNaN(valor1) && !isNaN(valor2)) {
                input_resultado.value = resultado.toFixed(2) + "%";
            } 
            else {
                alert("Por favor, insira valores válidos.");
            }
        });
        document.getElementById('btn_limpar4').addEventListener('click', function() {
            document.getElementById('porcentagem4').value = '';
            document.getElementById('valor4').value = '';
            document.getElementById('resultado4').value = '';
        });
