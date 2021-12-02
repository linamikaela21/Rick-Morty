import { Carousel } from "."

export const CarruselInfo = (info) => {

    console.log(info) //ME TRAE UN OBJETO CON TODOS LOS PERSONAJES Y DEBO PONER CADA IMAGE EN UN IFRAME

    const n = 3

    const ArrayImagenes = (x) => {
        const array = x?.map(char => <iframe title='elem'>{char.image}</iframe>)
        return array
    }

    console.log(ArrayImagenes(info), 'results')
    
    const resultArray = ArrayImagenes(info)

    return (
        <div>
            <Carousel
                items={resultArray}
                n={n}
            />
        </div>
    )
}
