import CSS from 'csstype';

type makeStyles = {
   icon: CSS.Properties,
   iconDemoPageContainer: CSS.Properties,
   iconGroupContainer: CSS.Properties,
   iconAndTextContainer: CSS.Properties,
}

export const makeStyles = ():makeStyles => {
   return {
      iconDemoPageContainer: {
         marginTop: "100px",
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',   
      },
      icon: {
         margin: "0px 15px 5px 15px",
      },
      iconGroupContainer: {
         margin: "30px 0px",
         display: "flex"
      },
      iconAndTextContainer: {
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',
         margin: "0px 5px",
         // backgroundColor: 'red',
         width: "100px"
      },
   }
}