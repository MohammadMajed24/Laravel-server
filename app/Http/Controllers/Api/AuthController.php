<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\SignupRequest;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /** @var \App\Models\User $user */
    public function Signup(SignupRequest $request){
        $data=$request->validated();
        $user=User::create([
           'name'=>$data['name'],
            'email'=>$data['email'],
            'password'=>bcrypt($data['password'])
        ]);
        $token=$user->createToken('main')->plainTextToken;
        return response(compact('user','token'));
    }

    public function Login(LoginRequest $request){
        $data=$request->validated();
        if(!Auth::attempt($data)){
             return response([
                'message'=>'Provided email or password is incorrect'
             ],422);
        }
        /** @var User $user */
        $user=Auth::user();
        $token=$user->createToken('main')->plainTextToken;
        return response(compact('user','token'));
        

    }
    public function Logout(Request $request){
        /** @var User $user */
        $user=$request->user();
        $user->currentAccessToken()->delete();
        return response('',204);
    }
}
