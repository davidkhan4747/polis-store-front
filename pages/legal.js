import { Layout , BannerLegal , MainCatalog ,NewsSlider} from "../components";
export default function Home() {
  return (
    <Layout navloc={'active'} userk='disablet' renewal='disablet' chack='disablet' legal={'legal'}  title={'Корпоративный сайт  '}>
      <div className="back">
        <BannerLegal/>
        <MainCatalog legal={true}/>
        <NewsSlider/>
      </div>
    </Layout>
  );}