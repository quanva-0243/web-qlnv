<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
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
                'success' => false,
                'message'   =>  'Validatie false'
            ], 200);
        }

        // Check user
        // $user = DB::table('user')->where('email', $request['email']);
        // if( !$user->exists() ){
        //     return response()->json([
            // 'success' => false,
        //         'message'   =>  'Email not availble'
        //     ], 200);
        // }

        // if( !Hash::check($request['password'], $user->value('password')) ){
        //     return response()->json([
            // 'success' => false,
        //         'message'   =>  'Password incorrect'
        //     ], 200);
        // }

        if(!Auth::attempt($request->only('email', 'password'))){
            return response()->json([
                'success' => false,
                'message'   =>  'Incorrect email or password'
            ], 200);
        }

        /** @var \App\Models\User  */
        $user = Auth::user();
        $token = $user->createToken('token')->plainTextToken;

        //  Check user completed
        //  Create token

        return response()->json([
            'success'   =>  true,
            'message'   =>  'Login successfully',
            'token'     =>  $token,
            'user'      =>  $user
        ], 200);
        
    }

    //  LOGOUT
    public function Logout (Request $request) {
        $request->user()->tokens()->delete();
        return response()->json([
            'success' => true,
            'message'   =>  'Logout successfully',
        ], 200);
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
                'success' => false,
                'message'   =>  'Validatie false'
            ],200);
        }

        // Check email exist
        $emailExist = DB::table('users')->where('email', $request['email'])->exists();
        if($emailExist){
            return response()->json([
                'success' => false,
                'message'   =>  'Email already in used'
            ],200);
        }
        

        // Register
        $newUser = new User();
        //  Fillable
        $newUser->name = $request['name'];
        $newUser->email = $request['email'];
        $newUser->password = Hash::make($request['password']);
        $newUser->phone_number = '';
        $newUser->address = '';
        //  Autofill
        $newUser->role_id = 1;     //  1: staff     2: admin
        $newUser->save();
        return response()->json([
            'success' => true,
            'message'   =>  'Register successfully'
        ],200);
    }

    public function Info (Request $request) {
        // $user = Auth::user();
        $user = $request->user();
        return response()->json([
            'success' => true,
            'message' => 'Get user successed',
            'user' => $user
        ]);
    }

}
