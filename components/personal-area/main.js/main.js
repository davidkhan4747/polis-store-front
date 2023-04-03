import { GWrapper } from "../../../styles/globale-styles.e";
import {MainBody , MainTitle , MainDes , MenuItem ,AreaMenu , MenuBtn} from './main.e'
import Link from "next/link";
const MainArea = () => {
    const Person = () => { 
        return (
        <svg width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.0013 0.8125C12.6866 0.8125 9.1888 4.31028 9.1888 8.625C9.1888 12.9397 12.6866 16.4375 17.0013 16.4375C21.316 16.4375 24.8138 12.9397 24.8138 8.625C24.8138 4.31028 21.316 0.8125 17.0013 0.8125Z" fill="#F6A729"/>
        <path d="M8.66797 20.6042C4.35324 20.6042 0.855469 24.1019 0.855469 28.4167V30.8923C0.855469 32.4615 1.99273 33.7995 3.54145 34.0523C12.4557 35.5077 21.5469 35.5077 30.4612 34.0523C32.0099 33.7995 33.1471 32.4615 33.1471 30.8923V28.4167C33.1471 24.1019 29.6494 20.6042 25.3346 20.6042H24.6245C24.2401 20.6042 23.8582 20.6649 23.4928 20.7843L21.6897 21.373C18.6432 22.3678 15.3594 22.3678 12.3129 21.373L10.5098 20.7843C10.1444 20.6649 9.76247 20.6042 9.37811 20.6042H8.66797Z" fill="#F6A729"/>
        </svg>
        )
    }
    const Polis = () => {
        return (
        <svg width="41" height="39" viewBox="0 0 41 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M34.584 38.7918H7.50065C3.47357 38.7918 0.208984 35.5272 0.208984 31.5001V4.29842C0.208984 2.07435 2.40865 0.664354 4.34419 1.33634C4.6207 1.43234 4.89181 1.57082 5.15035 1.7555L5.51504 2.01598C7.32342 3.30769 9.76922 3.30197 11.5827 2.00663C14.118 0.195706 17.55 0.195706 20.0853 2.00663C21.8987 3.30197 24.3446 3.30769 26.1529 2.01598L26.5176 1.7555C28.586 0.278112 31.459 1.75663 31.459 4.29841V20.0418H38.7507C39.6136 20.0418 40.3132 20.7413 40.3132 21.6043V33.0626C40.3132 36.2267 37.7481 38.7918 34.584 38.7918ZM31.9798 23.1668V33.0626C31.9798 34.5008 33.1457 35.6668 34.584 35.6668C36.0222 35.6668 37.1882 34.5008 37.1882 33.0626V23.1668H31.9798ZM23.1257 14.3126C23.1257 13.4496 22.4261 12.7501 21.5632 12.7501H9.06315C8.20021 12.7501 7.50065 13.4496 7.50065 14.3126C7.50065 15.1755 8.20021 15.8751 9.06315 15.8751H21.5632C22.4261 15.8751 23.1257 15.1755 23.1257 14.3126ZM21.0423 20.5626C21.0423 19.6996 20.3428 19.0001 19.4798 19.0001H9.06315C8.20021 19.0001 7.50065 19.6996 7.50065 20.5626C7.50065 21.4255 8.20021 22.1251 9.06315 22.1251H19.4798C20.3428 22.1251 21.0423 21.4255 21.0423 20.5626ZM21.5632 25.2501C22.4261 25.2501 23.1257 25.9496 23.1257 26.8126C23.1257 27.6755 22.4261 28.3751 21.5632 28.3751H9.06315C8.20021 28.3751 7.50065 27.6755 7.50065 26.8126C7.50065 25.9496 8.20021 25.2501 9.06315 25.2501H21.5632Z" fill="#F6A729"/>
        </svg>
        )
    }
    const Korzina = () => {
        return (
        <svg width="42" height="40" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.8905 5.93734H9.11423L6.65553 1.53025C6.37955 1.03557 5.85746 0.729004 5.29102 0.729004H2.16602C1.30307 0.729004 0.603516 1.42856 0.603516 2.2915C0.603516 3.15445 1.30307 3.854 2.16602 3.854H4.37351L6.79996 8.20328L12.3959 20.585L12.4017 20.5976L12.8946 21.6882L7.27615 27.6812C6.87217 28.1121 6.74571 28.734 6.94932 29.2884C7.15293 29.8429 7.65179 30.2352 8.23864 30.3022L13.3598 30.8875C19.7653 31.6196 26.2335 31.6196 32.639 30.8875L37.7601 30.3022C38.6175 30.2043 39.2331 29.4298 39.1351 28.5724C39.0371 27.7151 38.2627 27.0995 37.4053 27.1974L32.2842 27.7827C26.1144 28.4878 19.8844 28.4878 13.7146 27.7827L11.6823 27.5504L15.806 23.1518C15.8458 23.1093 15.8829 23.0651 15.9171 23.0195L17.4855 23.2236C19.6832 23.5095 21.9048 23.5656 24.1142 23.3909C29.2672 22.9833 34.0431 20.5313 37.3774 16.5812L38.5817 15.1545C38.6222 15.1066 38.6597 15.0563 38.6941 15.0039L40.9386 11.5834C42.5296 9.15885 40.7903 5.93734 37.8905 5.93734Z" fill="#F6A729"/>
            <path d="M11.541 33.5415C9.81513 33.5415 8.41602 34.9406 8.41602 36.6665C8.41602 38.3924 9.81513 39.7915 11.541 39.7915C13.2669 39.7915 14.666 38.3924 14.666 36.6665C14.666 34.9406 13.2669 33.5415 11.541 33.5415Z" fill="#F6A729"/>
            <path d="M31.3327 36.6665C31.3327 34.9406 32.7318 33.5415 34.4577 33.5415C36.1836 33.5415 37.5827 34.9406 37.5827 36.6665C37.5827 38.3924 36.1836 39.7915 34.4577 39.7915C32.7318 39.7915 31.3327 38.3924 31.3327 36.6665Z" fill="#F6A729"/>
        </svg>

        )
    }
    const Clock = () =>{
         return (
        <svg width="40" height="39" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.6042 1.22864C9.2144 1.83884 9.2144 2.82816 8.6042 3.43835L3.39587 8.64668C2.78568 9.25688 1.79636 9.25688 1.18616 8.64668C0.575967 8.03649 0.575967 7.04717 1.18616 6.43697L6.3945 1.22864C7.00469 0.618448 7.99401 0.618448 8.6042 1.22864Z" fill="#F6A729"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M19.9993 3.37516C10.2193 3.37516 2.29102 11.3035 2.29102 21.0835C2.29102 30.8635 10.2193 38.7918 19.9993 38.7918C29.7794 38.7918 37.7077 30.8635 37.7077 21.0835C37.7077 11.3035 29.7794 3.37516 19.9993 3.37516ZM21.5619 10.6668C21.5619 9.80388 20.8623 9.10433 19.9993 9.10433C19.1364 9.10433 18.4368 9.80388 18.4368 10.6668V21.0835C18.4368 21.6222 18.7144 22.123 19.1712 22.4085L25.4212 26.3147C26.153 26.7721 27.117 26.5496 27.5743 25.8179C28.0317 25.0861 27.8092 24.1221 27.0775 23.6647L21.5619 20.2175V10.6668Z" fill="#F6A729"/>
            <path d="M31.3945 3.43835C30.7843 2.82816 30.7843 1.83884 31.3945 1.22864C32.0047 0.618448 32.994 0.618448 33.6042 1.22864L38.8125 6.43697C39.4227 7.04717 39.4227 8.03649 38.8125 8.64668C38.2023 9.25688 37.213 9.25688 36.6028 8.64668L31.3945 3.43835Z" fill="#F6A729"/>
        </svg>

         )
    }
    const Settings = () => {
        return (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.2291 21.9999C15.2291 18.2605 18.2605 15.2291 21.9999 15.2291C25.7393 15.2291 28.7707 18.2605 28.7707 21.9999C28.7707 25.7393 25.7393 28.7707 21.9999 28.7707C18.2605 28.7707 15.2291 25.7393 15.2291 21.9999Z" fill="#F6A729"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M20.8764 0.830143C21.4906 0.19464 22.5092 0.19464 23.1234 0.830143L28.4824 6.37491H36.0624C36.9254 6.37491 37.6249 7.07446 37.6249 7.93741V15.5174L43.1697 20.8764C43.8052 21.4906 43.8052 22.5092 43.1697 23.1234L37.6249 28.4824V36.0624C37.6249 36.9254 36.9254 37.6249 36.0624 37.6249H28.4824L23.1234 43.1697C22.5092 43.8052 21.4906 43.8052 20.8764 43.1697L15.5174 37.6249H7.93741C7.07446 37.6249 6.37491 36.9254 6.37491 36.0624V28.4824L0.830143 23.1234C0.194641 22.5092 0.19464 21.4906 0.830141 20.8764L6.37491 15.5174V7.93741C6.37491 7.07446 7.07446 6.37491 7.93741 6.37491H15.5174L20.8764 0.830143ZM21.9999 12.1041C16.5346 12.1041 12.1041 16.5346 12.1041 21.9999C12.1041 27.4652 16.5346 31.8957 21.9999 31.8957C27.4652 31.8957 31.8957 27.4652 31.8957 21.9999C31.8957 16.5346 27.4652 12.1041 21.9999 12.1041Z" fill="#F6A729"/>
        </svg>

        )
    }
    return (
        <>
        <MainBody>
            <GWrapper>
                <MainTitle>Добро пожаловать в личный кабинет </MainTitle>
                <MainDes>Какой раздел вас интересует?</MainDes>
                <AreaMenu>
                    <MenuItem>
                    <Person/>
                        <h2>
                        Мои детали
                        </h2>
                        <p>Тут вы сможете указать ваши данные которые будут использоваться в дальнейшем для процесса покупки полиса</p>
                        <Link href={'personal-area/personal-data'}>
                            <a>
                                <MenuBtn>Перейти</MenuBtn>
                            </a>
                        </Link>
                        </MenuItem>
                        <MenuItem>
                        <Polis/>
                            <h2>
                            Ваши страховые полисы
                            </h2>
                            <p>Список приобретенных электронных страховых полисов</p>
                            <Link href={'personal-area/my-polis'}>
                                <a>
                                    <MenuBtn>Перейти</MenuBtn>
                                </a>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                        <Korzina/>
                            <h2>
                            Купить полис онлайн
                            </h2>
                            <p>Заполните форму и наш сотрудник моментально свяжется с вами</p>
                            <Link href={'/#katalog'}>
                                <a>
                                    <MenuBtn>Перейти</MenuBtn>
                                </a>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                        <Clock/>
                            <h2>
                            Продлить полис
                            </h2>
                            <br/>
                            <p>Отправьте онлайн запрос к нам на обновление полиса и мы моментально ответим </p>
                            <br/>
                            <Link href={'/renewal-polis'}>
                                <a>
                                    <MenuBtn>Перейти</MenuBtn>
                                </a>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                        <Settings/>
                            <h2>
                            Настройки профиля
                            </h2>
                            <p>Перейдите чтобы изменить ваш пароль от аккаунта</p>
                            <br/>
                            <Link href={'/personal-area/settings'}>
                                <a>
                                    <MenuBtn>Перейти</MenuBtn>
                                </a>
                            </Link>
                        </MenuItem>
                    </AreaMenu>
            </GWrapper>
        </MainBody>

        </>
    )
}
export default MainArea