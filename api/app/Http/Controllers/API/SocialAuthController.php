<?php

namespace App\Http\Controllers\API;

use App\Services\SocialAccountService;
use Socialite;
use App\Http\Controllers\Controller;

class SocialAuthController extends Controller
{
    public function redirect($social)
    {
        return Socialite::driver($social)->redirect();
    }

    public function callback($social)
    {

        $user = SocialAccountService::createOrGetUser(Socialite::driver($social)->user(), $social);
        auth()->login($user);

        return response()->json(['success' => "tokenSuccess"], 200);
    }
}
