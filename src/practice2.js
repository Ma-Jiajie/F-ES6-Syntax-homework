const inject = (items, sections) => {
    let items_copy = [...items];
    sections.sort( (it1, it2) => it2.index - it1.index ).map(
        it => {
            items_copy.splice(it.index, 0, it.content);
        }
    );

    return items_copy;
}
export { inject };
