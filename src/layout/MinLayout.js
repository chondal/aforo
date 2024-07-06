import FooterLayoutFixed from './FooterLayoutFixed'

const MinLayout = ({children, back}) => {
    return(
        <>
            <main className='mt-1'>{children}</main>
            <FooterLayoutFixed back={back} />
        </>
    )
}

export default MinLayout