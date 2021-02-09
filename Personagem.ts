import prompt from 'prompt-sync'
class Personagem {
  public constructor(
    public name: string,
    public vida: number,
    public defesa: number,
    public ataque: number,
    public energia: number
  ) { }
}

const personagem = new Personagem('Well', 200, 100, 50, 120)

let teclado = prompt()
let option: number = 0

while (option != 9) {
  console.log('*========== Personagem ==========*')
  console.log('|1. Treinar ataque               |')
  console.log('|2. Treinar defesa               |')
  console.log('|3. Imprimir atributos           |')
  console.log('|9. Sair                         |')
  console.log('*================================*')

  option = Number(teclado('Escolha uma ação'))

  switch (option) {
    case 1:
      personagem.ataque += 2
      break

    case 3:
      console.log(personagem)
      break

    default:
      break
  }

}
