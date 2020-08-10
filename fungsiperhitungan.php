<?php

class Wordcount
{
     // fungsi 1
    public function luasPersegi($a)
    {
        return $a * $a;
    }

    // fungsi 2
    public function kelilingPersegi($a)
    {
        return $a * 4;
    }

    // fungsi 3
    public function luasPersegiPanjang($a, $b)
    {
        return $a * $b;
    }

    // fungsi 4
    public function kelilingPersegiPanjang($a, $b)
    {
        return 2 * ($a + $b);
    }

    // fungsi 5
    public function kelilingSegitiga($a, $b, $c)
    {
        return $a + $b + $c;
    }
    // fungsi 6
     public function luasJajarGinjang($a, $b)
    {
        return $a * $b;
    }
    // fungsi 7
    public function countWords($sentence)
    {
        return count(explode(" ", $sentence));
    }

    // fungsi 8
    public function absolutMath($a, $b)
    {
        return abs($a - $b);
    }

    // fungsi 9
    public function pangkatMath($a, $b)
    {
        return pow($a, $b);
    }

    // fungsi 10
    public function akarMath($a)
    {
        return sqrt($a);
    }
}