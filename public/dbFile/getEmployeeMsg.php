<?php
header('Access-Control-Allow-Origin: *');
$jobNom = $_POST["jobNom"];
$result = array('name' => "王先慧",
                'staffNo' => "201421092077",
                'position' => "楼栋管理员",
                'sex' => "女",
                'age' => "25",
                'whichDorm' => "22栋",
                'whichFloor' => "1、2、3层",
                'id' => "012345678901234567",
                'phone' => "01234567890",
                'address' => "武汉市洪山区中南民族大学武汉市洪山区中南民族大学",
            );

echo json_encode($result)
?>