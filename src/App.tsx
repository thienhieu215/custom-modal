import { useState } from 'react';
import './App.css'
import style from './modal/Modal.module.scss'
import banner from './banner.png'
import BannerModal from './modal/BannerModal';
import CustomModal from './modal/customModal';

function App() {

  const [confirmOpen, setConfirmOpen] = useState<boolean>(false)
  const [alertOpen, setAlertOpen] = useState<boolean>(false)
  const [bannerOpen, setBannerOpen] = useState<boolean>(false)
  const [formOpen, setFormOpen] = useState<boolean>(false)

  return (
    <div className='App'>

      {/* CONFIRMATION MODAL */}
      <CustomModal isOpen={confirmOpen} onClose={() => setConfirmOpen(false)}
        title={'Confirmation'} body={'Are you sure you want to remove this item?'}
        agreeContent={'Remove'} closeContent={'Cancel'} >
      </CustomModal>

      {/* ALERT MODAL */}
      <CustomModal isOpen={alertOpen} onClose={() => setAlertOpen(false)}
        title={'Successfully removed!'} body={'The item is successfully removed from your cart.'}
        closeContent={'Close'} >
      </CustomModal>

      {/* BANNER MODAL */}
      <BannerModal isOpen={bannerOpen} onClose={() => setBannerOpen(false)}
        body={banner} href='/' />

      {/* FORM MODAL */}
      <CustomModal isOpen={formOpen} onClose={() => setFormOpen(false)}
        title={'ĐĂNG KÍ NGAY ĐỂ NHẬN KHUYẾN MÃI 10%'} agreeContent={'ĐĂNG KÍ'}
      >
        <form className={style.form}>
          <div className={style.input}>
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" />
            <label className="form-check-label">Đúng, tôi trên 15 tuổi</label>
          </div>
          <div className='form-check'>
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label">Tôi đã đọc và đồng ý với Điều khoản và điều kiện</label>
          </div>
        </form>
      </CustomModal>

      {/* BUTTON TO OPEN MODAL */}
      <button className='Button' onClick={() => setConfirmOpen(true)}>Confirmation modal</button>
      <button className='Button' onClick={() => setAlertOpen(true)}>Alert modal</button>
      <button className='Button' onClick={() => setBannerOpen(true)}>Banner modal</button>
      <button className='Button' onClick={() => setFormOpen(true)}>Form modal</button>

    </div>
  );
}

export default App;
