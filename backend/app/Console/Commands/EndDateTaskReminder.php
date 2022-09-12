<?php

namespace App\Console\Commands;

use Carbon\Carbon;
use App\Models\Task;
use App\Models\Ricorsi;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Notification;
use App\Notifications\TaskReminderEndDateNotification;

class EndDateTaskReminder extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = "enddate:send";

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = "Command to send email notification for end Date task!";

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $tasksEndDate = Task::where(
            "scadenza_del_compito",
            "<=",
            Carbon::now("Europe/Stockholm")->format("Y-m-d")
        )->get();

        foreach ($tasksEndDate as $value) {
            $ricorsi_id = $value["ricorsi_id"];
            $ricorso = Ricorsi::find($ricorsi_id);
            $email = $ricorso->mail;

            Notification::route("mail", 'gestione.ricorsi@cienneffe.com')->notify(
                new TaskReminderEndDateNotification($value, $ricorso)
            );

            //it sets the task to NULL, which means that the mail has been send
            $value->update(["scadenza_del_compito" => null]);
        }
        return 0;
    }
}
