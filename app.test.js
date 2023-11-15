const app = require('./app')

test('se espera un hola mundo',()=>{
    expect(app.get('/', (req, res)=>{
        res.send("hola mundo")
    }))
})