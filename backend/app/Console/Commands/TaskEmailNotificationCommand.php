<?php

namespace App\Console\Commands;

use App\Models\Ricorsi;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Notification;
use App\Notifications\TaskEmailNotification;

class TaskEmailNotificationCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = "email:send";

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = "Send an email notification to remaind about a task to be completed";

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $notifications = Ricorsi::where("email_notification", true)->get();

        //here we get all the tasks that they are not been send
        foreach ($notifications as $notification) {
            $email = $notification->mail;
              
            Notification::route("mail",$email)->notify(
                new TaskEmailNotification($notification)
            );

            //it sets the task to NULL, which means that the mail has been send
            $notification->update(["email_notification" => 0]);
        }
        return 0;
    }
}
