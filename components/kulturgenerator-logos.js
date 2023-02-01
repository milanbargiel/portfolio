import Row from './row'
import Column from './column'
import Image from './image'

// Load logos
import kulturrat from '../public/kulturgenerator/kulturrat.svg'
import kulturamt from '../public/kulturgenerator/kulturamt.svg'
import rheinergie from '../public/kulturgenerator/rheinenergie.svg'
import niehlerFreiheit from '../public/kulturgenerator/niehlerfreiheit.svg'
import wachsfabrik from '../public/kulturgenerator/wachsfabrik.svg'

const KulturgeneratorLogos = () => {
  return (
    <div className="w-3/5 mb-24">
      <Row className="mb-12 items-center">
        <Column>
          <Image
            src={kulturrat}
            alt="Logo of the Cultural Council Cologne"
            className="w-12"
          />
        </Column>
        <Column>
          <Image
            src={wachsfabrik}
            alt="Logo of the cultural center Wachsfabrik"
            className="w-16"
          />
        </Column>
        <Column>
          <Image
            src={niehlerFreiheit}
            alt="Logo of the Cultural Center Niehler Freiheit"
            className="w-48"
          />
        </Column>
      </Row>
      <Row className="items-center w-2/3">
        <Column>
          <Image
            src={kulturamt}
            alt="Logo of the Cultural Office from Cologne"
            className="w-20"
          />
        </Column>
        <Column>
          <Image src={rheinergie} alt="Logo of the Rheinenergie Foundation" />
        </Column>
      </Row>
    </div>
  )
}

export default KulturgeneratorLogos
