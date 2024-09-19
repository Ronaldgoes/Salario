function Executar1009(){
    let salarioFixo, comissão, vendedor, totaldeVendas, salariocombonus
    vendedor = (prompt("Digite o nome do vendedor"))
    salarioFixo = Number(prompt("Digite o salario Fixo"))
    totaldeVendas = Number(prompt("Digite o total de vendas"))
    comissão = totaldeVendas * 0.15
    salariocombonus = salarioFixo + comissão
    
    alert("vendedor" + vendedor+ "\n salario com bonus R$" + salariocombonus.toFixed(2))



}