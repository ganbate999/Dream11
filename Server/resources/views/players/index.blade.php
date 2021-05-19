@extends('layouts.app', ['activePage' => 'players', 'titlePage' => __('Player List')])

@section('content')
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header card-header-primary">
                            <h4 class="card-title ">Players</h4>
                            <p class="card-category"> Here you can manage players</p>
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
                                            Name
                                        </th>
                                        <th>
                                            Designation
                                        </th>
                                        <th>
                                            Team
                                        </th>
                                        <th>
                                            Credit Points
                                        </th>
                                        <th>
                                            Image
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
                                            Player1
                                        </td>
                                        <td>

                                        </td>
                                        <td>
                                            Australia
                                        </td>
                                        <td>
                                            89
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

