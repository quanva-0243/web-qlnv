<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Users;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class SignController extends Controller
{

    //  LOGIN
    public function Login (Request $request) {
        $validation = Validator::make($request->all(), [
            'email' => 'required|max:255',
            'password' => 'required|max:255|min:8'
        ]);
        if($validation->fails()){
            return response()->json([
                'message'   =>  'Validatie false'
            ], 401);
        }

        // Check user
        $user = DB::table('users')->where('email', $request['email']);
        if( !$user->exists() ){
            return response()->json([
                'message'   =>  'Email not availble'
            ], 401);
        }

        if( !Hash::check($request['password'], $user->value('password')) ){
            return response()->json([
                'message'   =>  'Password incorrect'
            ], 401);
        }

        // if(!Auth::attempt($request->only('email', 'password'))){
        //     return response()->json([
        //         'message'   =>  'Incorrect email or password'
        //     ], 401);
        // }
        // $user = Auth::user();

        //  Check user completed
        //  Create token
        $token = Str::random(128);
        $user->update([
            'token' =>  $token
        ]);

        return response()->json([
            'message'   =>  'Login successfully',
            'token'     =>  $token
        ], 200);
        
    }

    //  LOGOUT
    public function Logout (Request $request) {
        $token = $request['token'];
        $user = DB::table('users')->where('token', $token);
        $user->update([
            'token' =>  null
        ]);
    }

    //  REGISTER
    public function Register (Request $request) {
        $validation = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'password' => 'required|max:255|min:8',
            'email' => 'required|max:255|email',
            // 'phone_number' => 'required|max:255',
            // 'address' => 'required|max:255',
        ]);
        if($validation->fails()){
            return response()->json([
                'message'   =>  'Validatie false'
            ],401);
        }

        // Check email exist
        $emailExist = DB::table('users')->where('email', $request['email'])->exists();
        if($emailExist){
            return response()->json([
                'message'   =>  'Email already in used'
            ],401);
        }
        

        // Register
        $hashedPassword = Hash::make($request['password']);
        $token = Str::random(128);
        $newUser = new Users();
        //  Fillable
        $newUser->name = $request['name'];
        $newUser->email = $request['email'];
        $newUser->password = $hashedPassword;
        $newUser->phone_number = '';
        $newUser->address = '';
        //  Autofill
        $newUser->role = 0;
        $newUser->token = $token;
        $newUser->save();
        return response()->json([
            'message'   =>  'Register successfully'
        ],200);
    }

}
