export class View {
    constructor(seletor, escpar) {
        this.escapar = false;
        this.element = document.querySelector(seletor);
        if (escpar) {
            this.escapar = escpar;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        this.element.innerHTML = template;
    }
}
