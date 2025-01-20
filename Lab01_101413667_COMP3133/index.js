const fs = require('fs');

if (fs.existsSync('canada.txt')) {
    fs.unlinkSync('canada.txt');
}

if (fs.existsSync('usa.txt')) {
    fs.unlinkSync('usa.txt');
}

console.log('Old files deleted successfully!');

fs.readFile('input_countries.csv', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    const rows = data.split('\n'); 
    const headers = rows[0]; 
    let canadaData = [headers];
    let usaData = [headers];

   
    for (let i = 1; i < rows.length; i++) {
        let row = rows[i];
        if (row.includes('Canada')) {
            canadaData.push(row);
        }
        if (row.includes('United States')) {
            usaData.push(row);
        }
    }

    
    fs.writeFileSync('canada.txt', canadaData.join('\n'));
    fs.writeFileSync('usa.txt', usaData.join('\n'));

    console.log('Files created successfully!');
});