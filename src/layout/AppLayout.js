import HeaderLayout from '../layout/HeaderLayout'
import FooterLayoutFixed from './FooterLayoutFixed'

const AppLayout = ({children, back}) => {
    return(
        <>
            <HeaderLayout />
            <main>{children}</main>
            <FooterLayoutFixed back={back} />
        </>
    )
}

export default AppLayout