import { GWrapper } from "../../styles/globale-styles.e";
import {
    Step,
    StepBlock,
    FormBlock,
    NewInput
} from './legal-block.e'
import {Button} from '../../components/index'
const LegalsBlock = () => {
    return (
        <>
            <GWrapper>
                <h2 className="block-title">Как офоромить страхование гражданской ответственности владельца опасного обьекта</h2>
                <StepBlock>
                    <Step>
                        <h4>1</h4>
                        <p>Заполните данные </p>
                    </Step>
                    <Step>
                        <h4>2</h4>
                        <p>Дождитесь ответа нашего оператора </p>
                    </Step>
                    <Step>
                        <h4>3</h4>
                        <p>Оплата </p>
                    </Step>
                </StepBlock>
                <h2 className="block-title">Заполните форму</h2>
                <FormBlock>
                    <h3>Заявка на оформление полиса для юридических лиц</h3>
                    <div>
                        <NewInput >
                            <p>Ваше Ф.И.О</p>
                            <input id={'s'}  placeholder={'Иванов Иван Иванович'} required />
                        </NewInput >
                        <NewInput >
                            <p>Ваш телефон</p>
                            <input id={'s'}  placeholder={'mail@mail.ru'} required />
                        </NewInput >
                        <NewInput >
                            <p>Укажите город</p>
                            <input id={'s'}  placeholder={'Андижан'} required />
                        </NewInput >
                        <NewInput >
                            <p>Ваш телефон</p>
                            <input id={'s'}  placeholder={'+998-91-999-99-99'} required />
                        </NewInput >
                    </div>
                        <NewInput >
                            <p>Укажите название организации</p>
                            <input className="w100" id={'s'}  placeholder={' например <A> code corparation'} required />
                        </NewInput >
                        <NewInput >
                            <p>Примечание</p>
                            <input className="w100" id={'s'}  placeholder={'....'} required />
                        </NewInput >
                        <Button title={'Отправить заявку'}/>
                </FormBlock>
            </GWrapper>
        </>
    )
}
export default LegalsBlock 