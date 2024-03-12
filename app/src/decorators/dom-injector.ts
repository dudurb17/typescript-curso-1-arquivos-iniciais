export function domInjector(seletor:string){
    return function (target:any, propertykey:string){
        console.log(`Modificando protype ${target.constructor.name} e adicionando getter para a propriedade ${propertykey}`)
        const getter=function(){
            const elemento=document.querySelector(seletor)
            console.log(`buscando elemento do DOm com o seletor ${seletor} para injetar em ${propertykey}`)
            return elemento
        }

        Object.defineProperty(target, propertykey,{get:getter})
    }
}