<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class CleanUpFolder extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'clean:pending-files';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Cleans the pending files';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $path = resource_path('pending-files/*.csv');
    
        $files = glob($path);
 
         //in the foreach we will process two files at the time;
        foreach ($files as $file) {
        
         // trasforma il contenuto del file in un array
        
           File::delete($file);
        }
    }
}
