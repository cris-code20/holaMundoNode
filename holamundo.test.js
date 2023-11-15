const saludo = require('./holamundo')

test("de esperar un hola mundo", ()=>{
    expect(saludo()).toBe("hola mundo")
})