import { Categorias } from "./Categorias"

export class Produtos{
    public idProduto: number
    public nome: string
    public marca: string
    public preco: number
    public descricao: string
    public tamanho: string
    public categorias: Categorias
}