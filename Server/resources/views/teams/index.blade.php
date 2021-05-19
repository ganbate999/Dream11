@extends('layouts.app', ['activePage' => 'teams', 'titlePage' => __('Team List')])

@section('content')
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header card-header-primary">
                            <h4 class="card-title ">Teams</h4>
                            <p class="card-category"> Here you can manage teams</p>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12 text-right">
                                    <a href="#" class="btn btn-sm btn-primary">Add team</a>
                                </div>
                            </div>
                            <div class="table-responsive">
                                <table class="table">
                                    <thead class=" text-primary">
                                    <tr>
                                        <th>
                                            No
                                        </th>
                                        <th>
                                            Team Name
                                        </th>
                                        <th>
                                            Team Short Name
                                        </th>
                                        <th>
                                            Team Image
                                        </th>
                                        <th>
                                            Created At
                                        </th>
                                        <th class="text-right">
                                            Action
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            Maldives
                                        </td>
                                        <td>
                                            Mald
                                        </td>
                                        <td>

                                        </td>
                                        <td>
                                            2020-02-24
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

