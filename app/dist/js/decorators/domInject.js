export function domInject(seletor) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const retornoExecucaoMetodo = metodoOriginal.apply(this, args);
            return retornoExecucaoMetodo;
        };
        return descriptor;
    };
}
