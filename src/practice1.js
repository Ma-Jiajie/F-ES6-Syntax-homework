const parseData = ( {data, column} ) => {
    const output = [];

    data.map( item => {
            let member = {};
            column.forEach(it => {
                member[it.name] = item.shift();
            })

            output.push(member);
        }
    )

    return output;
}
export { parseData };
