<?php


class Tweet extends Eloquent {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'tweets';

	 public function author()
    {
        return $this->belongsTo('User', 'user_id', 'id');
    }

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */

}