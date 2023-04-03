import {Acc} from '../..'


const HealthAccardion = () => {
    return (
        <>
        <Acc  img={'/acc.png'} title={'1. Франшиза'}>
                        <h3>Франшиза</h3>
                        <h4>Что такое франшза?</h4>
                        <p>Франшиза — часть расходов, которые водитель возьмет на себя при наступлении страхового случая</p>
                        <h4>Почему это выгодно?</h4>
                        <p>Чем больше сумма франшизы, тем дешевле Каско</p>
                        <h4>Как это работает?</h4>
                        <p>После ДТП страховая оценила повреждения автомобиля на 180.000.000 СУМ. По полису Каско с франшизой в 250.000 СУМ вы заплатите за ремонт 500.000 СУМ, а остальные 150.000.00 заплатит страховая</p>
                    </Acc>
                    <Acc  img={'/casco.png'} title={'2. Экспрес КАСКО'}>
                        <h3>Экспрес КАСКО</h3>
                        <p>Оформите Каско за 50% от стоимости полностью онлайн и без осмотра авто. Включите в страховку только те риски, от которых хотите защитить свой автомобиль</p>
                    </Acc>
                    <Acc  img={'/buy.png'} title={'3. Рассрочка платежа на 3 месяца'}>
                    <h3>Рассрочка платежа на 3 месяца</h3>
                    <p>Половина стоимости страховки оплачивается при заключении договора, а вторая часть – в течение 3 месяцев. В таком случае вы не переплачиваете за оформление полиса в рассрочку</p>


                    </Acc>
                    <h2 className="block-title">Что покрывает полис</h2>
                    <Acc  btn={false} title={'1. ДТП'}>
                        <p>Событие с участием застрахованного автомобиля, возникшее при его движении по дороге или при самопроизвольном движении, а также повреждение другим авто на стоянке</p>
                    </Acc>
                    <Acc  btn={false} title={'2. Угон'}>
                        <p>Незаконное завладение застрахованным транспортным средством третьими лицами</p>
                    </Acc>
                    <Acc btn={false}  title={'3. Тотальная гибель'}>
                        <p>Размер ущерба равен или превышает 75% страховой стоимости автомобиля</p>
                    </Acc>
                    <Acc btn={false}  title={'4. Другие риски'}>
                        <h4>Стихийные бедствия</h4>
                        <p>Повреждение автомобиля в результате стихийных бедствий (град, землетрясение, шторм, ураган, удар молнии, наводнение, смерч)</p>
                        <h4>Падение предметов</h4>
                        <p>Повреждения, нанесенные автомобилю в результате падения предметов (например, деревья, сосульки, конструкции)</p>
                        <h4>Пожар</h4>
                        <p>Пожар или взрыв автомобиля (риск не включает самовозгорание)</p>
                        <h4>Провал под грунт</h4>
                        <p>Повреждение автомобиля из-за просадки грунта или дорожного покрытия (например, обвал асфальта на дороге)</p>
                    </Acc>

        </>
    )
}

export default HealthAccardion