//the part that can handle http requests 

const personService =require('../service/person');
const db = require('../db/db')
class PersonController{
    async createPerson(req,res){
        try{
            const id = await personService.createPerson(req.body);
            return res.status(201).json(id);
        }catch(err){
            console.error(err);
            return res.status(500).json('something goes wrong')
        }

    }
    async deletePerson(req,res){
        const id = req.query.id;

        try{
            await personService.deletePerson(id);
            return res.status(204).json(id);
        }catch(err){
            console.error(err);
            return res.status(500).json('something goes wrong')
        }

    }


    async getAllPersons(req, res) {

        try {
            const result = await db.select().from("person")
            return res.status(200).json(result)
            
        } catch (error) {
            return res.status(400).json(err)

            
        }

    }
}
module.exports = new PersonController();




