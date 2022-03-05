import './styles.css'
import { Link } from 'react-router-dom'

const DemoMainScreen = () => {
   return (
      <div className='mainDemoScreenContainer'>
         <h1>Plantilla-01 | Demos</h1>
         <div className='demoSquareContainer'>
            <Link to="navigationDemo" className='demoSquare'>
               <p className='demoSquareText'>Navigation Demo</p>
            </Link>
         </div>
      </div>
   )
}
export default DemoMainScreen