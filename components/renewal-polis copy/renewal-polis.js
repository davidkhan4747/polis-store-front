import { GWrapper } from "../../styles/globale-styles.e";
import {MyInput , Button} from '..'
import {
    RenewalBlock,
    RenewInput,
    PoleBlock,
    InfoBlock,
    ButtonBlock
} from './renewal-polis.e'

const Renewal = () => {
    return (
        <>
            <GWrapper>
                    <h2 className="block-title">Продление полиса</h2>
                    <RenewalBlock>
                        <div className="w100">
                        <RenewInput>
                            <h3>Информация о полисе</h3>
                            <PoleBlock>
                                    <MyInput label='Серия и номер полиса'  placeholder={'123456789'} id='seria' />
                                   <MyInput label='Фамилия страхователя'  placeholder={'Сабуров'} id='family' />
                            </PoleBlock>
                            <p>Заполните серию и номер как в полисе. Для продления полиса ОСАГО введите серию русскими буквами например: МММ1234567890</p>
                        </RenewInput>
                        <ButtonBlock>
                            <Button title={'Продолжить'} />
                            <p>На следующем шаге вы сможете узнать ваш полис</p>
                        </ButtonBlock>
                        </div>
                        <InfoBlock>
                            <h2>Для продления полиса онлайн вам потребуется:</h2>
                            <p>Серия номер полиса и фамилия страхователя</p>
                            <p>Узнать стоимость продления можно до окончания срока действия полиса:</p>
                            <p>для каско 60 дней</p>
                            <p>для остальных видов 20 дней</p>
                        </InfoBlock>
                    </RenewalBlock>
                    
            </GWrapper>
        </>
    )
}
export default  Renewal