
import { HeaderComponent } from "./style";

const Header = ({ className }:any) => {
  return (
    <HeaderComponent className={className}>
  
        <div className="row">
            <div className="col-12 flex flex-col header-custom">
                <h3 className="h2-custom-class font-semibold uppercase">i professionisti dei crediti problematici</h3>
            </div>
        </div>
    
    </HeaderComponent>
  )
}

export default Header;