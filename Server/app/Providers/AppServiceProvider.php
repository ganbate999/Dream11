<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\CricketService;
use App\Services\EntitySportService;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('cricket', CricketService::class);
        $this->app->singleton('entity', EntitySportService::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
