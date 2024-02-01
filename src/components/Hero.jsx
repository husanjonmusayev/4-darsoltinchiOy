import React from "react";
import { useRef, useState } from "react";
import styls from "./index.module.css";

export default function Hero() {
  const inputRef = useRef(null);
  const [image, setImgage] = useState("");

  const handleImgClick = () => {
    inputRef.current.click();
  };

  const handleImgChang = (evint) => {
    const file = evint.target.files[0];
    console.log(file);
    setImgage(evint.target.files[0]);
  };
  return (
    <div className={styls.formStayle}>
      <div className="formHeader">
        <h1>Kompaniya ma’lumotlari</h1>
        <h2>Kompaniya haqidagi ma’lumotlarni kiriting</h2>
      </div>
      <div onClick={handleImgClick} className={styls.formHero}>
        {image ? (
          <img
            className={styls.userImg}
            src={URL.createObjectURL(image)}
            alt="userImg"
          />
        ) : (
          <img className={styls.userImg} src="/Ellipse.png" alt="userImg" />
        )}
        <p className={styls.save}>Yuklash</p>
        <input
          className={styls.Fileinput}
          onChange={handleImgChang}
          type="file"
          ref={inputRef}
        />
      </div>
      <div className="formInputs">
        <p>Kompaniya nomi *</p>
        <input
          className={styls.input}
          type="text"
          placeholder="Kompaniya nomi"
        />

        <p>Email *</p>
        <input className={styls.input} type="text" placeholder="Email" />

        <p>Telefon raqami *</p>
        <input className={styls.input} type="text" placeholder="UZ +9989" />
      </div>
      <div className="formMain">
        <h2 className={styls.mainTitle}>Linklar *</h2>
        <div className={styls.links}>
          <div>
            <a href="#">
              <img className={styls.link} src="/yer.png" alt="icon" />
            </a>
          </div>
          <div>
            <a href="#">
              <img className={styls.link} src="/instagram.png" alt="icon" />
            </a>
          </div>
          <div>
            <a href="#">
              <img className={styls.link} src="/telegram.png" alt="icon" />
            </a>
          </div>
          <div>
            <a href="#">
              <img className={styls.link} src="/facebook.png" alt="icon" />
            </a>
          </div>
          <div>
            <a href="#">
              <img className={styls.link} src="/github.png" alt="icon" />
            </a>
          </div>
        </div>
      </div>
      <div className={styls.formRegion}>
        <div>
          <p className={styls.regiontex}>Davlat *</p>
          <select className={styls.regionSelect}>
            <option value="uz">Davlat</option>
          </select>
        </div>
        <div>
          <p className={styls.regiontex}>Shahar *</p>
          <select className={styls.regionSelect}>
            <option value="uz">Shahar</option>
          </select>
        </div>
      </div>
      <div>
        <p>Yashash joyi *</p>
        <input className={styls.input} type="text" placeholder="Yashash joyi" />
        <p className={styls.regiontex}>Hodimlar soni *</p>
        <select className={styls.input}>
          <option value="uz">Hodimlar soni</option>
        </select>
      </div>
      <div className="formDesc">
        <p className={styls.regiontex}>Izoh *</p>
        <textarea
          className={styls.textarea}
          placeholder="Kompaniya haqida izoh qoldiring"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div className={styls.formFooter}>
        <a className={styls.back} href="#">
          Ortga
        </a>
        <a className={styls.new} href="#">
          Keyingisi
        </a>
      </div>
    </div>
  );
}
