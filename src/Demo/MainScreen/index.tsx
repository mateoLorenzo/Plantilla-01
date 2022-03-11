import './styles.css'
import DemoBox from '../../Components/DemoBox/index';

const DemoMainScreen = () => {
   return (
      <div className='mainDemoScreenContainer'>
         <h1>Plantilla-01 | Demos</h1>
         <div className='demoBoxesContainer'>
            <DemoBox demoTitle="Navigation" navigationUrl="navigationDemo" />
            <DemoBox demoTitle="Typography" navigationUrl="typographyDemo" />
            <DemoBox demoTitle="Iconography" navigationUrl="iconographyDemo" />
         </div>
      </div>
   )
}
export default DemoMainScreen