import { ResetLink } from "../../UI/index";
import { useParams  } from 'react-router';

const ResetLinkView = () => {
  const { token } = useParams();
  
  return <ResetLink />
}
 
export default ResetLinkView;