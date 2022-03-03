class ControleRemoto {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
    }
    // Método de instância
    aumentarVol() {
        this.volume += 5
    }
    // Método de instância
    diminuirVol() {
        this.volume -= 5
    }
    
    // Método estático = não é restrito a uma instancia especifica, mas é invocado pela classe
    // Métodos estáticos NÃO têm acesso aos dados das instancias!

    static trocaPilhas() {
        console.log('Todas as pilhas foram trocadas.')
    }
    // EXEMPLO DE METODO ESTÁTICO: Math.random()!
}

const contr1 = new ControleRemoto('Samsung')
ControleRemoto.trocaPilhas()