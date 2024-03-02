function render(cars){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Motor Expo 2023</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <h1>TOP 10 CARS MOTOR EXPO 2023</h1>
            <table>
                <thead>
                    <tr>
                    <th>Rank</th>
                    <th>Brand</th>
                    <th>Reserve</th>
                    </tr>
                </thead>
                <tbody>
                ${cars
                .map((car)=> 
                    `<tr>
                        <td>${car.rank}</td>
                        <td>${car.brand}</td>
                        <td>${car.reserve}</td>
                    </tr>`)
                .join('')}
                </tbody>
            </table>
    </body>
    </html>
`};

module.exports = render;