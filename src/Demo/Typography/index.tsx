import "./styles.css"

const TypographyDemoScreen = () => {
   return (
      <>
         <div className='demoSquareContainer'>
            <div className='demoSquare'>
               <p className='demoSquareText'>Typography</p>
            </div>
         </div>
         <p className='poppins-300'>Poppins 300</p>
         <p className='poppins-400'>Poppins 400</p>
         <p className='poppins-500'>Poppins 500</p>
         <p className='poppins-600'>Poppins 600</p>
         <p className='poppins-700'>Poppins 700</p>
         <p className='poppins-800'>Poppins 800</p>
         <p className='poppins-900'>Poppins 900</p>
      </>
   )
}
export default TypographyDemoScreen