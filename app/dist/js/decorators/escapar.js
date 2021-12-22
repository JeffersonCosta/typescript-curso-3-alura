export function escapar(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        let retornoExecucaoMetodo = metodoOriginal.apply(this, args);
        if (typeof retornoExecucaoMetodo === 'string') {
            retornoExecucaoMetodo = retornoExecucaoMetodo.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return retornoExecucaoMetodo;
    };
    return descriptor;
}
//# sourceMappingURL=escapar.js.map