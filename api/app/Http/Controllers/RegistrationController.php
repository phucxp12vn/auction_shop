<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Validator;
use Auth;
use Illuminate\Support\MessageBag;
use Laravel\Socialite\Facades\Socialite;
use App\User;

class RegistrationController extends Controller
{
    public function getUpdate()
    {
        return view('update');
    }

    public function postUpdate(Request $request)
    {
        $rules = [
            'password' => 'required|confirmed|min:8',

    	];
    	$messages = [
    		'password.required' => 'Mật khẩu là trường bắt buộc',
            'password.min' => 'Mật khẩu phải chứa ít nhất 8 ký tự',
            'password.confirmed' => 'Mật khẩu xác nhận không trùng khớp',
        ];
        
        $validator = Validator::make($request->all(), $rules, $messages);

        if($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        } else {
            $password = $request->input('password');
            
        }
    }
}
