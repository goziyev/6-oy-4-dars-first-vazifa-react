import React from 'react'
import style from './index.module.css'
import rasm from '../../assets/img.svg'
import Input from '../input'
import global from '../../assets/Vector.svg'
import gitHub from '../../assets/iconoir_github.svg'
import img from '../../assets/ion_logo-instagram.svg'
import facebook from '../../assets/mingcute_facebook-line.svg'
import telegram from '../../assets/ic_baseline-telegram.svg'
export default function Form() {
  return (
    <div className={style.formWrapper}>
        <h2>Kompaniya Ma'lumotlari</h2>
        <p>Kompaniya haqidagi ma'lumotlarni kiriting</p>
        <div className={style.formImgAndText}>
            <img src={rasm} alt="" />
            <p>Yuklash</p>
        </div>
    <Input name = "Kompaniya nomi" a = "Kompaniya nomi"/>
    <Input name = "Email" a = "Email"/>
    <Input name = "Telefon raqami" a = "+9989"/>
    <label className={style.links}>
        Linklar <span style={{color:"red",fontSize:"25px"}}>*</span>
    </label>
    <div className={style.linkImages}>
        <div className={style.linkImg}>
            <img src={global} alt="" />
        </div>
        <div className={style.linkImg}>
            <img src={img} alt="" />
        </div>
        <div className={style.linkImg}>
            <img src={telegram} alt="" />
        </div>
        <div className={style.linkImg}>
            <img src={gitHub} alt="" />
        </div>
        <div className={style.linkImg}>
            <img src={facebook} alt="" />
        </div>
    </div>
    <div className={style.formSelectFlex}>
    <div>
        
    <label className={style.links}>
        Davlat<span style={{color:"red",fontSize:"25px"}}>*</span>
    </label>
        <select name="car" id='region' className={style.selectRegion}>
        <option value="">
         Davlat
        </option>
        <option value="uzb">
            Uzb
        </option>
        <option value="rus">
            Rus
        </option>
        <option value="eng">
            Eng
        </option>
    </select>
    
    </div>
    <div>
        
    <label className={style.links}>
        Shahar<span style={{color:"red",fontSize:"25px"}}>*</span>
    </label>
        <select name="car" id='region' className={style.selectRegion}>
        <option value="">
         Shahar
        </option>
        <option value="uzb">
            Uzb
        </option>
        <option value="rus">
            Rus
        </option>
        <option value="eng">
            Eng
        </option>
    </select>
    
    </div>
    </div>
    <Input name = "Yashash joyi" a = "Joy" />
    <Input name = "Hodimlar soni" a = "Hodimlar soni" />
    <label className={style.links}>
        Izoh <span style={{color:"red",fontSize:"25px"}}>*</span>
    </label>
    <textarea  cols="30" rows="7" className={style.textarea} placeholder='Kompaniya haqida izoh qoldiring' />

    <div className={style.buttons}>
        <button>Ortga</button>
        <button>Keyingisi</button>
    </div>
    </div>
  )
}
