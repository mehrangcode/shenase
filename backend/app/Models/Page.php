<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{

    protected $fillable = [
        'title',
        'lead',
        'status',
        'content',
        'user_id'
    ];
    
    public function user()
    {
        return $this->belongsTo('App\User');
    }

}