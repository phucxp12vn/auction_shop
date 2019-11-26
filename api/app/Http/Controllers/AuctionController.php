<?php

namespace App\Http\Controllers;

use App\Auction;
use Illuminate\Http\Request;
use Validator;
use Illuminate\Support\Facades\Auth;

class AuctionController extends Controller
{
    public function createAuction(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'start_bid' => 'required|numeric|digits_between:0,20',
            'bidAmount' => 'required|numeric|digits_between:0,20',
            'last_bid' => 'required|numeric|digits_between:0,20',
            'timeStart' => 'required|date_format:Y-m-d H:i:s',
            'timeEnd' => 'required|date_format:Y-m-d H:i:s|after:timeStart',
            'seller' => 'string',
        ]);

        $auction = Auction::create(array_merge($request->all(), 
            ['seller' => Auth::id()],
            ['status' => 1],
        ));

        return response()->json([
            'message' => 'Successfully created auction!',
            'auctionId' => $auction->id,
        ], 201);
    }

    public function updateAuction(Request $request, $id)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'name' => 'required|string',
            'start_bid' => 'required|numeric|digits_between:0,20',
            'timeStart' => 'required|date',
            'timeEnd' => 'required|date|after:timeStart',
            'seller' => 'required|string',
            'status' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Input value not valid',
            ], 201);
        }

        $auction = Auction::find($id);
        if (is_null($auction)) {
            return response()->json([
                'message' => 'Auction is not exits!',
            ], 201);
        }
        $auction->update($input);

        return response()->json([
            'message' => 'Successfully update auction!',
        ], 201);
    }

    public function getSingleAuction($id)
    {
        $auction = Auction::find($id);
        if (is_null($auction)) {
            return response()->json([
                'message' => 'Auction is not exist!',
            ], 201);
        }
        return response()->json([
            'result' => $auction->toArray(),
        ], 201);
    }

    public function getAllAuction()
    {
        $auctions = Auction::where('status', '1')->paginate(5);
        return response()->json([
            'result' => $auctions->toArray(),
        ], 201);
    }

    public function deleteAuction($id)
    {
        $auction = Auction::find($id);
        if (is_null($auction)) {
            return response()->json([
                'message' => 'Auction is not exits!',
            ], 201);
        }
        $auction->delete();
        return response()->json([
            'message' => 'Successfully delete auction!',
        ], 201);

    }

    public function approveAuction($id){
        $auction = Auction::find($id);
        if (is_null($auction)) {
            return response()->json([
                'message' => 'Auction is not exits!',
            ], 201);
        }
        $auction->status = 1;
        $auction->save();

        return response()->json([
            'message' => 'Successfully approve auction!',
        ], 201);
    }

}
