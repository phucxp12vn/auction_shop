<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Validator;
use Auth;
use Illuminate\Support\MessageBag;
use Laravel\Socialite\Facades\Socialite;
use App\User;

class LogoutController extends Controller
{
	public function logout(Request $request) {
		Auth::logout();
		return redirect('/login');
	  }
}
