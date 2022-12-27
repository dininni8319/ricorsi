import { ResetLink } from "../../UI/index";
import { useParams  } from 'react-router';
import { LoginStyled } from '../Login/style';
import { SideHeader } from '../../UI/index';

const ResetLinkView = () => {
  const { token } = useParams();
  
  return ( 
      <LoginStyled className="form-custom">
        <SideHeader />
        <ResetLink />
    </LoginStyled>
   );
}
 
export default ResetLinkView;