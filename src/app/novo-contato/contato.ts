export class Contato {
    private _nome: string;
    private _sobrenome: string;
    private _telefone: number;
    private _email: string;
    private _aniversario: Date;
    
    
    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }

    public get sobrenome(): string {
        return this._sobrenome;
    }
    public set sobrenome(value: string) {
        this._sobrenome = value;
    }

    public get telefone(): number {
        return this._telefone;
    }
    public set telefone(value: number) {
        this._telefone = value;
    }

    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }

    public get aniversario(): Date {
        return this._aniversario;
    }
    public set aniversario(value: Date) {
        this._aniversario = value;
    }




    constructor () {
        this.nome = '';
        this.sobrenome = '';
        this.telefone = undefined;
        this.email = '';
        this.aniversario = undefined;
    }

  }