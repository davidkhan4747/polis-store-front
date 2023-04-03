import { Layout , HeadBanner , BreadCrumb , LegalsBlock , NewsSlider } from "../../components";

const Legals = () =>{
    return (
        <Layout  title={'Юридическим лицам'}>
            <BreadCrumb Link2={'/legals-polis/LOREM'}  Crumb2={'Помощь на дороге'} white='white' />
            <HeadBanner  img={'/legal.png'} title={'Страхование владельца опасных обьектов'} des='Работа с опасными объектами на производстве неизбежно влечет за собой повышенный риск причинения вреда людям и повреждения имуществ'/>

            <LegalsBlock/>
            <NewsSlider/>
        </Layout>
    )
}
export default Legals

