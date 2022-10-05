
import { HeaderComponent } from "./style";

const Header = ({ className }:any) => {
  return (
    <HeaderComponent className={className}>
        <h3 className="h2-custom-class font-semibold uppercase">i professionisti dei crediti problematici</h3> 
        <div className='overlay'></div> 
    </HeaderComponent>
  )
}

export default Header;