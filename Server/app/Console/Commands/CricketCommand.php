<?php


namespace App\Console\Commands;

use App\Jobs\CricketJob;
use Illuminate\Console\Command;


class CricketCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'cricket {endpoint} {--now}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '';

    /**
     * CricketCommand constructor.
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command
     */
    public function handle(){
        $endpoint = $this->argument('endpoint');
        $runNow = $this->option('now');
        switch ($endpoint) {
            case CRICKET_SEASONS:
                if($runNow){
                    CricketJob::dispatchNow([
                        'action' => 'updateSeasons',
                        'test' => true
                    ]);
                } else {
                    CricketJob::dispatch([
                        'action' => 'updateSeasons',
                    ]);
                }
                break;
        }
    }

}
