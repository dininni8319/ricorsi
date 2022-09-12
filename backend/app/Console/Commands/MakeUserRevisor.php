<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;

class MakeUserRevisor extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = "user:makeUserRevisor";

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = "Command that make the user revisor!";

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $email = $this->ask(
            "inserisci l'email dell'utente che vuoi rendere revisore"
        );

        $user = User::where("email", $email)->first();

        if (!$user) {
            $this->error("utente non trovato");
            return;
        }

        $user->is_revisor = true;

        $user->save();

        $this->info("l'utente {$user->name} è ora un revisore");
    }
}
