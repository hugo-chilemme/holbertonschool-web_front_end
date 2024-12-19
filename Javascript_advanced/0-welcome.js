


function welcome(firstName, lastName)
{
    if (!firstName) 
        throw new Error("Missing firstName parameter");
    if (!lastName) 
        throw new Error("Missing lasstName parameter");
    
    const fullName = `${firstName} ${lastName}`;

    function displayFullName()
    {
        alert(`Welcome ${fullName} !`);
    }

    displayFullName();
}
