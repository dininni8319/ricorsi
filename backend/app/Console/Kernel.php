<?php

namespace App\Console;

use App\Console\Commands\MakeUserRevisor;
use Illuminate\Console\Scheduling\Schedule;
use App\Console\Commands\SendTaskReminderCommand;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected $commands = [MakeUserRevisor::class];

    protected function schedule(Schedule $schedule)
    {
        // you can change to hourly()
        // $schedule->command('inspire')->hourly();
        $schedule->command("task_reminder:send")->everyMinute();
        $schedule->command("email:send")->everyMinute();
        $schedule->command("enddate:send")->everyMinute();
        $schedule->command("clean:pending-files")->everyMinute();

        /* $schedule->command("datedeposit:send")->everyMinute(); */
        /* $schedule->command("datedeposit:send")->weeklyOn(1, '10:00'); */

    }


    
    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__ . "/Commands");

        require base_path("routes/console.php");
    }
}
