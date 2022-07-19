<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{
    
    public function Info (Request $request) {
        $user = DB::table('users')->where('token', $request['token']);
        if($user->exists()){
            return response()->json([
                'message'   =>  'User exist',
                'user'  =>  $user->first()
            ], 200);
        }else{
            return response()->json([
                'message'   =>  'User not found'
            ], 401);
        }
    }
}
