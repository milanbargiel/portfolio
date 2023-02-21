import Image from './image'

// Load logos
import kulturrat from '../public/kulturgenerator/kulturrat.svg'
import kulturamt from '../public/kulturgenerator/kulturamt.svg'
import rheinergie from '../public/kulturgenerator/rheinenergie.svg'
import niehlerFreiheit from '../public/kulturgenerator/niehlerfreiheit.svg'
import wachsfabrik from '../public/kulturgenerator/wachsfabrik.svg'

const KulturgeneratorLogos = () => {
  return (
    <div className="md:w-4/5 mb-24">
      <div className="mb-12 items-center flex flex-wrap flex-row gap-16">
        <Image
          src={kulturrat}
          alt="Logo of the Cultural Council Cologne"
          className="w-12"
        />
        <Image
          src={wachsfabrik}
          alt="Logo of the cultural center Wachsfabrik"
          className="w-16"
        />
        <Image
          src={niehlerFreiheit}
          alt="Logo of the Cultural Center Niehler Freiheit"
          className="w-32"
        />
      </div>
      <div className="items-center md:w-4/5 flex flex-wrap flex-row gap-16">
        <Image
          src={kulturamt}
          alt="Logo of the Cultural Office from Cologne"
          className="w-20"
        />
        <Image
          src={rheinergie}
          alt="Logo of the Rheinenergie Foundation"
          className="w-20"
        />
      </div>
    </div>
  )
}

export default KulturgeneratorLogos
