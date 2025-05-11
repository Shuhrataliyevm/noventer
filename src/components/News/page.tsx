import React from 'react'
import "../../ui/news.scss";
const News = () => {
    return (
        <div className='news-container'>
            <div className="landing-container">
                <div className="left-section">
                    <h2>Landing sahifalar</h2>

                    <label className="option">
                        <input type="checkbox" />
                        <span>Qisqa va ta'sirli</span>
                        <p>Mijozni birinchi qarashda <br /> qiziqtiradigan va uni keyingi <br /> qadamlarga undaydigan muhim <br /> ma’lumotlarni taqdim etadi.</p>
                    </label>

                    <label id='options' className="option">
                        <input type="checkbox" />
                        <span>Maqsadli</span>
                        <p>Aniq maqsadga yo‘naltirilgan bo‘lib, <br /> mijozni maxsus harakatga undashga <br /> xizmat qiladi.</p>
                    </label>

                    <label id='options_2' className="option">
                        <input type="checkbox" />
                        <span>Tez yuklanuvchi</span>
                        <p>Mijozlarning sabr-toqatiga ta’sir <br /> qilmaslik uchun iloji boricha tez <br /> yuklanadi.</p>
                    </label>

                    <div className="info">
                        <p>Texnik vazifa tayyorlab berish: 1 kun</p>
                        <p>Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismdan iborat bo‘ladi.)</p>
                        <p>Veb Dizayn: 10-15 soatlik mehnat.</p>
                    </div>

                    <button className="order-button"><p>Buyurtma berish</p></button>
                </div>

                <div className="right-section">
                    <div className="card-preview">
                        <img src="/icons/sercie-1.svg" alt="#" className="preview-image" />
                    </div>
                </div>
            </div>
            <div className="landing-container">
                <div className="left-section">
                    <h2>Katalog sahifalari</h2>

                    <label className="option">
                        <input type="checkbox" />
                        <span>Mahsulotlar tavsifi</span>
                        <p>Har bir mahsulotning batafsil tavsifi, <br /> xususiyatlari, afzalliklari va rasmlari <br /> bilan berilgan.</p>
                    </label>

                    <label id='options' className="option">
                        <input type="checkbox" />
                        <span>Turli filtrlar</span>
                        <p>Mijozlarning qidirishni osonlashtirish <br /> uchun turli xil filtrlar va saralash <br /> imkoniyatlari taqdim etiladi.</p>
                    </label>

                    <label id='options_2' className="option">
                        <input type="checkbox" />
                        <span>Navigatsiya</span>
                        <p>Katalog bo'ylab oson va intuitiv <br /> harakatlanish uchun qulay <br /> navigatsiya tizimi yaratilgan.</p>
                    </label>

                    <div className="info">
                        <p>Texnik vazifa tayyorlab berish: 1 kun</p>
                        <p>Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismdan iborat bo’ladi.)</p>
                        <p>Veb Dizayn: 10-15 soatlik mehnat. Narxi: $100</p>
                    </div>

                    <button className="order-button"><p>Buyurtma berish</p></button>
                </div>

                <div className="right-section">
                    <div className="card-preview">
                        <img src="/icons/sercie-1.svg" alt="#" className="preview-image" />
                    </div>
                </div>
            </div>
            <div className="landing-container">
                <div className="left-section">
                    <h2>eCommerce Sahifalari</h2>

                    <label className="option">
                        <input type="checkbox" />
                        <span>Onlayn sotish</span>
                        <p>Mijozlarga tovarlarni to'g'ridan-to'g'ri <br /> onlayn sotib olish imkoniyatini <br /> beradi.</p>
                    </label>

                    <label id='options' className="option">
                        <input type="checkbox" />
                        <span>Xavfsiz to'lov</span>
                        <p>Turli xil xavfsiz to'lov usullarini <br /> qo'llab-quvvatlaydi.</p>
                    </label>

                    <label id='options_2' className="option">
                        <input type="checkbox" />
                        <span>Yetkazib berish</span>
                        <p>Mijozlarga buyurtmalarni tez va qulay <br /> tarzda yetkazib berish xizmatini <br /> taqdim etadi.</p>
                    </label>

                    <div className="info">
                        <p>Texnik vazifa tayyorlab berish: 3-4 kun</p>
                        <p>Sayt sahifalar soni: har bir sahifa minimum 5 ta qismdan iborat bo’ladi.</p>
                        <p>Veb Dizayn: 7-10 kun mehnat. Narxi: $200-300</p>
                    </div>

                    <button className="order-button"><p>Buyurtma berish</p></button>
                </div>

                <div className="right-section">
                    <div className="card-preview">
                        <img src="/icons/sercie-1.svg" alt="#" className="preview-image" />
                    </div>
                </div>
            </div>
            <div className="landing-container">
                <div className="left-section">
                    <h2>CRM Sahifalari</h2>

                    <label className="option">
                        <input type="checkbox" />
                        <span>Mijozlar ma'lumotlari</span>
                        <p>Mijozlar haqida muhim ma'lumotlarni <br /> to'plash va saqlash uchun <br /> mo'ljallangan.</p>
                    </label>

                    <label id='options' className="option">
                        <input type="checkbox" />
                        <span>Mijozlar bilan muloqot</span>
                        <p>Mijozlar bilan samarali  aloqa o'rnatish va ularni  qo'llab-quvvatlashga <br /> imkon  beradi.</p>
                    </label>

                    <label id='options_2' className="option">
                        <input type="checkbox" />
                        <span>Tahlil</span>
                        <p>Mijozlar haqida to'plangan <br /> ma'lumotlarni tahlil qilish va qarorlar <br /> qabul qilishga yordam beradi.</p>
                    </label>

                    <div className="info">
                        <p>Texnik vazifa tayyorlab berish: 5-10 kun</p>
                        <p>Sayt sahifalar soni: 10 yoki undan yuqori</p>
                        <p>Veb Dizayn: 7-10 kun mehnat. Narxi: $300-500</p>
                    </div>

                    <button className="order-button"><p>Buyurtma berish</p></button>
                </div>

                <div className="right-section">
                    <div className="card-preview">
                        <img src="/icons/sercie-1.svg" alt="#" className="preview-image" />
                    </div>
                </div>
            </div>
            <div className="landing-container">
                <div className="left-section">
                    <h2>ERP sahifalari</h2>

                    <label className="option">
                        <input type="checkbox" />
                        <span>Butun Korxona Integratsiyasi</span>
                        <p>Turli bo'limlarni birlashtirib, ma'lumot <br /> almashinuvini optimallashtiradi.</p>
                    </label>

                    <label id='options' className="option">
                        <input type="checkbox" />
                        <span>Avtomatlashtirish</span>
                        <p>Ko'pgina jarayonlarni avtomatlashtirib, vaqt va resurslarni  tejaydi.</p>
                    </label>

                    <label id='options_2' className="option">
                        <input type="checkbox" />
                        <span>Tahlil va xabarnoma</span>
                        <p>Korxona faoliyatini tahlil qilish va <br /> muhim xabarnomalarni olish imkonini <br /> beradi.</p>
                    </label>

                    <div className="info">
                        <p>Texnik vazifa tayyorlab berish: 5-10 kun</p>
                        <p>Sayt sahifalar soni: 10 yoki undan yuqori</p>
                        <p>Veb Dizayn: 7-10 kun mehnat. Narxi: $300-500</p>
                    </div>

                    <button className="order-button"><p>Buyurtma berish</p></button>
                </div>

                <div className="right-section">
                    <div className="card-preview">
                        <img src="/icons/sercie-1.svg" alt="#" className="preview-image" />
                    </div>
                </div>
            </div>
            <div className="landing-container">
                <div className="left-section">
                    <h2>Landing sahifalar</h2>

                    <label className="option">
                        <input type="checkbox" />
                        <span>Qisqa va ta'sirli</span>
                        <p>Mijozni birinchi qarashda <br /> qiziqtiradigan va uni keyingi <br /> qadamlarga undaydigan muhim <br /> ma’lumotlarni taqdim etadi.</p>
                    </label>

                    <label id='options' className="option">
                        <input type="checkbox" />
                        <span>Maqsadli</span>
                        <p>Aniq maqsadga yo‘naltirilgan bo‘lib, <br /> mijozni maxsus harakatga undashga <br /> xizmat qiladi.</p>
                    </label>

                    <label id='options_2' className="option">
                        <input type="checkbox" />
                        <span>Tez yuklanuvchi</span>
                        <p>Mijozlarning sabr-toqatiga ta’sir <br /> qilmaslik uchun iloji boricha tez <br /> yuklanadi.</p>
                    </label>

                    <div className="info">
                        <p>Texnik vazifa tayyorlab berish: 1 kun</p>
                        <p>Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismdan iborat bo‘ladi.)</p>
                        <p>Veb Dizayn: 10-15 soatlik mehnat.</p>
                    </div>

                    <button className="order-button"><p>Buyurtma berish</p></button>
                </div>

                <div className="right-section">
                    <div className="card-preview">
                        <img src="/icons/sercie-1.svg" alt="#" className="preview-image" />
                    </div>
                </div>
            </div>
            <div className="landing-container">
                <div className="left-section">
                    <h2>Landing sahifalar</h2>

                    <label className="option">
                        <input type="checkbox" />
                        <span>Qisqa va ta'sirli</span>
                        <p>Mijozni birinchi qarashda <br /> qiziqtiradigan va uni keyingi <br /> qadamlarga undaydigan muhim <br /> ma’lumotlarni taqdim etadi.</p>
                    </label>

                    <label id='options' className="option">
                        <input type="checkbox" />
                        <span>Maqsadli</span>
                        <p>Aniq maqsadga yo‘naltirilgan bo‘lib, <br /> mijozni maxsus harakatga undashga <br /> xizmat qiladi.</p>
                    </label>

                    <label id='options_2' className="option">
                        <input type="checkbox" />
                        <span>Tez yuklanuvchi</span>
                        <p>Mijozlarning sabr-toqatiga ta’sir <br /> qilmaslik uchun iloji boricha tez <br /> yuklanadi.</p>
                    </label>

                    <div className="info">
                        <p>Texnik vazifa tayyorlab berish: 1 kun</p>
                        <p>Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismdan iborat bo‘ladi.)</p>
                        <p>Veb Dizayn: 10-15 soatlik mehnat.</p>
                    </div>

                    <button className="order-button"><p>Buyurtma berish</p></button>
                </div>

                <div className="right-section">
                    <div className="card-preview">
                        <img src="/icons/sercie-1.svg" alt="#" className="preview-image" />
                    </div>
                </div>
            </div>
            <div className="landing-container">
                <div className="left-section">
                    <h2>Landing sahifalar</h2>

                    <label className="option">
                        <input type="checkbox" />
                        <span>Qisqa va ta'sirli</span>
                        <p>Mijozni birinchi qarashda <br /> qiziqtiradigan va uni keyingi <br /> qadamlarga undaydigan muhim <br /> ma’lumotlarni taqdim etadi.</p>
                    </label>

                    <label id='options' className="option">
                        <input type="checkbox" />
                        <span>Maqsadli</span>
                        <p>Aniq maqsadga yo‘naltirilgan bo‘lib, <br /> mijozni maxsus harakatga undashga <br /> xizmat qiladi.</p>
                    </label>

                    <label id='options_2' className="option">
                        <input type="checkbox" />
                        <span>Tez yuklanuvchi</span>
                        <p>Mijozlarning sabr-toqatiga ta’sir <br /> qilmaslik uchun iloji boricha tez <br /> yuklanadi.</p>
                    </label>

                    <div className="info">
                        <p>Texnik vazifa tayyorlab berish: 1 kun</p>
                        <p>Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismdan iborat bo‘ladi.)</p>
                        <p>Veb Dizayn: 10-15 soatlik mehnat.</p>
                    </div>

                    <button className="order-button"><p>Buyurtma berish</p></button>
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