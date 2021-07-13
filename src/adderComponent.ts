
class adderComponent implements adderComponentState{
    initiator;
    constructor() {
        this.initiator = 2
    }
    adder (x: string, y: string) {
        return x + y + this.initiator
    }

    print () {
        console.log('added1', this.adder('3','22.4'))

    }

}

interface adderComponentState {
    initiator: number;
}

const addingMachine = new adderComponent()
addingMachine.print()