import Styles from './styles/footer.module.scss';
export default function Footer() {
    const imageSrc = "https://ghomslinguistics.com/wp-content/uploads/2024/08/cropped-GhomLinguisticsLogo_small.png";
    return (
        <div className={Styles.container}>
            <div className={Styles.content}>
                <div className={Styles.section_1}>
                    <div className={Styles.logo_box}>
                        <div className={Styles.logo}>
                            <img src={imageSrc} alt="logo" />
                        </div>
                        <div className={Styles.socials}>
                        </div>
                    </div>
                    <div className={Styles.links_box}>
                        <h3>GHOMS LINGUISTIC</h3>
                        <div className={Styles.links}>
                            <div>Ange Raphael</div>
                            <div>Douala, Cameroon</div>
                            <div>olivtsanga@ghomslinguistics.com</div>
                            <div>+23 7 6 93 07 17 89</div>
                        </div>
                    </div>
                    <div className={Styles.links_box}>
                        <h3>Latest news</h3>
                        <div className={Styles.links}>
                            <div>Yaoundé</div>
                            <div>Nächster Schulbeginn 17. Juni 2024</div>
                            <div>Nächster Kursstart am 01. April</div>
                        </div>
                    </div>
                    <div className={Styles.links_box}>
                        <h3>Menu</h3>
                        <div className={Styles.links}>
                            <div>Datenschutzerklärung</div>
                            <div>Kontakt</div>
                        </div>
                    </div>
                </div>
                <div className={Styles.section_2}>
                    <span>Copyright © 2024 Ghoms Linguistics - </span>
                    <span>Datenschutzerklärung</span>
                </div>
            </div>
        </div>
    )
}
