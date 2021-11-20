//is basically to abstract the data access layer
const db =require('../db/db');

class PersonDAO{
    async createPerson(firstName,lastName,email){
        const [id]=await db('person').insert({
            email,
            first_name:firstName,
            last_name:lastName,
        }).returning('id');
        return id;
    }

    async deletePerson(id){
        var query = await db("person")
        .del()
        .where({
          id: id
      });
    
    //   query.exec( function(err){
    //     if(err) console.log(err);
    //     console.log("delete shod");
    //   })

    }
}




module.exports = new PersonDAO();