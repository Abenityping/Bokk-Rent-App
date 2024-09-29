<?php

use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\BookController;



Route::post('/register', [RegisterController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/books', [BookController::class, 'index']);
Route::post('/books', [BookController::class, 'store']);
