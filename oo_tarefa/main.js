
function Carro(marca, modelo, ano, valor){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.valor = valor;

}
function Usado(Quilometragem, marca, modelo, ano, valor){
    
    this.Quilometragem = Quilometragem;
    
    Carro.call(this, marca, modelo, ano, valor);
}

function Defeituoso(defeito, marca, modelo, ano, valor){
    
    this.defeito = defeito;
    
    Carro.call(this, marca, modelo, ano, valor);
}



carro1 = new Carro("Chevrolet", "Tracker", 2023, 137750);
carro2 = new Usado(41000, "Chevrolet", "Onix", 2022, 79990);
carro3 = new Defeituoso("desgaste na pastilha de freio", "Renault", "Kwid", 2022, 52900);
console.log(carro1, carro2, carro3);