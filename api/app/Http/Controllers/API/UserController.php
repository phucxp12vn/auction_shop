<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\User;
use Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public $successStatus = 200;

/**
 * login api
 *
 * @return \Illuminate\Http\Response
 */
    public function login(Request $request)
    {
        $rules = [
    		'email' =>'required|email',
    		'password' => 'required|min:8'
    	];
    	$messages = [
    		'email.required' => 'Email là trường bắt buộc',
    		'email.email' => 'Email không đúng định dạng',
    		'password.required' => 'Mật khẩu là trường bắt buộc',
    		'password.min' => 'Mật khẩu phải chứa ít nhất 8 ký tự',
        ];
        $validator = Validator::make($request->all(), $rules, $messages);

        if($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        } else {
            if (Auth::attempt(['email' => request('email'), 'password' => request('password')])) {
                $user = Auth::user();
                //$success['token'] = $user->createToken('MyApp')->accessToken;
                $success['token'] = "tokenaccept";
                return response()->json(['success' => $success], $this->successStatus);
            } else {
                return response()->json(['error' => 'Unauthorised'], 401);
            }
        }
    }

    public function logout() {
		Auth::logout();
        return response()->json(['success'], $this->successStatus);
    }

    public function getUser() {
        return response()->json(['data' => Auth::user()], $this->successStatus);
    }
}
