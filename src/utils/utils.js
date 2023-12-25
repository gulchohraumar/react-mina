import Swal from "sweetalert2";

export default function success() {
    return Swal.fire({
        icon: "success",
        title: "Operation completed!",
        showConfirmButton: false,
        timer: 1200
    });
}

export  function error() {
    return Swal.fire({
        icon: "error",
        title: "Something went wrong!",
        timer: 1200
    });
}
