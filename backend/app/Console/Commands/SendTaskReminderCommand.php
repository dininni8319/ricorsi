<?php

namespace App\Console\Commands;

use App\Models\Task;
use App\Models\Ricorsi;
use Illuminate\Console\Command;
use phpDocumentor\Reflection\Types\Null_;
use Illuminate\Support\Facades\Notification;
use App\Notifications\TaskReminderNotification;

class SendTaskReminderCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = "task_reminders:send";

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = "Send an email reminder before the end date";

    /**
     * Execute the console command.
     *
     * @return int
     */

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $tasks = Task::where(
            "reminder_at",
            "<=",
            now()
                ->addHours(2)
                ->toDateTimeString()
        )->get();

        //here we get all the tasks that they are not been send
        foreach ($tasks as $task) {
            $ricorso_id = $task["ricorsi_id"];

            $ricorso = Ricorsi::find($ricorso_id);
            $email = $ricorso->mail;

            Notification::route("mail", $email)->notify(
                new TaskReminderNotification($task, $ricorso)
            );

            //it sets the task to NULL, which means that the mail has been send
            $task->update(["reminder_at" => null]);
        }
        return 0;
    }
}
