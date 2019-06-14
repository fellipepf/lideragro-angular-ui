
export class Departamento {
    id: number;
    nome: string;
}

export class Categoria {
    id: number;
    nome: string;
    departamento = new Departamento();
    
}

export class UnidadeMedida {
    id: number;
    nome: string;
    sigla: string;
    
}

export class Produto {
    id: number;
    codigoBarras: number;
    ativo = 'true';
    categoria = new Categoria();
    unidadeMedida = new UnidadeMedida();
    observacoes: string;
    nome: string;
    precoVenda: number;
}

export class Usuario {
    codigo: number;
    nome: string;
    email: string;
    senha: string;
}