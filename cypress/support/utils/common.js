cy.utils = {};

// replace multiple variables in json template prefixwith $ (eg. "$var", "some $var") using subdata in data
// use value from default instead if require value not exist in subdata 
cy.utils.replaceVariables = (json, data, subdataKey) => {
    const def = data['default'];
    const subdata = data[subdataKey];
    let jsonStr = JSON.stringify(json);
    // match "$var" and $var
    const matches = jsonStr.match(/[\"]{0,1}\$[0-9aA-zZ]+[\"]{0,1}/g);
    for (let i = 0; i < matches.length; i++) {
        const match = matches[i];
        const dataKey = match.replace(/[\"\$]/g, "");
        let value = dataKey in subdata ? subdata[dataKey] : def[dataKey];
        if (typeof value == "string") {
            value = '"' + value + '"';
        }
        jsonStr = jsonStr.replace(match, value);
    }
    return JSON.parse(jsonStr);
};