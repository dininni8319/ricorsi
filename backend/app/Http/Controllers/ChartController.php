<?php

namespace App\Http\Controllers;

use App\Models\Riscossione;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ChartController extends Controller
{
    public function __construct(RiscossioneController $sommF)
    {
        $this->sommF = $sommF;
    }
    
    protected $messageUnSuccess = 'Nessun importo trovato!';
    protected $messageSuccess = 'Importi trovati!';
    protected $mesi = [
        'Jan' => 0 ,
        'Feb' => 1,
        'Mar' => 2,
        'Apr' => 3,
        'May' => 4,
        'Jun' => 5,
        'Jul' => 6,
        'Aug' => 7,
        'Sep' => 8,
        'Oct' => 9,
        'Nov' => 10,
        'Dec' => 11,
    ];

    protected $notifiche_mensili = [
            [ 'mese' => 'Jan', 'notifiche_positive' => 0, 'notifiche_negative' => 0  ,'numero_atti_rinotificare' => 0 ,'cartoline_ritorno_inserite' => 0 ,'nr_atti_annullati' => 0 ,'atti_rettificati' => 0],
            [ 'mese' => 'Feb', 'notifiche_positive' => 0, 'notifiche_negative' => 0 ,'numero_atti_rinotificare' => 0 ,'cartoline_ritorno_inserite' => 0 ,'nr_atti_annullati' => 0 ,'atti_rettificati' => 0],
            [ 'mese' => 'Mar', 'notifiche_positive' => 0, 'notifiche_negative' => 0 ,'numero_atti_rinotificare' => 0 ,'cartoline_ritorno_inserite' => 0 ,'nr_atti_annullati' => 0 ,'atti_rettificati' => 0] ,
            [ 'mese' => 'Apr', 'notifiche_positive' => 0, 'notifiche_negative' => 0 ,'numero_atti_rinotificare' => 0 ,'cartoline_ritorno_inserite' => 0 ,'nr_atti_annullati' => 0 ,'atti_rettificati' => 0],
            [ 'mese' => 'May', 'notifiche_positive' => 0, 'notifiche_negative' => 0 ,'numero_atti_rinotificare' => 0 ,'cartoline_ritorno_inserite' => 0 ,'nr_atti_annullati' => 0 ,'atti_rettificati' => 0],
            [ 'mese' => 'Jun', 'notifiche_positive' => 0, 'notifiche_negative' => 0,'numero_atti_rinotificare' => 0  ,'cartoline_ritorno_inserite' => 0 ,'nr_atti_annullati' => 0 ,'atti_rettificati' => 0],
            [ 'mese' => 'Jul', 'notifiche_positive' => 0, 'notifiche_negative' => 0 ,'numero_atti_rinotificare' => 0 ,'cartoline_ritorno_inserite' => 0 ,'nr_atti_annullati' => 0 ,'atti_rettificati' => 0],
            [ 'mese' => 'Aug', 'notifiche_positive' => 0, 'notifiche_negative' => 0 ,'numero_atti_rinotificare' => 0 ,'cartoline_ritorno_inserite' => 0 ,'nr_atti_annullati' => 0 ,'atti_rettificati' => 0],
            [ 'mese' => 'Sep', 'notifiche_positive' => 0, 'notifiche_negative' => 0 ,'numero_atti_rinotificare' => 0 ,'cartoline_ritorno_inserite' => 0 ,'nr_atti_annullati' => 0 ,'atti_rettificati' => 0],
            [ 'mese' => 'Oct', 'notifiche_positive' => 0, 'notifiche_negative' => 0 ,'numero_atti_rinotificare' => 0 ,'cartoline_ritorno_inserite' => 0 ,'nr_atti_annullati' => 0 ,'atti_rettificati' => 0],
            [ 'mese' => 'Nov', 'notifiche_positive' => 0, 'notifiche_negative' => 0 ,'numero_atti_rinotificare' => 0 ,'cartoline_ritorno_inserite' => 0 ,'nr_atti_annullati' => 0 ,'atti_rettificati' => 0],
            [ 'mese' => 'Dec', 'notifiche_positive' => 0, 'notifiche_negative' => 0 ,'numero_atti_rinotificare' => 0 ,'cartoline_ritorno_inserite' => 0 ,'nr_atti_annullati' => 0 ,'atti_rettificati' => 0],
       ];
    

    public function chartData(Request $request)
    {
        $dati_mensili = [
             [ 'mese' => 'Jan', 'importo_atti_rettificati' => 0, 'importo_atti_annullati' => 0 ],
             [ 'mese' => 'Feb', 'importo_atti_rettificati' => 0, 'importo_atti_annullati' => 0 ],
             [ 'mese' => 'Mar', 'importo_atti_rettificati' => 0, 'importo_atti_annullati' => 0 ],
             [ 'mese' => 'Apr', 'importo_atti_rettificati' => 0, 'importo_atti_annullati' => 0 ],
             [ 'mese' => 'May', 'importo_atti_rettificati' => 0, 'importo_atti_annullati' => 0 ],
             [ 'mese' => 'Jun', 'importo_atti_rettificati' => 0, 'importo_atti_annullati' => 0 ],
             [ 'mese' => 'Jul', 'importo_atti_rettificati' => 0, 'importo_atti_annullati' => 0 ],
             [ 'mese' => 'Aug', 'importo_atti_rettificati' => 0, 'importo_atti_annullati' => 0 ],
             [ 'mese' => 'Sep', 'importo_atti_rettificati' => 0, 'importo_atti_annullati' => 0 ],
             [ 'mese' => 'Oct', 'importo_atti_rettificati' => 0, 'importo_atti_annullati' => 0 ],
             [ 'mese' => 'Nov', 'importo_atti_rettificati' => 0, 'importo_atti_annullati' => 0 ],
             [ 'mese' => 'Dec', 'importo_atti_rettificati' => 0, 'importo_atti_annullati' => 0 ],
        ];
      
        $importo_atti_annullati = DB::table('riscossiones')->select('*')->get();

        $count = 0;

            foreach ($importo_atti_annullati as $key => $obj) {
                $count++;
               
                $len = sizeof($importo_atti_annullati);
                
                $dateMonth = date('M',strtotime($obj->created_at)); 
                $monthId = $this->mesi[$dateMonth];
                
                if($dateMonth == $dati_mensili[$monthId]['mese']){
                    
                    $dati_mensili[$monthId]['importo_atti_rettificati'] += intval($obj->importo_atti_rettificati);
                    $dati_mensili[$monthId]['importo_atti_annullati'] += intval($obj->importo_atti_annullati);       
                }
                
                if ($count > $len) {
                    break;
                }
            }
     
        if(!$importo_atti_annullati){
           return response()->json([
            'success' => false,
            'message' => $this->messageUnSuccess,
         ], 404);
        } else {
           
            return response()->json([
               'success' => true,
               'dati_mensili' => $dati_mensili,
               'message' => $this->messageSuccess
            ], 200);
        }   
    }

    public function notificheTotali(Request $request) 
    {
        $notifichePositive = $this->sommF->addNotifications('notifiche_positive');
        $notificheNegative = $this->sommF->addNotifications('notifiche_negative');
        $notificheNotificare = $this->sommF->addNotifications('numero_atti_rinotificare');
        $notificheRitorno = $this->sommF->addNotifications('cartoline_ritorno_inserite');
        $notificheAnnullati = $this->sommF->addNotifications('nr_atti_annullati');
        $notificheRettificati = $this->sommF->addNotifications('atti_rettificati');
   
        $messageUnSuccess = 'Nessuna notifica trovata!';
        $messageSuccess = 'Queste sono le notifiche che sono state trovate!';
        
        $data = collect([
            'positive' => $notifichePositive,
            'negative' => $notificheNegative,
            'notificare' => $notificheNotificare,
            'ritorno' => $notificheRitorno,
            'annullati' => $notificheAnnullati,
            'rettificare' => $notificheRettificati,
        ]);

        if(!$data){
            return response()->json([
             'success' => false,
             'message' => $messageUnSuccess,
          ], 404);
         } else {
            
            return response()->json([
                'success' => true,
                'data' => $data,
                'message' => $messageSuccess
            ], 200);
         }   
    }
    
    public function notificheMesileSingoliLotti($id)
    {
        /* $notificheMensile = Riscossione::find($id); */
        $notificheMensile = Riscossione::find($id,['notifiche_positive','notifiche_negative', 'numero_atti_rinotificare', 'cartoline_ritorno_inserite','nr_atti_annullati','atti_rettificati']);
       
        if(!$notificheMensile){
            return response()->json([
             'success' => false,
             'message' => $this->messageUnSuccess,
          ], 404);
         } else {
            
             return response()->json([
                'success' => true,
                'notifiche_mensili' => $notificheMensile,
                'message' => $this->messageSuccess
             ], 200);
         }   
    }

    public function chartNotifiche(Request $request)
    {
        $notifiche_mensili = $this->notifiche_mensili;
       
        $importo_atti_annullati = DB::table('riscossiones')->select('*')->get();

            $count = 0;

            foreach ($importo_atti_annullati as $key => $obj) {
                $count++;
               
                $len = sizeof($importo_atti_annullati);
                
                $dateMonth = date('M',strtotime($obj->created_at)); 
                $monthId = $this->mesi[$dateMonth];
                
                if($dateMonth == $notifiche_mensili[$monthId]['mese']){
                    
                    $notifiche_mensili[$monthId]['notifiche_positive'] += intval($obj->notifiche_positive);
                    $notifiche_mensili[$monthId]['notifiche_negative'] += intval($obj->notifiche_negative);   
                    $notifiche_mensili[$monthId]['numero_atti_rinotificare'] += intval($obj->numero_atti_rinotificare);
                    $notifiche_mensili[$monthId]['cartoline_ritorno_inserite'] += intval($obj->cartoline_ritorno_inserite);     
                    $notifiche_mensili[$monthId]['nr_atti_annullati'] += intval($obj->nr_atti_annullati);
                    $notifiche_mensili[$monthId]['atti_rettificati'] += intval($obj->atti_rettificati);         
                }
                
                if ($count > $len) {
                    break;
                }
            }
     
        if(!$importo_atti_annullati){
           return response()->json([
            'success' => false,
            'message' => $this->messageUnSuccess,
         ], 404);
        } else {
           
            return response()->json([
               'success' => true,
               'notifiche_mensili' => $notifiche_mensili,
               'message' => $this->messageSuccess
            ], 200);
        }   
    }
}
