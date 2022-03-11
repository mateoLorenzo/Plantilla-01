import { makeStyles } from './styles'
import CustomIcon, { IconName } from '../../Components/CustomIcon'

const CustomIconDemoScreen = () => {
  const styles = makeStyles()
  return (
    <div style={styles.iconDemoPageContainer}>
      <h1 >Icons!</h1>
      <div style={styles.iconGroupContainer}>
        <div style={styles.iconAndTextContainer}>
          <CustomIcon name={IconName.user} style={styles.icon} size={25} />
          <p>user</p>
        </div>
        <div style={styles.iconAndTextContainer}>
          <CustomIcon name={IconName.heart} style={styles.icon} size={25} />
          <p>heart</p>
        </div>
        <div style={styles.iconAndTextContainer}>
          <CustomIcon name={IconName.cart} style={styles.icon} size={25} />
          <p>cart</p>
        </div>
        <div style={styles.iconAndTextContainer}>
          <CustomIcon name={IconName.cash} style={styles.icon} size={25} />
          <p>cash</p>
        </div>
        <div style={styles.iconAndTextContainer}>
          <CustomIcon name={IconName.truck} style={styles.icon} size={25} />
          <p>truck</p>
        </div>
        <div style={styles.iconAndTextContainer}>
          <CustomIcon name={IconName.devolution} style={styles.icon} size={25} />
          <p>devolution</p>
        </div>
        <div style={styles.iconAndTextContainer}>
          <CustomIcon name={IconName.search} style={styles.icon} size={25} />
          <p>search</p>
        </div>
      </div>
      <div style={styles.iconGroupContainer}>
        <div style={styles.iconAndTextContainer}>
          <CustomIcon name={IconName.phone} style={styles.icon} size={25} />
          <p>phone</p>
        </div>
        <div style={styles.iconAndTextContainer}>
          <CustomIcon name={IconName.arrowDown} style={styles.icon} size={25} />
          <p>arrowDown</p>
        </div>
        <div style={styles.iconAndTextContainer}>
          <CustomIcon name={IconName.arrowUp} style={styles.icon} size={25} />
          <p>arrowUp</p>
        </div>
        <div style={styles.iconAndTextContainer}>
          <CustomIcon name={IconName.arrowLeft} style={styles.icon} size={25} />
          <p>arrowLeft</p>
        </div>
        <div style={styles.iconAndTextContainer}>
          <CustomIcon name={IconName.arrowRight} style={styles.icon} size={25} />
          <p>arrowRight</p>
        </div>
        <div style={styles.iconAndTextContainer}>
          <CustomIcon name={IconName.facebook} style={styles.icon} size={25} />
          <p>facebook</p>
        </div>
        <div style={styles.iconAndTextContainer}>
          <CustomIcon name={IconName.twitter} style={styles.icon} size={25} />
          <p>twitter</p>
        </div>
      </div>
      <div style={styles.iconGroupContainer}>
        <div style={styles.iconAndTextContainer}>
          <CustomIcon name={IconName.instagram} style={styles.icon} size={25} />
          <p>instagram</p>
        </div>
        <div style={styles.iconAndTextContainer}>
          <CustomIcon name={IconName.whatsapp} style={styles.icon} size={25} />
          <p>whatsapp</p>
        </div>
        <div style={styles.iconAndTextContainer}>
          <CustomIcon name={IconName.star} style={styles.icon} size={25} />
          <p>star</p>
        </div>
        <div style={styles.iconAndTextContainer}>
          <CustomIcon name={IconName.filledStar} style={styles.icon} size={25} />
          <p>filledStar</p>
        </div>
        <div style={styles.iconAndTextContainer}>
          <CustomIcon name={IconName.headset} style={styles.icon} size={25} />
          <p>headset</p>
        </div>
        <div style={styles.iconAndTextContainer}>
          <CustomIcon name={IconName.card} style={styles.icon} size={25} />
          <p>card</p>
        </div>
        <div style={styles.iconAndTextContainer}>
          <CustomIcon name={IconName.backArrow} style={styles.icon} size={25} />
          <p>backArrow</p>
        </div>
      </div>
      <div style={styles.iconGroupContainer}>
        <div style={styles.iconAndTextContainer}>
          <CustomIcon name={IconName.more} style={styles.icon} size={25} />
          <p>more</p>
        </div>
        <div style={styles.iconAndTextContainer}>
          <CustomIcon name={IconName.check} style={styles.icon} size={25} />
          <p>check</p>
        </div>
        <div style={styles.iconAndTextContainer}>
          <CustomIcon name={IconName.close} style={styles.icon} size={25} />
          <p>close</p>
        </div>
        <div style={styles.iconAndTextContainer}>
          <CustomIcon name={IconName.tinyClose} style={styles.icon} size={25} />
          <p>tinyClose</p>
        </div>
        <div style={styles.iconAndTextContainer}>
          <CustomIcon name={IconName.aboutUs} style={styles.icon} size={25} />
          <p>aboutUs</p>
        </div>
        <div style={styles.iconAndTextContainer}>
          <CustomIcon name={IconName.categories} style={styles.icon} size={25} />
          <p>categories</p>
        </div>
        <div style={styles.iconAndTextContainer}>
          <CustomIcon name={IconName.question} style={styles.icon} size={25} />
          <p>question</p>
        </div>
      </div>
    </div>
  )
}
export default CustomIconDemoScreen