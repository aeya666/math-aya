function calculate() {
    const alas = parseFloat(document.getElementById('alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);
    const miring = parseFloat(document.getElementById('miring').value);

    let resultText = '';

    if (alas && tinggi && !miring) {
        // Detailed calculation for hypotenuse
        resultText = `
            alas = ${alas}<br>
            tinggi = ${tinggi}<br><br>
            miring = √(alas × alas) + (tinggi × tinggi)<br>
            miring = √(${alas} × ${alas}) + (${tinggi} × ${tinggi})<br>
            miring = √${(alas * alas)} + ${(tinggi * tinggi)}<br>
            miring = √${(alas * alas) + (tinggi * tinggi)}<br>
            miring = ${(Math.sqrt(Math.pow(alas, 2) + Math.pow(tinggi, 2))).toFixed(2)}
        `;
    } else if (alas && miring && !tinggi) {
        // Detailed calculation for height
        const tinggiCalculated = Math.sqrt(Math.pow(miring, 2) - Math.pow(alas, 2));
        resultText = `
            alas = ${alas}<br>
            miring = ${miring}<br><br>
            tinggi = √(miring × miring) - (alas × alas)<br>
            tinggi = √(${miring} × ${miring}) - (${alas} × ${alas})<br>
            tinggi = √${(miring * miring)} - ${(alas * alas)}<br>
            tinggi = √${(miring * miring) - (alas * alas)}<br>
            tinggi = ${tinggiCalculated.toFixed(2)}
        `;
    } else if (tinggi && miring && !alas) {
        // Detailed calculation for base
        const alasCalculated = Math.sqrt(Math.pow(miring, 2) - Math.pow(tinggi, 2));
        resultText = `
            tinggi = ${tinggi}<br>
            miring = ${miring}<br><br>
            alas = √(miring × miring) - (tinggi × tinggi)<br>
            alas = √(${miring} × ${miring}) - (${tinggi} × ${tinggi})<br>
            alas = √${(miring * miring)} - ${(tinggi * tinggi)}<br>
            alas = √${(miring * miring) - (tinggi * tinggi)}<br>
            alas = ${alasCalculated.toFixed(2)}
        `;
    } else {
        resultText = 'masukin dua angka aja kocak biar ngitung yang ketiga';
    }

    document.getElementById('result').innerHTML = resultText;
}

function reset() {
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('miring').value = '';
    document.getElementById('result').innerHTML = '';
}


