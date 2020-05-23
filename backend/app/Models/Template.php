<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Template extends Model
{
    protected $casts = [
        'content' => 'array'
    ];

    protected $fillable = [
        'title',
        'description',
        'status',
        'content',
        'user_id'
    ];

}