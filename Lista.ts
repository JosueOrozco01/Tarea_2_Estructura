//Josue Fernando Orozco Robledo --> 1639723
class nodo {
    private data: number;
    private right: nodo | null;
    private left: nodo | null;

    constructor() {
        this.data = Math.floor(Math.random() * 9) + 1;
        this.right = null;
        this.left = null;
    }

    public getData(): number {
        return this.data;
    }

    public setRight(newRight: nodo | null): void {
        this.right = newRight;
    } 

    public getRight() {
        return this.right;
    }

    public setLeft(newLeft: nodo | null): void {
        this.left= newLeft;
    } 

    public getLeft() {
        return this.left;
    }
}

class Lista {
    private head: nodo | null; 
    private tail: nodo | null;

    constructor() { 
        this.head = null;
        this.tail = null;
    }

    public insert(): void {
        let newNode: nodo = new nodo()
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            if (this.tail != null) {
                this.tail.setRight(newNode);
                newNode.setLeft(this.tail);
                this.tail = newNode;
            }
        }
    }

    public printAll(): void {
        let current = this.head;
        while (current != null) {
            console.log(current.getData())
            current = current.getRight()
        }
    }

    public printPar(): void {
        let current = this.head;
        while (current != null) {
            if (current.getData() % 2 == 0) {
                console.log(current.getData())
            }
            current = current.getRight();
        }
    }
}

let miLista = new Lista();
miLista.insert()
miLista.insert()
miLista.insert()
miLista.insert()
miLista.insert()
miLista.printAll()
miLista.printPar()