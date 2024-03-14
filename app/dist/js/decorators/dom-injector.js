export function domInjector(seletor) {
    return function (target, propertykey) {
        console.log(`Modificando protype ${target.constructor.name} e adicionando getter para a propriedade ${propertykey}`);
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
                console.log(`buscando elemento do DOm com o seletor ${seletor} para injetar em ${propertykey}`);
            }
            return elemento;
        };
        Object.defineProperty(target, propertykey, { get: getter });
    };
}
//# sourceMappingURL=dom-injector.js.map