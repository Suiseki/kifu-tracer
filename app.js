var adderComponent = /** @class */ (function () {
    function adderComponent() {
        this.initiator = 6;
    }
    adderComponent.prototype.adder = function (x, y) {
        return x + y + this.initiator;
    };
    adderComponent.prototype.print = function () {
        console.log('adsss8ded:', this.adder(3, 32));
    };
    return adderComponent;
}());
var addingMachine = new adderComponent();
addingMachine.print();
