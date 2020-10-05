const templateBeginning = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Team Profile Generator</title>
</head>

<body>
    <header>
        <h2>My Team</h2>
    </header>
    <main>
        <div class="container">
            <div class="row justify-content-md-center justify-content-around">`;

const templateEnd = `</div>
</main>
</body>

</html>`;

const render = employeeList => {
    const employeeCards = employeeList.map(employee => `<div class="col-lg-3 col-sm-6 col-xs-12">
        <div class="card shadow mb-5 bg-white rounded">
            <div class="card-header">
                <h4 class="card-title">${employee.getName()}</h4>
                <h5 class="card-title">${employee.getRole()}</h5>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${employee.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                    ${employee.getRole() === 'Intern' ? `<li class="list-group-item">School: ${employee.getSchool()}</li>` : ''}
                    ${employee.getRole() === 'Engineer' ? `<li class="list-group-item">GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a></li>` : ''}
                    ${employee.getRole() === 'Manager' ? `<li class="list-group-item">Office Number: ${employee.getOfficeNumber()}</li>` : ''}
                </ul>
            </div>
        </div>
    </div>`);

    return templateBeginning + employeeCards.join('') + templateEnd;
};

module.exports = render;