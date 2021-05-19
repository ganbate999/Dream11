<?php

namespace App\Services;

use function PHPUnit\Framework\isEmpty;

class CricketService extends EntitySportService
{
    /**
     * Fetch Seasons
     * @param $params
     * @return object|false
     */
    public function fetchSeasons($params){
        $endpoint = 'seasons';
        $seasons = $this->getApiCall($endpoint);
        return $seasons;
    }

    /**
     * Fetch Season Competitions
     * @param $params
     * @return object|false
     */
    public function fetchSeasonCompetitions($params){
        $test = $params["test"];
        $competitions = false;
        if($test){
            $sid = "2021";
            $endpoint = "seasons/${sid}/competitions";
            $p = [
                "per_page" => 10,
                "paged" => 1
            ];
            $competitions = $this->getApiCall($endpoint, $p);
            dump($competitions);
        }
        return $competitions;
    }

    /**
     * Fetch Competition Matches
     * @param $params
     * @return object|false
     */
    public function fetchCompetitionMatches($params){
        $test = $params["test"];
        $matches = false;
        if($test){
            $cid = "118007";
            $endpoint = "competitions/${cid}/matches";
            $p = [
                "per_page" => 10,
                "paged" => 1
            ];
            $matches = $this->getApiCall($endpoint, $p);
            dump($matches);
        }
        return $matches;
    }

    /**
     * Fetch Competition Teams
     * @param $params
     * @return object|false
     */
    public function fetchCompetitionTeams($params){
        $test = $params["test"];
        $teams = false;
        if ($test) {
            $cid = "118007";
            $endpoint = "competitions/${cid}/teams";
            $teams = $this->getApiCall($endpoint);
            dump($teams);
        }
        return $teams;
    }

    /**
     * Fetch Competition Squads
     * @param $params
     * @return object|false
     */
    public function fetchCompetitionSquads($params){
        $test = $params["test"];
        $squads = false;
        if($test){
            $cid = "118007";
            $endpoint = "competitions/${cid}/squads";
            $squads = $this->getApiCall($endpoint);
            dump($squads);
        }
        return $squads;
    }

    /**
     * Fetch Competition Standings
     * @param $params
     * @return object|false
     */
    public function fetchCompetitionStandings($params){
        $test = $params["test"];
        $standings = false;
        if($test){
            $cid = "118007";
            $endpoint = "competitions/${cid}/standings";
            $standings = $this->getApiCall($endpoint);
            dump($standings);
        }
        return $standings;
    }


    /**
     * Fetch Competition Stats
     * @param $params
     * @return object|false
     */
    public function fetchCompetitionStats($params){
        $test = $params["test"];
        $stats = false;
        if($test){
            $cid = "118007";
            $endpoint = "competitions/${cid}/stats";
            $stats = $this->getApiCall($endpoint);
            dump($stats);
        }
        return $stats;
    }

    /**
     * Fetch Competition Statistic
     * @param $params
     * @return object|false
     */
    public function fetchCompetitionStatistic($params){
        $test = $params["test"];
        $stats = false;
        if($test){
            $cid = "118007";
            $stat_type = 'batting_most_runs';
            $endpoint = "competitions/${cid}/stats/${stat_type}";
            $p = [
                'format' => 'womenodi'
            ];
            $stats = $this->getApiCall($endpoint, $p);
            dump($stats);
        }
        return $stats;
    }

    /**
     * Fetch Matches List
     * @param $params
     * @return object|false
     */
    public function fetchMatchesList($params){
        $test = $params["test"];
        $matches = false;
        if($test){
            $p = [
                "per_page" => 10
            ];
            if(!isEmpty($params["format"])){
                $p["format"] = $params["format"];
            }
            if(!isEmpty($params["status"])){
                $p["format"] = $params["status"];
            }
            if(!isEmpty($params["date"])){
                $p["format"] = $params["date"];
            }
            if(!isEmpty($params["paged"])){
                $p["paged"] = $params["paged"];
            }
            $endpoint = "matches/";
            $matches = $this->getApiCall($endpoint, $p);
            dump($matches);
        }
        return $matches;
    }

    /**
     * Fetch Match Info
     * @param $params
     * @return object|false
     */
    public function fetchMatchInfo($params){
        $test = $params["test"];
        $match = false;
        if($test){
            $match_id = "118007";
            $endpoint = "matches/${match_id}/info";
            $match = $this->getApiCall($endpoint);
            dump($match);
        }
        return $match;
    }

    /**
     * Fetch Match Fantasy Points
     * @param $params
     * @return object|false
     */
    public function fetchMatchFantasyPoints($params){
        $test = $params["test"];
        $points = false;
        if($test){
            $match_id = "118007";
            $endpoint = "matches/${match_id}/newpoint";
            $points = $this->getApiCall($endpoint);
            dump($points);
        }
        return $points;
    }

    /**
     * Fetch Match Scorecard
     * @param $params
     * @return object|false
     */
    public function fetchMatchScorecard($params){
        $test = $params["test"];
        $scorecard = false;
        if($test){
            $match_id = "118007";
            $endpoint = "matches/${match_id}/scorecard";
            $scorecard = $this->getApiCall($endpoint);
            dump($scorecard);
        }
        return $scorecard;
    }

    /**
     * Fetch Match Innings Commentary
     * @param $params
     * @return object|false
     */
    public function fetchMatchInningsCommentary($params){
        $test = $params["test"];
        $inning_commentary = false;
        if($test){
            $match_id = "118007";
            $inning_id = "1";
            $endpoint = "matches/${match_id}/innings/${inning_id}/commentary";
            $inning_commentary = $this->getApiCall($endpoint);
            dump($inning_commentary);
        }
        return $inning_commentary;
    }

    /**
     * Fetch Match Live
     * @param $params
     * @return object|false
     */
    public function fetchMatchLive($params){
        $test = $params["test"];
        $live = false;
        if($test){
            $match_id = "118007";
            $endpoint = "matches/${match_id}/live";
            $live = $this->getApiCall($endpoint);
            dump($live);
        }
        return $live;
    }

    /**
     * Fetch Fantasy Match Roaster
     * @param $params
     * @return object|false
     */
    public function fetchFantasyMatchRoaster($params){
        $test = $params["test"];
        $roaster = false;
        if($test){
            $cid = "118007";
            $match_id = "118007";
            $endpoint = "competitions/${cid}/squads/${match_id}";
            $roaster = $this->getApiCall($endpoint);
            dump($roaster);
        }
        return $roaster;
    }

    /**
     * Fetch Fantasy Match Squads
     * @param $params
     * @return object|false
     */
    public function fetchMatchSquads($params){
        $test = $params["test"];
        $squads = false;
        if($test){
            $match_id = "118007";
            $endpoint = "matches/${match_id}/squads";
            $squads = $this->getApiCall($endpoint);
            dump($squads);
        }
        return $squads;
    }

    /**
     * Fetch Match Statistics
     * @param $params
     * @return object|false
     */
    public function fetchMatchStatistics($params){
        $test = $params["test"];
        $statistics = false;
        if($test){
            $match_id = "118007";
            $endpoint = "matches/${match_id}/statistics";
            $statistics = $this->getApiCall($endpoint);
            dump($statistics);
        }
        return $statistics;
    }

    /**
     * Fetch Match Wagon
     * @param $params
     * @return object|false
     */
    public function fetchMatchWagon($params){
        $test = $params["test"];
        $wagons = false;
        if($test){
            $match_id = "118007";
            $endpoint = "matches/${match_id}/wagons";
            $wagons = $this->getApiCall($endpoint);
            dump($wagons);
        }
        return $wagons;
    }

    /**
     * Fetch Players
     * @param $params
     * @return object|false
     */
    public function fetchPlayers($params){
        $test = $params["test"];
        $players = false;
        if($test){
            $p = [];
            if(!isEmpty($params["country"])){
                $p["country"] = $params["country"];
            }
            $endpoint = "players";
            $players = $this->getApiCall($endpoint, $p);
            dump($players);
        }
        return $players;
    }

    /**
     * Fetch Player Profile
     * @param $params
     * @return object|false
     */
    public function fetchPlayerProfile($params){
        $test = $params["test"];
        $players = false;
        if($test){
            $pid = 119;
            $endpoint = "players/${pid}";
            $players = $this->getApiCall($endpoint);
            dump($players);
        }
        return $players;
    }

    /**
     * Fetch Player Statistic
     * @param $params
     * @return object|false
     */
    public function fetchPlayerStatistic($params){
        $test = $params["test"];
        $statistic = false;
        if($test){
            $pid = 119;
            $endpoint = "players/${pid}/stats";
            $statistic = $this->getApiCall($endpoint);
            dump($statistic);
        }
        return $statistic;
    }

    /**
     * Fetch Team Info
     * @param $params
     * @return object|false
     */
    public function fetchTeamInfo($params){
        $test = $params["test"];
        $info = false;
        if($test){
            $tid = 119;
            $endpoint = "teams/${tid}";
            $info = $this->getApiCall($endpoint);
            dump($info);
        }
        return $info;
    }

    /**
     * Fetch Team Matches
     * @param $params
     * @return object|false
     */
    public function fetchTeamMatches($params){
        $test = $params["test"];
        $match = false;
        if($test){
            $tid = 119;
            $endpoint = "teams/${tid}/matches";
            $match = $this->getApiCall($endpoint);
            dump($match);
        }
        return $match;
    }

    /**
     * Fetch Team ICC Ranking
     * @param $params
     * @return object|false
     */
    public function fetchICCRanking($params){
        $test = $params["test"];
        $rankings = false;
        if($test){
            $endpoint = "iccranks";
            $rankings = $this->getApiCall($endpoint);
            dump($rankings);
        }
        return $rankings;
    }
}
