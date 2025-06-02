import Button from "./Button";
import { MyCartIcon } from "../icons/MyCartIcon";
import '../icons/icon.css';


function CardProduct() {
    return (
        <div className="bg-gray-100 flex-grow flex-shrink h-fit w-full flex flex-col items-center p-2 gap-4 rounded-3xl">
            <div className="bg-gray-300 w-full h-[100px] rounded-3xl" />
            <div className="flex flex-col gap-2">
                <p>This is decription pro...</p>
                <p>250gr</p>
                <p>Rp 30.000</p>
            </div>
            <Button
                variant="iconDark"
                icon={<MyCartIcon className="w-12 h-6 icon-white" />}
                className="w-full flex justify-center"
            >
            </Button>
        </div>
    )
}

export default CardProduct;