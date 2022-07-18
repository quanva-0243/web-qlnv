<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Users;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class SignController extends Controller
{
    public function Login (Request $request) {
        $validation = Validator::make($request->all(), [
            'email' => 'required|max:255',
            'password' => 'required|max:255|min:8'
        ]);
        if($validation->fails()){
            return response()->json([
                'message'   =>  'Validatie false'
            ],401);
        }
        // Check user
        $user = DB::table('users')->where('email', $request['email']);
        if(!$user->exists()){
            return response()->json([
                'message'   =>  'Email not availble'
            ],401);
        }
        $hashedPassword = Hash::make($request['password']);
        if($hashedPassword != $user->password){
            return response()->json([
                'message'   =>  'Password incorrect'
            ],401);
        }
        
    }

    public function Register (Request $request) {
        $validation = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'password' => 'required|max:255|min:8',
            'email' => 'required|max:255|email',
            'phone_number' => 'required|max:255',
            'address' => 'required|max:255',
        ]);
        if($validation->fails()){
            return response()->json([
                'message'   =>  'Validatie false'
            ],401);
        }

        // Check user exist

        // Register
        $hashedPassword = Hash::make($request['password']);
        $newUser = new Users();
        $newUser->email = $request['email'];
        $newUser->name = $request['name'];
        $newUser->role = 0;
        $newUser->password = $hashedPassword;
        $newUser->phone_number = $request['phone_number'];
        $newUser->address = $request['address'];
        $newUser->save();
        return response()->json([
            'message'   =>  'Register successfully',
            'user'  =>  $newUser
        ],200);
    }
}
