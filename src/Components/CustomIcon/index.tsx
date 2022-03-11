import { AiOutlineUser, AiOutlineDollarCircle, AiOutlineTwitter, AiOutlineSearch, AiFillStar, AiOutlineStar, AiOutlineWhatsApp } from 'react-icons/ai'
import { VscHeart } from 'react-icons/vsc'
import { BsHandbag, BsTelephone } from 'react-icons/bs'
import { FiTruck, FiInstagram } from 'react-icons/fi'
import { Ri24HoursLine, RiQuestionMark } from 'react-icons/ri'
import { IoIosArrowDown, IoIosArrowBack, IoIosArrowForward, IoIosArrowUp } from 'react-icons/io'
import { GrFacebookOption, GrClose, GrFormClose } from 'react-icons/gr'
import { MdOutlineHeadsetMic, MdPeopleOutline } from 'react-icons/md'
import { GoCreditCard } from 'react-icons/go'
import { IoArrowUndoOutline } from 'react-icons/io5'
import { HiOutlinePlus } from 'react-icons/hi'
import { FaCheck } from 'react-icons/fa'
import { BiCategory } from 'react-icons/bi'

export enum IconName {
  user = "user",
  heart = "heart",
  cart = "cart",
  cash = "cash",
  truck = "truck",
  devolution = "devolution",
  search = "search",
  phone = "phone",
  arrowDown = "arrow-down",
  arrowUp = "arrow-up",
  arrowLeft = "arrow-left",
  arrowRight = "arrow-right",
  facebook = "facebook",
  twitter = "twitter",
  instagram = "instagram",
  whatsapp = "whatsapp",
  star = "star",
  filledStar = "filled-star",
  headset = "headset",
  card = "card",
  backArrow = "back-arrow",
  more = "more",
  check = "check",
  close = "close",
  tinyClose = "tiny-close",
  aboutUs = "about-us",
  categories = "categories",
  question = "question",
}

interface ICustomIconProps {
  name: IconName;
  style?: React.CSSProperties;
  size?: number;
}

const CustomIcon = ({ name, style, size }: ICustomIconProps) => {
  if (name === "user") return <AiOutlineUser style={style} size={size} />
  if (name === "heart") return <VscHeart style={style} size={size} />
  if (name === "cart") return <BsHandbag style={style} size={size} />
  if (name === "cash") return <AiOutlineDollarCircle style={style} size={size} />
  if (name === "truck") return <FiTruck style={style} size={size} />
  if (name === "devolution") return <Ri24HoursLine style={style} size={size} />
  if (name === "search") return <AiOutlineSearch style={style} size={size} />
  if (name === "phone") return <BsTelephone style={style} size={size} />
  if (name === "arrow-down") return <IoIosArrowDown style={style} size={size} />
  if (name === "arrow-up") return <IoIosArrowUp style={style} size={size} />
  if (name === "arrow-left") return <IoIosArrowBack style={style} size={size} />
  if (name === "arrow-right") return <IoIosArrowForward style={style} size={size} />
  if (name === "facebook") return <GrFacebookOption style={style} size={size} />
  if (name === "twitter") return <AiOutlineTwitter style={style} size={size} />
  if (name === "instagram") return <FiInstagram style={style} size={size} />
  if (name === "whatsapp") return <AiOutlineWhatsApp style={style} size={size} />
  if (name === "star") return <AiOutlineStar style={style} size={size} />
  if (name === "filled-star") return <AiFillStar style={style} size={size} />
  if (name === "headset") return <MdOutlineHeadsetMic style={style} size={size} />
  if (name === "card") return <GoCreditCard style={style} size={size} />
  if (name === "back-arrow") return <IoArrowUndoOutline style={style} size={size} />
  if (name === "more") return <HiOutlinePlus style={style} size={size} />
  if (name === "check") return <FaCheck style={style} size={size} />
  if (name === "close") return <GrClose style={style} size={size} />
  if (name === "tiny-close") return <GrFormClose style={style} size={size} />
  if (name === "about-us") return <MdPeopleOutline style={style} size={size} />
  if (name === "categories") return <BiCategory style={style} size={size} />
  if (name === "question") return <RiQuestionMark style={style} size={size} />
  return <RiQuestionMark />
}

export default CustomIcon