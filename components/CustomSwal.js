import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const CSwal = withReactContent(Swal);

const CustomSwal = CSwal.mixin({
    customClass: {
        popup: "bg-white/80 backdrop-blur-xl rounded-xl shadow-lg p-6",
        confirmButton: 'bg-green-500 hover:bg-green-600 rounded-lg',
        cancelButton: 'bg-red-500 hover:bg-red-600 rounded-lg',
    },
});

export default CustomSwal;

