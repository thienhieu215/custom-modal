import { FC } from "react";
import style from './Modal.module.scss'

const CustomModal: FC<CustomModalProps> = (props: CustomModalProps) => {

  return (
    <>
      {props.isOpen &&
        <div onClick={props.onClose} className={style.background}>
          <div onClick={e => { e.stopPropagation() }} className={style.customModal}>
            <div className={style.title}>{props.title}</div>
            <div className={style.content}>
              {props.body}
              {props.children}
            </div>
            <div className={style.footer}>
              {props.closeContent && <button className={style.closeBtn} onClick={props.onClose}>{props.closeContent}</button>}
              {props.agreeContent && <button className={style.agreeBtn} onClick={props.onAgree}>{props.agreeContent}</button>}
            </div>
          </div>
        </div>
      }
    </>
  )
}

type CustomModalProps = {
  isOpen: boolean,
  title: string,
  body?: string,
  agreeContent?: string,
  closeContent?: string,
  onAgree?: () => void;
  onClose: () => void,
  children?: React.ReactNode
}

export default CustomModal;
