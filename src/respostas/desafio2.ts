
enum Trabalho {
    Atriz,
    Padeiro
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Humano = {
    nome: 'Mariana',
    idade: 22,
    profissao: Trabalho.Atriz
};

let pessoa2: Humano = {
    nome: 'Carlos',
    idade: 29,
    profissao: Trabalho.Padeiro
};

let pessoa3: Humano = {
    nome: 'Larissa',
    idade: 19,
    profissao: Trabalho.Atriz
};

let pessoa4: Humano = {
    nome: "Marcos",
    idade: 25,
    profissao: Trabalho.Padeiro
}