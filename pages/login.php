<?php

if(isset($_POST['username'])){

   session_start();
   $isValid = true;

   if($_POST['username'] == ""){
      $isValid = false;
      $_SESSION['username'] = "Username tidak boleh kosong.";
   }

   if($_POST['password'] == ""){
      $isValid = false;
      $_SESSION['password'] = "Username tidak boleh kosong.";
   }



   if($isValid){
      echo "proses login";
   }

}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="post">

        <div>
            <label for="">Username</label>
            <div>
                <input type="text" name="username" style="border:1px solid <?php echo (isset($_SESSION['username']))?'red':null ?>">
            </div>
            <span style="color:red;"><i><?php echo (isset($_SESSION['username']))?$_SESSION['username']:null ?></i></span>
        </div>
        <div style="margin-top:10px">
            <label for="">Password</label>
            <div>
               <input type="text" name="password" style="border:1px solid <?php echo (isset($_SESSION['password']))?"red":null ?>">
            </div>
            <span style="color:red;"><i><?php echo (isset($_SESSION['password']))?$_SESSION['password']:null ?></i></span>
        </div>
        <div>
            <button type="submit">Login</button>
        </div>

    </form>
</body>
</html>