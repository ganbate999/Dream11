<?php


namespace App\Console\Commands;

use App\Jobs\CricketJob;
use App\Services\CricketService;
use Illuminate\Console\Command;

const CRICKET_SEASONS = 'seasons';
const CRICKET_SEASON_COMPETITIONS = 'season_competitions';
const CRICKET_COMPETITION_MATCHES = 'competition_matches';
const CRICKET_COMPETITION_TEAMS = 'competition_teams';
const CRICKET_COMPETITION_SQUADS = 'competition_squads';
const CRICKET_COMPETITION_STANDINGS = 'competition_standings';
const CRICKET_COMPETITION_STATISTIC_TYPES = 'competition_stats';
const CRICKET_COMPETITION_STATISTIC = 'competition_statistic';

const CRICKET_MATCHES_LIST = 'matches_list';
const CRICKET_MATCH_INFO = 'match_info';
const CRICKET_MATCH_FANTASY_POINTS = 'match_fantasy_points';

class TestCommand extends Command
{
    /**
     * The name and signature of the console command.
     * @var string
     *  type: cricket|football|basketball|handball...
     *  endpoint: top constants
     */
    protected $signature = 'test {type} {endpoint}';

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
        $type = $this->argument('type');
        $endpoint = $this->argument('endpoint');
        switch ($type){
            case 'cricket':

                /** @var CricketService $cricketService */
                $cricketService = app('cricket');

                switch ($endpoint) {
                    case CRICKET_SEASONS:
                        $cricketService->fetchSeasons([
                            'test' => true
                        ]);
                        break;
                    case CRICKET_SEASON_COMPETITIONS:
                        $cricketService->fetchSeasonCompetitions([
                            'test' => true
                        ]);
                        break;
                    case CRICKET_COMPETITION_MATCHES:
                        $cricketService->fetchCompetitionMatches([
                            'test' => true
                        ]);
                        break;
                    case CRICKET_COMPETITION_TEAMS:
                        $cricketService->fetchCompetitionTeams([
                            'test' => true
                        ]);
                        break;
                    case CRICKET_COMPETITION_SQUADS:
                        $cricketService->fetchCompetitionSquads([
                            'test' => true
                        ]);
                        break;
                    case CRICKET_COMPETITION_STANDINGS:
                        $cricketService->fetchCompetitionStandings([
                            'test' => true
                        ]);
                        break;
                    case CRICKET_COMPETITION_STATISTIC_TYPES:
                        $cricketService->fetchCompetitionStats([
                            'test' => true
                        ]);
                        break;
                    case CRICKET_COMPETITION_STATISTIC:
                        $cricketService->fetchCompetitionStatistic([
                            'test' => true
                        ]);
                        break;
                    case CRICKET_MATCHES_LIST:
                        $cricketService->fetchMatchesList([
                            'test' => true
                        ]);
                        break;
                    case CRICKET_MATCH_INFO:
                        $cricketService->fetchMatchInfo([
                            'test' => true
                        ]);
                        break;
                    case CRICKET_MATCH_FANTASY_POINTS:
                        $cricketService->fetchMatchFantasyPoints([
                            'test' => true
                        ]);
                        break;
                }
                break;
        }
    }

}
