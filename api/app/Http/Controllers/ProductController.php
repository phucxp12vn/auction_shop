<?php

namespace App\Http\Controllers;

use App\Product;
use Validator;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getAllProduct()
    {
        $products = Product::latest()->paginate(5);

        return response()->json([
            'result' => $products->toArray()
        ], 201);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getProduct($id)
    {
        echo $id;
        $product = Product::find($id);
        
        if (is_null($product)) {
            return response()->json([
                'message' => 'Product not exist!'
            ], 201);
        }

        return response()->json([
            'result' => $product->toArray()
        ], 201);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function createProduct(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'detail' => 'required',
        ]);

        Product::create($request->all());

        return response()->json([
            'message' => 'Successfully created product!'
        ], 201);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function updateProduct(Request $request, $id)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'name' => 'required',
            'detail' => 'required'
        ]);

        if($validator->fails()){
            return response()->json([
                'message' => 'Input value not valid'
            ], 201);      
        }

        $product = Product::findOrFail($id);
        $product->update($input);

        return response()->json([
            'message' => 'Successfully update product!'
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function deleteProduct($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();

        return response()->json([
            'message' => 'Successfully delete product!'
        ], 201);

    }
}
