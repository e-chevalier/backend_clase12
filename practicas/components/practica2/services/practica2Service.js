
class Practica2 {

    async getPractica2() {
        try {
            console.log(`test`)
            // LOGIC HERE

            return { status: "OK" }
        } catch (error) {
            console.log(error)
        }
    }

}

export let practica2Service = new Practica2()