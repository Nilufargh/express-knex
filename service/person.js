//our service does'nt care what underline database we are using
//normally we have more than one endpoint to access the databse
//handling try/catch on the controller level or service level

const personDAO = require('../dao/person'); 

class PersonService {
    createPerson(personDto){
        const {firstName, lastName, email} = personDto;
        return personDAO.createPerson(firstName, lastName, email);

    }

    deletePerson(personDto){
        return personDAO.deletePerson(personDto);
    }
 
}
module.exports = new PersonService();