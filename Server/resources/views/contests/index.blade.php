@extends('layouts.app', ['activePage' => 'contests', 'titlePage' => __('Contest List')])

@section('content')
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header card-header-primary">
                            <h4 class="card-title ">Contests</h4>
                            <p class="card-category"> Here you can manage contests</p>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12 text-right">
                                    <a href="#" class="btn btn-sm btn-primary">Add contest</a>
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
                                            Contest Name
                                        </th>
                                        <th>
                                            Contest Tag
                                        </th>
                                        <th>
                                            Winners
                                        </th>
                                        <th>
                                            Prize Pool
                                        </th>
                                        <th>
                                            Total Team
                                        </th>
                                        <th>
                                            Join Team
                                        </th>
                                        <th>
                                            Entry
                                        </th>
                                        <th>
                                            Contest Description
                                        </th>
                                        <th>
                                            Contest Note1
                                        </th>
                                        <th>
                                            Contest Note2
                                        </th>
                                        <th>
                                            Match Title
                                        </th>
                                        <th>
                                            Type
                                        </th>
                                        <th>
                                            Contest Image
                                        </th>
                                        <th>
                                            Winning Information
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
                                            Hot Contests
                                        </td>
                                        <td>
                                            Get ready for mega winnings!
                                        </td>
                                        <td>
                                            5
                                        </td>
                                        <td>
                                            800
                                        </td>
                                        <td>
                                            10
                                        </td>
                                        <td>
                                            0
                                        </td>
                                        <td>
                                            100
                                        </td>
                                        <td>
                                            The actual prize money may be different than the prize money mentioned above.
                                        </td>
                                        <td>
                                            Note 1
                                        </td>
                                        <td>
                                            Note 2
                                        </td>
                                        <td>
                                            Australia vs New Zealand
                                        </td>
                                        <td>

                                        </td>
                                        <td>

                                        </td>
                                        <td>
                                            Create
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

