module.exports.signUpErrors = (err) => {
    let errors= { pseudo: '', email: '', password: ''}
    
    if(err.message.includes('pseudo'))
    errors.pseudo = "Pseudo incorrecte";

    if(err.message.includes('email'))
    errors.email = "Email incorrecte";

    if(err.message.includes('password'))
    errors.password = "Le mot de passe doit contenir au minimum 8 caractère";

    if(err.code === 11000 && Object.keys(err.keyValue)[0].includes('pseudo'))
    errors.pseudo = "Ce pseudo est déjà utilisé";

    if(err.code === 11000 && Object.keys(err.keyValue)[0].includes('email'))
    errors.email = "Cet email possède déjà un compte";

    return errors
};

module.exports.signInErrors = (err) => {
    let errors= { email: '', password: ''}

    if(err.message.includes('email')){
        errors.email = "L'email ou le mot de passe est incorrect";
        console.log("Email inconnu");
    }

    if(err.message.includes('password')){
        errors.password = "L'email ou le mot de passe est incorrect";
        console.log("Mauvais mot de passe");
    }

    return errors
};

module.exports.uploadErrors = (err) => {
    let errors= {format: '', maxSize: ''};

    if (err.message.includes('invalid file'))
    errors.format = "Format incompatabile";

    if (err.message.includes('max size'))
    errors.maxSize = "Fichier trop volumineux, la taille maximal est de: 500ko";

    return errors
}