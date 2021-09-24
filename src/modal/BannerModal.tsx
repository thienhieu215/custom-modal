import { FC } from "react";
import style from './Modal.module.scss'

const BannerModal: FC<BannerModalProps> = (props: BannerModalProps) => {

  return (
    <>
      {props.isOpen &&
        <div onClick={props.onClose} className={style.background}>
          <div onClick={e => { e.stopPropagation() }} className={style.bannerModal}>
            <div className={style.image}>
              <a href={props.href}>
                <img src={props.body} alt='promotion banner' />
              </a>
            </div>
            <div className={style.Xbtn} onClick={props.onClose}>
              [ X ]
            </div>
          </div>
        </div>
      }
    </>
  )
}

type BannerModalProps = {
  isOpen: boolean,
  body: string,
  href: string,
  closeContent?: string,
  onClose: () => void,
  children?: React.ReactNode
}

export default BannerModal;
