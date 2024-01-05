function parseCLI(input) {
    const args = [];
    let currentArg = '';
    let inQuotes = false;
    let quoteType = ''; // Speichert den aktuellen Anführungszeichentyp
    let escapeNext = false;

    for (let i = 0; i < input.length; i++) {
        const char = input[i];

        if (escapeNext) {
            if (char === 'n') {
                currentArg += '\n'; // Umwandlung von \n in LF
            } else if (char === 'r') {
                currentArg += '\r'; // Umwandlung von \r in CR
            } else {
                currentArg += char;
            }
            escapeNext = false;
        } else if (char === '\\') {
            escapeNext = true;
        } else if (char === '"' || char === "'") {
            if (inQuotes && quoteType === char) {
                inQuotes = false;
                quoteType = '';
            } else if (!inQuotes) {
                inQuotes = true;
                quoteType = char;
            } else {
                currentArg += char;
            }
        } else if (char === ' ' && !inQuotes) {
            if (currentArg.length > 0) {
                args.push(currentArg);
                currentArg = '';
            }
        } else {
            currentArg += char;
        }
    }

    if (currentArg.length > 0) {
        args.push(currentArg);
    }

    return args;
}