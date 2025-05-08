"use client"

import React, { useState } from 'react';
import '../../ui/footer.scss';
import { toast } from 'sonner';

const Footer: React.FC = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('+998');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name || phone.length < 13) {
            toast.error("Iltimos, barcha maydonlarni to‘g‘ri to‘ldiring.");
            return;
        }

        toast.success(`Jo‘natildi! Ism: ${name}, Tel: ${phone}`);
        setName('');
        setPhone('+998');
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/[^\d+]/g, '');

        if (!value.startsWith('+998')) {
            value = '+998';
        }

        if (value.length > 13) {
            return;
        }

        setPhone(value);
    };

    return (
        <section className="contact-section">
            <h2 className="title">Biz bilan aloqa</h2>
            <p className="subtitle">Loyihangizni qanday realizatsiya qilish haqida batafsil suhbatlashamiz</p>

            <div className="contact-grid">
                <div className="team">
                    <h3>Bizning jamoa haqida</h3>
                    <div className="team-grid">
                        {[...Array(9)].map((_, i) => (
                            <div className="member" key={i}>
                                <img src="/images/avatar.png" alt="Xusanov Alibek" />
                                <div>
                                    <h4>Xusanov Alibek</h4>
                                    <p>Developer</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="form-box">
                    <div className="boxs">
                        <h3>Bepul konsultatsiya</h3>
                        <p>Loyihangiz bo‘yicha boshlang‘ich bepul konsultatsiya uchun ma’lumotlaringizni qoldiring.</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Ismingiz"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type="tel"
                            placeholder="+998 __ ___ __ __"
                            value={phone}
                            onChange={handlePhoneChange}
                            required
                            inputMode="numeric"
                        />
                        <button type="submit">Jo’natish</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Footer;