import { useState, useEffect, useContext, useCallback } from 'react';
import { ConfigContext } from '../../../Contexts/Config';
import useHttp from '../../../Hooks/useHttp';
import { NotificheStyleComponent } from "./style";

const NotificheTotali = () => {
  const [ notifiche, setNotifiche ] = useState<any>({})
  const { api_urls: { backend }} = useContext(ConfigContext);
  const handleNotifiche = useCallback(({ data }: any) => {
    setNotifiche(data);
  }, []);
  
  const {
    isLoading,
    sendRequest: fetchNotifiche
  } = useHttp(handleNotifiche);

  useEffect(() => {
    fetchNotifiche({ url:`/api/notifiche_totali`});
  }, [fetchNotifiche]);

    return (
        <NotificheStyleComponent>
            <h3 className="uppercase">
                Notifiche totali
            </h3>
            <table className="capitalize mt-3">
                <thead>
                    <tr>
                        <th>positive</th>
                        <th>negative</th>
                        <th>notificare</th>
                        <th>ritorno</th>
                        <th>annullati</th>
                        <th>rettificare</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='text-green-700'>{notifiche.positive}</td>
                        <td className='text-red-700'>{notifiche.negative}</td>
                        <td className='text-blue-700'>{notifiche.notificare}</td>
                        <td>{notifiche.ritorno}</td>
                        <td>{notifiche.annullati}</td>
                        <td className='text-yellow-500'>{notifiche.rettificare}</td>
                    </tr>
                </tbody>
            </table>
        </NotificheStyleComponent>
    );
};

export default NotificheTotali;
