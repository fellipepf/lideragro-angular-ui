
export class Categoria {
    id: number;
    nome: string;
    
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