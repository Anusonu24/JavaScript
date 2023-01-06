import react, { components} Form "react"

class preferredlacEX extends components {
    state = {
        citybanglore: false,
        citychennai: false,
        citynewyork: false,
    };
    upadateprefferedLoc = (event) => {
        this.setstate({
            [event.target.name]; event.target.chcecked,
        )}
        
    }
}

