<?php

// Path to run ./vendor/bin/phpunit --bootstrap vendor/autoload.php FileName.php
// Butuh Framework PHPUnit
use PHPUnit\Framework\TestCase;

// Class yang mau di TEST.
require_once "Wordcount.php";

// Class untuk run Testing.
class SimpleTest extends TestCase
{
    public function testCountWords()
    {
        // Kita pakai class yang mau kita test.
        $Wc = new WordCount();

        // Kita masukan parameter 4 kata, yang harusnya dapat output 4.
        $TestSentence = "Bawazir Fadhil Mohammad"; // 4 Kata ..
        $WordCount = $Wc->countWords($TestSentence);

        // Kita assert equal, ekspektasi nya harus 4, jika benar berarti Wordcount berfungsi dengan baik.
        $this->assertEquals(4, $WordCount);
    }

    public function testAbsolutMath()
    {
        $am = new WordCount();
        $a = 10;
        $b = 33;
        $absMath = $am->absolutMath($a, $b);
        $this->assertEquals(23, $absMath);
    }

    public function testAkarMath()
    {
        $akm = new WordCount();
        $a = 9;
        $akrMath = $akm->akarMath($a);
        $this->assertEquals(3, $akrMath);
    }

    public function testPembulatanMath()
    {
        $pbm = new WordCount();
        $a = 4.6789;
        $pbmMath = $pbm->pembulatanMath($a);
        $this->assertEquals(5, $pbmMath);
    }

    public function testLuasPersegi()
    {
        $lp = new WordCount();
        $a = 4;
        $lpMath = $lp->luasPersegi($a);
        $this->assertEquals(16, $lpMath);
    }

    public function testKelilingPersegi()
    {
        $klp = new WordCount();
        $a = 3;
        $klpMath = $klp->kelilingPersegi($a);
        $this->assertEquals(12, $klpMath);
    }

    public function testLuasPersegiPanjang()
    {
        $lpp = new WordCount();
        $a = 4;
        $b = 9;
        $lppMath = $lpp->luasPersegiPanjang($a, $b);
        $this->assertEquals(36, $lppMath);
    }

    public function testKelilingPersegiPanjang()
    {
        $klpp = new WordCount();
        $a = 3;
        $b = 5;
        $klppMath = $klpp->kelilingPersegiPanjang($a, $b);
        $this->assertEquals(16, $klppMath);
    }

    public function testKelilingSegitiga()
    {
        $kls = new WordCount();
        $a = 3;
        $b = 5;
        $c = 8;
        $klsMath = $kls->kelilingSegitiga($a, $b, $c);
        $this->assertEquals(16, $klsMath);
    }
}