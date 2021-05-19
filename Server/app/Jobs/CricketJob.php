<?php


namespace App\Jobs;


use App\Models\Season;
use App\Services\CricketService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class CricketJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $timeout = 0;

    public $tries = 5;
    private $params;

    private $debug_log = false;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($params)
    {
        $this->params = $params;
        $this->queue = config('queue.cricket_fetch', 'cricket_fetch');
        $this->debug_log = true; //todo fix
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        if (!env('APP_JOB_ENABLE', true)) {
            return;
        }

        if (!empty($this->params['action'])) {
            if (method_exists($this, $this->params['action'])) {
                call_user_func_array([$this, $this->params['action']], ['params' => $this->params]);
            }
        }
    }

    /**
     * Fetch Seasons
     * @param $params
     */
    public function updateSeasons($params){
        /** @var CricketService $cricketService */
        $cricketService = app('cricket');
        $result = $cricketService->fetchSeasons([]);
        $fetchSeasons = [];
        $now = now();
        foreach ($result['items'] as $item){
            array_push($fetchSeasons, [
                'sid' => $item['sid'],
                'name' => $item['sid'],
                'competitions_url' => $item['competitions_url'],
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }
        $count = $result['total_items'];
        Season::insertOnDuplicateKey($fetchSeasons, ['name', 'competitions_url', 'updated_at']);

        echo "Completed Fetch Seasons Total: ${count}";
    }

    /**
     * Fetch Season Competitions
     * @param $params
     */
    public function fetchSeasonCompetitions($params){
        $test = $params["test"];
        if($test){
            $sid = "2021";
            $endpoint = "seasons/${sid}/competitions";
            $p = [
                "per_page" => 10,
                "paged" => 1
            ];
            $competitions = app('entity')->getApiCall($endpoint, $p);
            dump($competitions);
        }
    }

    /**
     * Fetch Competition Matches
     * @param $params
     */
    public function fetchCompetitionMatches($params){
        $test = $params["test"];
        if($test){
            $cid = "118007";
            $endpoint = "competitions/${cid}/matches";
            $p = [
                "per_page" => 10,
                "paged" => 1
            ];
            $matches = app('entity')->getApiCall($endpoint, $p);
            dump($matches);
        }
    }

    /**
     * Fetch Competition Teams
     * @param $params
     */
    public function fetchCompetitionTeams($params){
        $test = $params["test"];
        if($test){
            $cid = "118007";
            $endpoint = "competitions/${cid}/teams";
            $teams = app('entity')->getApiCall($endpoint);
            dump($teams);
        }
    }

    /**
     * Fetch Competition Squads
     * @param $params
     */
    public function fetchCompetitionSquads($params){
        $test = $params["test"];
        if($test){
            $cid = "118007";
            $endpoint = "competitions/${cid}/squads";
            $squads = app('entity')->getApiCall($endpoint);
            dump($squads);
        }
    }

    /**
     * Fetch Competition Standings
     * @param $params
     */
    public function fetchCompetitionStandings($params){
        $test = $params["test"];
        if($test){
            $cid = "118007";
            $endpoint = "competitions/${cid}/standings";
            $standings = app('entity')->getApiCall($endpoint);
            dump($standings);
        }
    }


    /**
     * Fetch Competition Stats
     * @param $params
     */
    public function fetchCompetitionStats($params){
        $test = $params["test"];
        if($test){
            $cid = "118007";
            $endpoint = "competitions/${cid}/stats";
            $stats = app('entity')->getApiCall($endpoint);
            dump($stats);
        }
    }


    /**
     * Fetch Competition Statistic
     * @param $params
     */
    public function fetchCompetitionStatistic($params){
        $test = $params["test"];
        if($test){
            $cid = "118007";
            $stat_type = 'batting_most_runs';
            $endpoint = "competitions/${cid}/stats/${stat_type}";
            $p = [
                'format' => 'womenodi'
            ];
            $stats = app('entity')->getApiCall($endpoint, $p);
            dump($stats);
        }
    }


}
