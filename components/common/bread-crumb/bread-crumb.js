import { BreadCrumbs } from "./bread-crumb.e";
import { GWrapper } from "../../../styles/globale-styles.e";
import  Link from "next/link";
const BreadCrumb = ( 
    {
        white,
        Crumb2,
        Link2
    }
) => {
    return (
        <GWrapper  className="relative">
            <BreadCrumbs>
                <div>
                    <Link href={'/'}> 
                        <a>
                        <p className={white}>Главная &nbsp;&#62;&nbsp;&nbsp; </p>
                        </a>
                    </Link>
                    <Link href={Link2}> 
                        <a>
                        <p className={white}>{Crumb2} &nbsp; 	&#62; </p>
                        </a>
                    </Link>
                   
                </div>
            </BreadCrumbs>
        </GWrapper>
    )
}

export default BreadCrumb