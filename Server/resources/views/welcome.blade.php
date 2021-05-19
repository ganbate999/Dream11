@extends('layouts.app', ['class' => 'off-canvas-sidebar', 'activePage' => 'home', 'title' => __('Dream')])

@section('content')
<div class="container" style="height: auto;">
  <div class="row justify-content-center">
      <div class="col-lg-7 col-md-8">
          <h1 class="text-white text-center">{{ __('PLAY FANTASY CRICKET. WIN CASH DAILY!.') }}</h1>
      </div>
      <div class="col-lg-10 col-md-10">
          <h4 class="text-white text-center">{{ __('Select an upcoming match of your choice Use your sports knowledge to create a fantasy team using 100 credits Participate in Cash or Practice Contests and go for glory!') }}</h4>
      </div>
      <div class="col-lg-7 col-md-8 d-flex flex-row justify-content-center">
          <div class="py-4 px-2">
              <a data-nclk="dwn.android" href="#">
                  <img src="{{asset('material').'/img/google_download.png'}}" alt="Google Play" style="width: 220px">
              </a>
          </div>
          <div class="py-4 px-2">
              <a data-nclk="dwn.appstore" href="#">
                  <img src="{{asset('material').'/img/apple_download.png'}}" alt="App Store" style="width: 220px">
              </a>
          </div>
      </div>
  </div>
</div>
@endsection
