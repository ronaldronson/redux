export function getNestedObj(namespace, root) {
    return namespace.split('.').reduce(
        (pre, cur) => !!pre[cur] ? pre[cur] : {}, root || this
    )
}