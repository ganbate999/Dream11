@extends('layouts.app', ['activePage' => 'matches', 'titlePage' => __('Match List')])

@section('content')
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header card-header-primary">
                            <h4 class="card-title ">Matches</h4>
                            <p class="card-category"> Here you can manage matches</p>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead class=" text-primary">
                                    <tr>
                                        <th>
                                            No
                                        </th>
                                        <th>
                                            Team A
                                        </th>
                                        <th>
                                            Team B
                                        </th>
                                        <th>
                                            Match Status
                                        </th>
                                        <th>
                                            Match Time
                                        </th>
                                        <th>
                                            Match Type
                                        </th>
                                        <th>
                                            Match Players
                                        </th>
                                        <th class="text-right">
                                            Actions
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            Australia
                                        </td>
                                        <td>
                                            New Zealand
                                        </td>
                                        <td>
                                            Fixture
                                        </td>
                                        <td>
                                            2019-06-29 18:00:00
                                        </td>
                                        <td>
                                            ODI
                                        </td>
                                        <td>

                                        </td>
                                        <td class="td-actions text-right">
                                            <a rel="tooltip" class="btn btn-success btn-link" href="#"
                                               data-original-title="" title="">
                                                <i class="material-icons">notes</i>
                                                <div class="ripple-container"></div>
                                            </a>
                                            <a rel="tooltip" class="btn btn-success btn-link" href="#"
                                               data-original-title="" title="">
                                                <i class="material-icons">edit</i>
                                                <div class="ripple-container"></div>
                                            </a>
                                            <a rel="tooltip" class="btn btn-success btn-link" href="#"
                                               data-original-title="" title="">
                                                <i class="material-icons">delete</i>
                                                <div class="ripple-container"></div>
                                            </a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
{{--                    <div class="alert alert-danger">--}}
{{--            <span style="font-size:18px;">--}}
{{--              <b> </b> This is a PRO feature!</span>--}}
{{--                    </div>--}}
                </div>
            </div>
        </div>
    </div>
@endsection

