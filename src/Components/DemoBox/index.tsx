import './styles.css'
import { Link } from 'react-router-dom';

interface screenProps {
   navigationUrl: string;
   demoTitle: string;
}

const DemoBox = ({ navigationUrl, demoTitle }: screenProps) => {
   return (
      <div className='demoSquareContainer'>
         <Link to={navigationUrl} className='demoSquare'>
            <p className='demoSquareText'>{demoTitle}</p>
         </Link>
      </div>
   )
}

export default DemoBox