<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{

    protected $fillable = [
        'name',
        'email',
        'password',
        'avatar'
    ];

    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }


    public function assignRole($role)
    {
        $this->roles()->sync($role);
    } 

    public function page()
    {
        return $this->hasOne(Page::class);
    }
    
    
}