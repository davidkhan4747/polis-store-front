import { GWrapper } from "../../styles/globale-styles.e";
import {
    NewBody ,
    ImgBlock,
    NewTextB
} from './new.e'
import {NewsSlider} from '../../components'
import parse from 'html-react-parser'
const New = ( {
    data
} ) => {
    return (
            <GWrapper>
        <NewBody>
                    <>
                    <h2 className="block-title">{data?.name}</h2>
                    <ImgBlock imgUrl={`http://s499964.smrtp.ru/public/storage/${data?.img}` } />
                    <NewTextB>
                        <h2>{parse(data?.text || '')}</h2>
                        <p>{data?.title}</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam a consequat, varius dignissim feugiat aliquet rhoncus. Nulla lorem integer sit scelerisque malesuada ac. Elementum, nibh nec enim est ornare elit cras diam. Etiam ipsum fermentum, ac neque ut scelerisque at sit neque.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam a consequat, varius dignissim feugiat aliquet rhoncus. Nulla lorem integer sit scelerisque malesuada ac. Elementum, nibh nec enim est ornare elit cras diam. Etiam ipsum fermentum, ac neque ut scelerisque at sit neque.</p>

                    </NewTextB>
                    </>
                    
               
                <NewsSlider/>
        </NewBody>

            </GWrapper>
    )
}
export default New
