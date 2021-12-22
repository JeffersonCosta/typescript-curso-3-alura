export function escapar(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {

    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: Array<any>) {

        let retornoExecucaoMetodo = metodoOriginal.apply(this, args);

        if (typeof retornoExecucaoMetodo === 'string') {

            // console.log(`@escape em ação na classe ${this.constructor.name} para o método ${propertyKey}`);
            retornoExecucaoMetodo = retornoExecucaoMetodo.replace(/<script>[\s\S]*?<\/script>/, '');
        }

        return retornoExecucaoMetodo;
    }

    return descriptor;
}
