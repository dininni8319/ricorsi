<?php

namespace App\Console\Commands;

use DateTime;
use Carbon\Carbon;
use App\Models\Fasi;
use App\Models\Ricorsi;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Notification;
use App\Notifications\SendDateDepositReminder;

class DateDepositReminderCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
     //Get all the fase by group
    /* $dateOfDeposit = Fasi::all()->groupBy('data_deposito_sentenza'); */
    protected $signature = 'datedeposit:send';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send a email to remind of the end date for the deposit date!';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {   
        $twoWeeksBefore = strtotime('-2 week');
        
        $fasi = Fasi::all();
        
        foreach ($fasi as $fase) {
            $date = strtotime('+6 months', $fase->data_deposito_sentenza);
            $dateAfterSixMoths = new DateTime("@$date");
            
            if (Carbon::now("Europe/Stockholm")->format("Y-m-d") <= $dateAfterSixMoths) {
                
                $ricorsi_id = $fase["ricorsi_id"];
                $ricorso = Ricorsi::find($ricorsi_id);
                $email = $ricorso->pec; 
                
                Notification::route("mail", $email)->notify(
                    new SendDateDepositReminder($fase, $ricorso)
                ); 
            }
            
            //it sets the task to NULL, which means that the mail has been send
            if (Carbon::now("Europe/Stockholm")->format("Y-m-d") == $dateAfterSixMoths) {

                $fase->update(["data_deposito_sentenza" => 1]);
            }
            
        }
        return 0;
    }
}
