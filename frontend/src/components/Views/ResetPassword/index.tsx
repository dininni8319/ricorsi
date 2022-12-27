import { ResetPasswordForm } from "../../UI/index";
import { useParams  } from 'react-router';
import { LoginStyled } from '../Login/style';
import { SideHeader } from './../../UI/index';

const ResetPassword = () => {
  const { token } = useParams();
  
  return ( 
      <LoginStyled className="form-custom">
        <SideHeader />
      <ResetPasswordForm  token={token}/>
    </LoginStyled>
   );
}
 
export default ResetPassword;