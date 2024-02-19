<?php 
require "connect.php";
$id = $_GET["id"];
$sql = "DELETE FROM data_diri WHERE id = $id";
$result = mysqli_query($conn, $sql);

$mar = mysqli_affected_rows($conn);

session_start();

if($mar > 0) {
   $_SESSION['msg'] = "
                     <script>
                        alert('Berhasil dihapus!');
                     </script>
                  ";
} else {
   $_SESSION['msg'] = "
                     <script>
                        alert('Gagal dihapus!');
                     </script>
                  ";
}

header("location: ../tables.php");















// if ($result > 0) {
//    echo "
//       <script>
//          alert('data berhasil dihapus!');
//          document.location.href = 'form.php';
//       </script>
//    ";
// } else {
//    echo "
//       <script>
//          alert('data gagal dihapus!');
//          document.location.href = 'form.php';
//       </script>
//    ";
// }

?>