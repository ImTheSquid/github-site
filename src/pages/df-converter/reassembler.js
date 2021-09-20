// Returns file as base64 if sucessful and false if not
export async function reassembleFiles(files) {
    let fileDatas = [];
    for (const file of files) {
        try {
            fileDatas.push(new Uint8Array(await file.arrayBuffer()));
        } catch {
            return [false, 'Unable to read file data'];
        }
    }

    // Make sure all file data starts with 0xDF, has a supported header version, and is in range
    fileDatas = fileDatas.filter(buffer => buffer.length >= 5 && buffer[0] === 0xDF && buffer[1] === 0);
    fileDatas.sort((left, right) => left[2] - right[2]);

    let numChunks = 0;
    let chunkSet = new Set();
    let output = new Uint8Array();
    const decoder = new TextDecoder('utf8');
    for (const buffer of fileDatas) {
        console.log(buffer);
        if (buffer[2] >= buffer[3] || (numChunks !== 0 && buffer[3] > numChunks)) {
            return [false, 'Files not part of same group.'];
        }
        chunkSet.add(buffer[2]);
        numChunks = buffer[3];
        output = concatTypedArrays(output, buffer.slice(4));
    }

    if (!isSetLinear(chunkSet) || chunkSet.size === 0) {
        return [false, 'Some chunks do not exist.'];
    }

    return [true, output];
}

function isSetLinear(set) {
    for (let setIndex = 0; setIndex < set.length; setIndex++) {
        if (!set.has(setIndex)) {
            return false;
        }
    }
    return true;
}

function concatTypedArrays(a, b) { // a, b TypedArray of same type
    var c = new (a.constructor)(a.length + b.length);
    c.set(a, 0);
    c.set(b, a.length);
    return c;
}