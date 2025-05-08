import React from 'react'
import "../../ui/news.scss";
const News = () => {
    return (
        <div>
            <div className="landing-container">
                <div className="left-section">
                    <h2>Landing sahifalar</h2>

                    <label className="option">
                        <input type="checkbox" />
                        <span>Qisqa va ta'sirli</span>
                        <p>Mijozni birinchi qarashda qiziqtiradigan va uni keyingi qadamlarga undaydigan muhim ma’lumotlarni taqdim etadi.</p>
                    </label>

                    <label className="option">
                        <input type="checkbox" />
                        <span>Maqsadli</span>
                        <p>Aniq maqsadga yo‘naltirilgan bo‘lib, mijozni maxsus harakatga undashga xizmat qiladi.</p>
                    </label>

                    <label className="option">
                        <input type="checkbox" />
                        <span>Tez yuklanuvchi</span>
                        <p>Mijozlarning sabr-toqatiga ta’sir qilmaslik uchun iloji boricha tez yuklanadi.</p>
                    </label>

                    <div className="info">
                        <p>Texnik vazifa tayyorlab berish: 1 kun</p>
                        <p>Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismdan iborat bo‘ladi.)</p>
                        <p>Veb Dizayn: 10-15 soatlik mehnat.</p>
                    </div>

                    <button className="order-button">Buyurtma berish</button>
                </div>

                <div className="right-section">
                    <div className="card-preview">
                        <img src="/icons/sercie-1.svg" alt="#" className="preview-image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News