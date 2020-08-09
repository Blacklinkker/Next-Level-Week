const Database = require("./db")
const createProffy = require('./createProffy')

Database.then(async (db)=>{
    //Insere dados
    
    proffyValue = {
        name: 'Magneto',
        avatar:'https://www.google.com/url?sa=i&url=https%3A%2F%2Feditorial.rottentomatoes.com%2Farticle%2Fian-mckellens-10-best-movies%2F&psig=AOvVaw3kxvhZObMAUK50rq0Cs0ed&ust=1596894519238000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKC9jOudiesCFQAAAAAdAAAAABAD',
        whatsapp: '2343412213',
        bio: 'Controle de metais e caminhadas na praia'
    }

    classValue = {
        subject: 1,
        cost:'20'
        //proffy id vem de db
    }

    classScheduleValues = [
        //class_id de db
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    //create proffy
    //await createProffy(db, {proffyValue, classValue, classScheduleValues})
    
    //Consulta de dados

    //Todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar classes do professor e trazer seus dados
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectedClassesAndProffys)

    //usar filtros (8-18 menor ou igual cada um)
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)

    console.log(selectClassesSchedules)
}) 