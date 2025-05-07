// import React from "react";
// import "../../ui/projects.scss";

// const Projects = () => {
//     return (
//         <section className="projects-section">
//             <div className="section-header">
//                 <h2>Loyihalarimiz</h2>
//                 <p>Biz haqimizda gapirsin !</p>
//             </div>

//             <div className="project-card layout-row">
//                 <img src="/icons/frami1.svg" alt="Tourmad" className="project-image" />
//                 <div className="project-info">
//                     <h3>Tourmad loyihasi</h3>
//                     <p>
//                         Tourmad – O‘zbekistonning ichki turizimini rivojlantirish maqsadida <br />
//                         ishlab chiqilgan bu web sayt o‘zida bir necha service larni o‘z ichiga <br />
//                         jamlagan bo‘lib ulardan: Mehmonxona xizmari, Restoran xizmati, Gitlik <br />
//                         xizmati, Mashinada sayohat qilish uchun haydovchilar xizmari va <br />
//                         boshqa ko‘plab xizmarlarni o‘z ichiga oladi. Bundan tashqari saytdan <br />
//                         o‘zingiz uchun qayerlarga boorish kerakligini va qayerlarda xizmat <br />
//                         ko‘satish qancha ekanligini ko‘rishingiz va o‘zingiz uchun <br />
//                         oldindan buyurtma qilishingiz mumkin.
//                     </p>
//                     <button className="project-button">Loyihani ko’rish</button>
//                 </div>
//             </div>

//             <div className="project-card layout-column">
//                 <div className="project-info">
//                     <h3>ProRun loyihasi</h3>
//                     <p>
//                         Prorun.uz – bu saytda tez-tez bo‘lib o‘tadigan yugurish bo‘yicha <br />
//                         musobaqalar bo‘lib o‘tadi va siz saytdan ro‘yxatdan o‘tgan holda <br />
//                         istalgan yoki har bir musobaqada qatnashishingiz mumkin. <br />
//                         Nima uchun sayt qurilgan? Musobaqalarda chet ellik ishtirokchilar <br />
//                         bo‘lgani bois ularga va boshqa qatnashchilarga ro‘yxatdan o‘tishni oson <br />
//                         qilish uchun yangi web ilova ishlab chiqildi.
//                     </p>
//                     <button className="project-button">Loyihani ko’rish</button>
//                 </div>
//                 <img src="/icons/frami2.svg" alt="Tourmad" className="project-image" />
//             </div>

//             <div className="project-card layout-row">
//                 <img src="/icons/frami3.svg" alt="Tourmad" className="project-image" />
//                 <div className="project-info">
//                     <h3>Xalq trans loyihasi</h3>
//                     <p>
//                         Bu yerda esa yana ko’proq ma’lumotlar berilishi kerak. <br />
//                         Lorem Ipsum is simply dummy text of the printing and typesetting <br />
//                         industry. Lorem Ipsum has been the industry's standard dummy text <br />
//                         ever since the 1500s, when an unknown printer took a galley of type <br />
//                         and scrambled it to make a type specimen book. It has survived not <br />
//                         only five centuries, but also the leap into electronic typesetting, <br />
//                         remaining essentially unchanged.
//                     </p>
//                     <button className="project-button">Loyihani ko’rish</button>
//                 </div>
//             </div>

//             <div className="view-more">
//                 <img src="/images/n1.png" alt="#" />
//                 <button>Boshqa loyihalarni ko’rish</button>
//             </div>

//             <div className="extra-image-1">
//                 <img src="/images/n1.png" alt="#" />
//             </div>
//             <div className="extra-image-2">
//                 <img src="/images/n1.png" alt="#" />
//             </div>
//             <div className="extra-image-3">
//                 <img src="/images/n1.png" alt="#" />
//             </div>
//         </section>
//     );
// };

// export default Projects;
//   import React from "react";
import "../../ui/projects.scss";

const Projects = () => {
    return (
        <section className="projects">
            <div className="projects-text">
                <h2 >Loyihalarimiz</h2>
                <p >Biz haqimizda gapirsin !</p>
            </div>

            <div className="project-item row">
                <img src="/icons/frami1.svg" alt="Tourmad" className="project-img" />
                <div className="project-content">
                    <h3>Tourmad loyihasi</h3>
                    <p>Tourmad – O‘zbekistonning ichki turizimini rivojlantirish maqsadida <br /> ishlab chiqilgan bu web sayt o‘zida bir necha service larni o‘z ichiga <br /> jamlagan bo‘lib ulardan: Mehmonxona xizmari, Restoran xizmati, Gitlik <br /> xizmati, Mashinada sayohat qilish uchun haydovchilar xizmari va <br /> boshqa ko‘plab xizmarlarni o‘z ichiga oladi. Bundan tashqari saytdan <br /> o‘zingiz uchun qayerlarga boorish kerakligini va qayerlarda xizmat <br /> ko‘satish qancha ekanligini ko‘rishingiz va o‘zingiz uchun <br /> oldindan buyurtma qilishingiz mumkin.
                    </p>
                    <br />
                    <button className="project-btn">Loyihani ko’rish</button>
                </div>
            </div>

            <div className="project-item column">
                <div className="project-content">
                    <h3>ProRun loyihasi</h3>
                    <p>Prorun.uz – bu saytda tez-tez bo‘lib o‘tadigan yugurish bo‘yicha <br /> musobaqalar bo‘lib o‘tadi va siz saytdan ro‘yxatdan o‘tgan holda <br /> istalgan yoki har bir musobaqada qatnashishingiz mumkin. <br /> Nima uchun sayt qurilgan? Musobaqalarda chet ellik ishtirokchilar <br /> bo‘lgani bois ularga va boshqa qatnashchilarga ro‘yxatdan o‘tishni oson <br /> qilish uchun yangi web ilova ishlab chiqildi.</p>
                    <button className="project-btn">Loyihani ko’rish</button>
                </div>
                <img src="/icons/frami2.svg" alt="Tourmad" className="project-img" />
            </div>

            <div className="project-item row">
                <img src="/icons/frami3.svg" alt="Tourmad" className="project-img" />
                <div className="project-content">
                    <h3>Xalq trans loyihasi</h3>
                    <p>Bu yerda esa yana ko’proq ma’lumotlar berilishi kerak. <br /> Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum has been the industry's standard dummy text <br /> ever since the 1500s, when an unknown printer took a galley of type <br /> and scrambled it to make a type specimen book. It has survived not <br /> only five centuries, but also the leap into electronic typesetting, <br /> remaining essentially unchanged.</p>
                    <button className="project-btn">Loyihani ko’rish</button>
                </div>
            </div>
            <div className="new-btn">
                <img src="/images/n1.png" alt="#" />
                <button>Boshqa loyihalarni ko’rish</button>
            </div>
            <div className="images">
                <img src="/images/n1.png" alt="#" />
            </div>
            <div className="image">
                <img src="/images/n1.png" alt="#" />
            </div>
            <div className="imag">
                <img src="/images/n1.png" alt="#" />
            </div>
        </section>
    );
};

export default Projects;