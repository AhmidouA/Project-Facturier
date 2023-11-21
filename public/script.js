"use strict";
class FormInput {
    constructor() {
        this.form = document.getElementById('form');
        this.type = document.getElementById('type');
        this.firstName = document.getElementById('firstName');
        this.lastName = document.getElementById('lastName');
        this.address = document.getElementById('address');
        this.country = document.getElementById('country');
        this.town = document.getElementById('town');
        this.codeZip = document.getElementById('zip');
        this.product = document.getElementById('product');
        this.price = document.getElementById('price');
        this.quantity = document.getElementById('quantity');
        this.tva = document.getElementById('tva');
        //listner
        this.submitFormListener();
    }
    // submit Listners
    submitFormListener() {
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
    }
    handleSubmit(e) {
        e.preventDefault();
        const inputs = this.inputData();
        if (Array.isArray(inputs)) {
            const [type, firstName, lastName, address, country, town, codeZip, product, price, quantity, tva] = inputs;
            console.log(type, firstName, lastName, address, country, town, codeZip, product, price, quantity, tva);
        }
    }
    // Tuple
    inputData() {
        const type = this.type.value;
        const firstName = this.firstName.value;
        const lastName = this.lastName.value;
        const address = this.address.value;
        const country = this.country.value;
        const town = this.town.value;
        const codeZip = this.codeZip.valueAsNumber;
        const product = this.product.value;
        const price = this.price.valueAsNumber;
        const quantity = this.quantity.valueAsNumber;
        const tva = this.tva.valueAsNumber;
        if (codeZip > 0 && price > 0 && quantity > 0 && tva > 0) {
            return [type, firstName, lastName, address, country, town, codeZip, product, price, quantity, tva];
        }
        else {
            alert('LEs valeurs numériques doivent etre supérieur à 9');
            return;
        }
    }
}
new FormInput();
